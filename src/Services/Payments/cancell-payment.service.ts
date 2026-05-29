import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PrismaClient, Prisma, PaymentStatus} from "../../../generated/prisma/client";
import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";

class CancelPaymentService {
  constructor(
    private readonly repository: IPaymentsRepositories
  ) {}
  
  async cancelPayment(
    id_payment: string,
    tx?: Omit<Prisma.TransactionClient, "$transaction">
  ) {
    try {
      if (!id_payment) {
        throw new HttpException(false, 400, "Informe o pagamento.");
      }

      // 🔸 Buscar pagamento
      const payment = await this.repository.findById(id_payment);

      if (!payment) {
        throw new HttpException(false, 404, "Pagamento não encontrado");
      }

      // 🔸 Validar regra de negócio
      if (payment.payment_status !== PaymentStatus.pending && payment.payment_status !== PaymentStatus.processing)
        {
            throw new HttpException(false,400,`Não é possível cancelar um pagamento com status: ${payment.payment_status}`);
      }

      // 🔸 Atualizar dentro de transação
      const result = await this.repository.cancelPayment(
        id_payment,
        tx
      );

      return {
        success: true,
        statusCode: 200,
        message: "Pagamento cancelado com sucesso",
        data: result
      };

    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.error("❌ Erro ao cancelar pagamento:", error);

      return {
        success: false,
        statusCode: 500,
        message: "Erro interno ao cancelar pagamento"
      };
    }
  }
}

export { CancelPaymentService };