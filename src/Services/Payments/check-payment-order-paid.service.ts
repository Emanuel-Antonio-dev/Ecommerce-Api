import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PrismaClient } from "../../../generated/prisma/client";
import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";

// check-payment-order-paid.service.ts
class CheckPaymentOrderPaidService {
    constructor(
      private readonly prisma: PrismaClient,
      private readonly repository: IPaymentsRepositories
    ) {}
  
    async check(id_order: number)
    {
      try {
        if (!id_order) {
          throw new HttpException(false, 400, "Informe a ordem.");
        }
  
        const order = await this.prisma.orders.findUnique({
          where: { id_order: id_order },
        });
        if (!order)
        {
          throw new HttpException(false, 404, "Pedido não encontrado");
        }
  
        const is_paid = await this.repository.isPaymentOrderPaid(id_order);
        return { success: true, statusCode: 200, is_paid: is_paid };
      } catch (error) {
        if (error instanceof HttpException)
            return { success: false, statusCode: error.statusCode, message: error.message }

        console.log(error)
        return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente." } 
      }
    }
  }
  export {CheckPaymentOrderPaidService}