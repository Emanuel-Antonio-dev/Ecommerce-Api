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

      // ✔ pega pedido
      const order = await this.ordersRepository.getOrderItemsByOrder(
        Number(datas.id_order)
      );

      if (!order) {
        return { success: false, statusCode: 404, message: "Pedido não encontrado." };
      }

      // ✔ transação APENAS no banco
      const payment = await this.prisma.$transaction(async (tx) => {
        const createdPayment = await this.paymentsRepository.registerPayment({
          id_order_fk: order.id_order,
          amount: order.total_amount,
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
          id_user: order.id_user_fk.toString(),
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