import { PaymentStatus, Prisma, PrismaClient } from "../../../generated/prisma/client";
import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

class UpdatePaymentService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: IPaymentsRepositories
  ) {}

  // 🔹 Estados permitidos (máquina de estados)
  private readonly allowedTransitions: Record<PaymentStatus, PaymentStatus[]> = {
    pending: [PaymentStatus.processing, PaymentStatus.cancelled],
  
    processing: [PaymentStatus.paid, PaymentStatus.failed],
  
    paid: [PaymentStatus.refunded],
  
    failed: [],
  
    cancelled: [],
  
    refunded: []
  };

  // 🔹 Validação de status
  private isValidStatus(status: PaymentStatus): boolean {
    return Object.values(PaymentStatus).includes(status as PaymentStatus);
  }

  // 🔹 Validação de transição
  private canTransition(current: PaymentStatus, next: PaymentStatus): boolean {
    return this.allowedTransitions[current].includes(next);
  }

  async updateStatus(
    id_payment: string,
    status: PaymentStatus,
    tx?: Omit<Prisma.TransactionClient, "$transaction">
  ) {
    try {
      // 🔸 Validação básica
      if (!id_payment) {
        throw new HttpException(false, 400, "ID do pagamento é obrigatório");
      }

      if (!this.isValidStatus(status)) {
        throw new HttpException(false, 400, "Status inválido");
      }

      // 🔸 Buscar pagamento
      const payment = await this.repository.findById(id_payment);

      if (!payment) {
        throw new HttpException(false, 404, "Pagamento não encontrado");
      }

      // 🔸 Validar transição de estado
      if (!this.canTransition(payment.payment_status, status)) {
        throw new HttpException(
          false,
          400,
          `Não é permitido alterar de ${payment.payment_status} para ${status}`
        );
      }

      // 🔸 Data de pagamento (apenas quando pago)
      const paidAt =
        status === PaymentStatus.paid ? new Date() : undefined;

      // 🔸 Atualizar
      const result = await this.repository.updatePaymentStatus(
        id_payment,
        status,
        paidAt,
        tx
      );

      if (!result) {
        throw new HttpException(
          false,
          500,
          "Erro ao atualizar status do pagamento"
        );
      }

      return {
        success: true,
        statusCode: 200,
        message: "Status do pagamento atualizado com sucesso",
      };

    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.error("❌ Erro interno:", error);

      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno."
      };
    }
  }
}

export { UpdatePaymentService };