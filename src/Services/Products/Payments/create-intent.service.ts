import { PrismaClient } from "../../../../generated/prisma/client";
import { stripeConfig } from "../../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { PrismaPaymentsRepositories } from "../../../Repositories/Paymets/Prisma/prisma-services-payment";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { StripeIntentDatas } from "../../../interfaces/Payments/Interface";

class CreateStripePaymentIntentService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly paymentsRepository: PrismaPaymentsRepositories,
    private readonly ordersRepository: PrismaOrdersRepositories
  ) {}

  async paymentIntent(datas: StripeIntentDatas) {
    try {
      if (!datas.id_order) {
        return { success: false, statusCode: 400, message: "Informe o pedido." };
      }

      // ✅ FIX: usava getOrderItemsByOrder (retorna um ARRAY de itens do pedido,
      // sem os campos total_amount/id_user_fk no nível esperado) em vez de
      // getOrder (retorna o pedido em si). Na prática `order.total_amount` e
      // `order.id_user_fk` eram sempre `undefined`.
      const order = await this.ordersRepository.getOrder(Number(datas.id_order));

      if (!order) {
        return { success: false, statusCode: 404, message: "Pedido não encontrado." };
      }

      // `id_user_fk` é omitido diretamente no retorno de getOrder(); o dono real
      // do pedido vem pela relação já incluída em user_details.id_user.
      const orderOwnerId = order.user_details?.id_user;

      // ✅ FIX: garante que só o dono do pedido (ou um admin) pode gerar um payment intent para ele.
      if (
        datas.requester.user_type !== "admin" &&
        orderOwnerId !== datas.requester.sub
      ) {
        return { success: false, statusCode: 403, message: "Você não tem permissão para pagar este pedido." };
      }

      if (order.status !== "pending") {
        return { success: false, statusCode: 400, message: "Este pedido não está disponível para pagamento." };
      }

      // ✅ FIX: aplica o desconto do cupom (orders.discount_amount) no valor
      // efetivamente cobrado — antes o Stripe sempre cobrava o total cheio,
      // ignorando qualquer cupom aplicado.
      const payableAmount = Math.max(
        Number(order.total_amount) - Number(order.discount_amount ?? 0),
        0
      );

      // ✔ transação APENAS no banco
      const payment = await this.prisma.$transaction(async (tx) => {
        const createdPayment = await this.paymentsRepository.registerPayment({
          id_order_fk: order.id_order,
          amount: payableAmount,
          payment_status: "pending",
          provider: "stripe",
          currency: datas.currency || "aoa",
        });

        await tx.payments.update({
          where: { id_payment: createdPayment.id_payment },
          data: { provider_reference: null }, // ainda sem stripe id
        });

        return createdPayment;
      });

      // ✔ cria stripe usando PAYMENT como base (fora da transação)
      const paymentIntent = await stripeConfig.paymentIntents.create({
        amount: Number(payment.amount) * 100,
        currency: datas.currency || "aoa",
        automatic_payment_methods: {
          enabled: true,
        },
        metadata: {
          payment_id: payment.id_payment, // 🔥 importante
          id_order: order.id_order.toString(),
          id_user: String(orderOwnerId),
        },
        description: `Pagamento do pedido #${order.id_order}`,
      });

      // ✔ atualiza referência stripe fora da transação
      await this.prisma.payments.update({
        where: { id_payment: payment.id_payment },
        data: { provider_reference: paymentIntent.id },
      });

      return {
        success: true,
        statusCode: 200,
        datas: {
          secret: paymentIntent.client_secret,
          payment_id: payment.id_payment,
        },
      };
    } catch (error: any) {
      console.log(error);
      return {
        success: false,
        statusCode: 500,
        message: "Erro interno no pagamento.",
      };
    }
  }
}

export {CreateStripePaymentIntentService}