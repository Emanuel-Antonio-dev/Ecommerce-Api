import { PaymentProviders, Prisma, PrismaClient } from "../../../generated/prisma/client";
import { PaymentsDatas } from "../../interfaces/Payments/Interface";
import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

class RegisterPaymentService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: IPaymentsRepositories
    ){}
    async register(datas: Omit<PaymentsDatas, "amount">, tx?: Omit<Prisma.TransactionClient, "$transaction">) {
        try {
          if (!datas.id_order_fk) {
            throw new HttpException(false, 400, "Informe todos os campos");
          }
      
          if (!Object.values(PaymentProviders).includes(datas.provider)) {
            throw new HttpException(false, 400, "Provedor de pagamento inválido ou não suportado");
        }
      
          const alreadyPaid = await this.repository.isPaymentOrderPaid(datas.id_order_fk);
          if (alreadyPaid) {
            throw new HttpException(false, 409, "Este pedido já possui um pagamento confirmado");
        }
      
          const order = await this.prisma.orders.findUnique({
            where: { id_order: datas.id_order_fk },
            include: {
              order_items: true,
            }
          });
      
          if (!order) {
            throw new HttpException(false, 404, "Ordem de serviço não encontrada ou inválida");
        }
      

          let amount = order.total_amount;

          if (Number(amount) <= 0) {
            throw new HttpException(false, 400, "Não foi possível calcular o valor do pagamento");
        }
      
          const result = await this.repository.registerPayment({
            amount: Number(amount),
            currency: datas.currency,
            id_order_fk: datas.id_order_fk,
            payment_status: datas.payment_status,
            provider: datas.provider,
            provider_reference: datas.provider_reference,
            metadata: datas.metadata
          }, tx);
      
          if (!result) {
            throw new HttpException(false, 500, "Erro ao processar pagamento");
          }
      
          return {
            success: true,
            statusCode: 201,
            message: "Pagamento registrado com sucesso",
            datas: result
          };
      
        } catch (error: any) {
          if (error instanceof HttpException)
            return { success: false, statusCode: error.statusCode, message: error.message };
      
          console.log(error);
          return { success: false, statusCode: 500, message: "Erro interno" };
        }
      }
}
export {RegisterPaymentService}