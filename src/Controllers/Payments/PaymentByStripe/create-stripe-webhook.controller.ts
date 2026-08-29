import { Request, Response } from "express";
import { stripeConfig } from "../../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { prismaService } from "../../../lib/prisma.service";
import { EmailProviderFactory } from "../../../Common/Utils/Emails/email-factory";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";
import { cacheService } from "../../../lib/cache.service";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService);
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService);
const emailSender: SendEmail = new SendEmail(EmailProviderFactory.create())
const service = new SetOrdersStatusService(prismaService, repository, userRepository, emailSender);

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
        const id_user  = Number(paymentIntent.metadata.id_user);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        await prismaService.$transaction(async (tx) => {
          // 1. atualiza payment → paid
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "paid", paid_at: new Date() },
          });

          // 2. atualiza order → completed
          await tx.orders.update({
            where: { id_order },
            data: { status: "completed" },
          });

          // 3. incrementa sales_count por quantidade vendida
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

        // 4. email de confirmação (fora da transação — I/O externo)
        await service.setOrderStatus(id_order, "completed", id_user);

        break;
      }

      // ======================================================
      // PAYMENT FAILED
      // ======================================================
      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as any;
        const id_order = Number(paymentIntent.metadata.id_order);
        const id_user  = Number(paymentIntent.metadata.id_user);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        await prismaService.$transaction(async (tx) => {
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "failed" },
          });

          await tx.orders.update({
            where: { id_order },
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

        await service.setOrderStatus(id_order, "failed", id_user);

        break;
      }

      // ======================================================
      // PAYMENT CANCELED
      // ======================================================
      case "payment_intent.canceled": {
        const paymentIntent = event.data.object as any;
        const id_order = Number(paymentIntent.metadata.id_order);
        const id_user  = Number(paymentIntent.metadata.id_user);
        let affectedVariants: { id_variant: number; id_product_fk: number }[] = [];

        await prismaService.$transaction(async (tx) => {
          await tx.payments.update({
            where: { provider_reference: paymentIntent.id },
            data: { status: "cancelled" },
          });

          await tx.orders.update({
            where: { id_order },
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

        await service.setOrderStatus(id_order, "cancelled", id_user);

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