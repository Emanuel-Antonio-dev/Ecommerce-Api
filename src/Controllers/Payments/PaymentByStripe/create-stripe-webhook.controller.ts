import { Request, Response } from "express";
import { stripeConfig } from "../../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { prismaService } from "../../../lib/prisma.service";
import { EmailProviderFactory } from "../../../Common/Utils/Emails/email-factory";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";
import { ProcessOrderFulfillmentService } from "../../../Services/Products/Products-Orders/process-order-fulfillment.service";
import { cacheService } from "../../../lib/cache.service";
import { PrismaShipmentsRepository } from '../../../Repositories/Products/Shipments/Prisma/prisma-shipment';
import { RegisterShipmentService } from "../../../Services/Products/Shipments/register-shipment.service";
import { FulfillmentProviderFactory } from "../../../Services/Products/Shipments/Providers/fulfillment-provider.factory";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService);
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService);
const shippmentRepo = new PrismaShipmentsRepository(prismaService)
const shippmentService = new RegisterShipmentService(prismaService, shippmentRepo)
const fulfillmentService = new ProcessOrderFulfillmentService(
  prismaService,
  shippmentService,
  FulfillmentProviderFactory.create()
)
const emailSender: SendEmail = new SendEmail(EmailProviderFactory.create())
const service = new SetOrdersStatusService(prismaService, repository, userRepository, emailSender, fulfillmentService);

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export const createStripeWebhookController = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];

  let event;

  // ==============================
  // 1. VALIDAR STRIPE SIGNATURE
  // ==============================
  try {
    event = stripeConfig.webhooks.constructEvent(req.body, sig as string, endpointSecret);
  } catch (err: any) {
    console.error("❌ Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ==============================
  // 2. PROCESSAR EVENTOS (com idempotência)
  // ==============================
  try {
    // ✅ FIX: registra o event.id ANTES de processar. Se já existir (violação
    // da PK), o evento já foi tratado nesta ou em outra entrega — respondemos
    // 200 sem repetir nenhum efeito colateral (evita estoque/sales_count em
    // dobro quando o Stripe reentrega o mesmo webhook).
    try {
      await prismaService.processedWebhookEvents.create({
        data: { id_event: event.id, event_type: event.type },
      });
    } catch (dedupeError: any) {
      if (dedupeError?.code === "P2002") {
        console.log(`↩️  Evento ${event.id} já processado anteriormente, ignorando.`);
        return res.json({ received: true, deduped: true });
      }
      throw dedupeError;
    }

    switch (event.type) {

      // ======================================================
      // PAYMENT SUCCESS
      // ======================================================
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as any;
        const id_order = Number(paymentIntent.metadata.id_order);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        // ✅ FIX: esta transação cuida apenas do que é específico do
        // provedor de pagamento (Stripe) — status do pagamento e os efeitos
        // de estoque/vendas da compra. A transição do PEDIDO em si (status,
        // email, fulfillment) é responsabilidade única de
        // SetOrdersStatusService.setOrderStatus, chamado logo a seguir.
        // Antes, esta transação também escrevia `orders.status` diretamente
        // — isso corria em paralelo com o que o service tentava fazer e
        // deixava o pedido "completed" antes do service rodar, fazendo o
        // guard de idempotência dele (`order.status !== "pending"`) rejeitar
        // sempre a chamada, silenciosamente (o retorno nunca era checado) —
        // ou seja, nem o email nem o envio automático chegavam a acontecer.
        await prismaService.$transaction(async (tx) => {
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "paid", paid_at: new Date() },
          });

          const orderItems = await tx.orderItems.findMany({
            where: { id_order_fk: id_order },
            include: {
              variant: { select: { id_product_fk: true } },
            },
          });

          affectedVariants = orderItems.map((item: any) => ({
            id_variant: item.id_variant_fk,
            id_product_fk: item.variant.id_product_fk,
          }));

          await Promise.all(
            orderItems.map((item: any) =>
              tx.products.update({
                where: { id_product: item.variant.id_product_fk },
                data: { sales_count: { increment: item.quantity } },
              })
            )
          );
        });

        // ✅ sales_count e stock (decrementado na criação do pedido) mudaram
        // — invalida cada variante/produto envolvido no pedido
        affectedVariants.forEach(({ id_variant, id_product_fk }) =>
          cacheService.invalidateVariant(id_variant, id_product_fk)
        );

        // transiciona o pedido (email + fulfillment automático incluídos)
        // ✅ o pagamento aprovado leva o pedido a "confirmed" — não a
        // "completed". "completed" só acontece quando o envio é
        // efectivamente entregue (ver UpdateShipmentStatusService).
        const result = await service.setOrderStatus(id_order, "confirmed");
        if (!result.success) {
          // ✅ FIX: antes o retorno nunca era verificado — uma falha aqui
          // ficava completamente silenciosa. Agora fica registada para
          // investigação (o pagamento já foi confirmado no Stripe, então o
          // pedido precisa de correção manual, não de retry automático do
          // webhook).
          console.error(`⚠️  setOrderStatus(confirmed) falhou para o pedido ${id_order}:`, result.message);
        }

        break;
      }

      // ======================================================
      // PAYMENT FAILED
      // ======================================================
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as any;
        const id_order = Number(paymentIntent.metadata.id_order);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        await prismaService.$transaction(async (tx) => {
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "failed" },
          });

          // devolve stock das variantes
          const orderItems = await tx.orderItems.findMany({
            where: { id_order_fk: id_order },
            include: {
              variant: { select: { id_product_fk: true } },
            },
          });

          affectedVariants = orderItems.map((item: any) => ({
            id_variant: item.id_variant_fk,
            id_product_fk: item.variant.id_product_fk,
          }));

          await Promise.all(
            orderItems.map((item: any) =>
              tx.productVariants.update({
                where: { id_variant: item.id_variant_fk },
                data: { stock: { increment: item.quantity } },
              })
            )
          );
        });

        // ✅ stock devolvido — cache antigo mostraria stock indisponível
        affectedVariants.forEach(({ id_variant, id_product_fk }) =>
          cacheService.invalidateVariant(id_variant, id_product_fk)
        );

        const result = await service.setOrderStatus(id_order, "failed");
        if (!result.success) {
          console.error(`⚠️  setOrderStatus(failed) falhou para o pedido ${id_order}:`, result.message);
        }

        break;
      }

      // ======================================================
      // PAYMENT CANCELED
      // ======================================================
      case "payment_intent.canceled": {
        const paymentIntent = event.data.object as any;
        const id_order = Number(paymentIntent.metadata.id_order);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        await prismaService.$transaction(async (tx) => {
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "cancelled" },
          });

          // devolve stock das variantes
          const orderItems = await tx.orderItems.findMany({
            where: { id_order_fk: id_order },
            include: {
              variant: { select: { id_product_fk: true } },
            },
          });

          affectedVariants = orderItems.map((item: any) => ({
            id_variant: item.id_variant_fk,
            id_product_fk: item.variant.id_product_fk,
          }));

          await Promise.all(
            orderItems.map((item: any) =>
              tx.productVariants.update({
                where: { id_variant: item.id_variant_fk },
                data: { stock: { increment: item.quantity } },
              })
            )
          );
        });

        // ✅ stock devolvido — cache antigo mostraria stock indisponível
        affectedVariants.forEach(({ id_variant, id_product_fk }) =>
          cacheService.invalidateVariant(id_variant, id_product_fk)
        );

        const result = await service.setOrderStatus(id_order, "cancelled");
        if (!result.success) {
          console.error(`⚠️  setOrderStatus(cancelled) falhou para o pedido ${id_order}:`, result.message);
        }

        break;
      }

      // ======================================================
      // DEFAULT
      // ======================================================
      default:
        console.log(`Evento ignorado: ${event.type}`);
    }

    return res.json({ received: true });
  } catch (error) {
    console.error("❌ Erro ao processar webhook:", error);
    return res.status(500).json({ received: false });
  }
};
