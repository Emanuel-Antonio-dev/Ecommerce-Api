import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaClient } from "../../../../generated/prisma/client";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RegisterShipmentService } from "../Shipments/register-shipment.service";
import { RegisterShipmentDatas } from "../../../interfaces/Products/Shipments/interface";

class SetOrdersStatusService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaOrdersRepositories,
    private readonly userRepository: PrismaUsersRepositories,
    private readonly emailProvider: SendEmail,
    private readonly shippmentService: RegisterShipmentService
  ) {}

  async setOrderStatus(
    id_order: number,
    status: "completed" | "cancelled" | "failed",
    shippmentDatas?: RegisterShipmentDatas
  ) {
    try {
      if (!id_order) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      if (!["completed", "cancelled", "failed"].includes(status)) {
        throw new HttpException(false, 400, "Status inválido");
      }

      const order = await this.prisma.orders.findFirst({
        where: { id_order}
      });

      if (!order) {
        throw new HttpException(false, 404, "Pedido não encontrado");
      }

      const userDatas = await this.userRepository.getUsersProfileDatas(
        order.id_user_fk,
        "client"
      );

      if (order.status !== "pending") {
        throw new HttpException(
          false,
          400,
          "Somente pedidos pendentes podem ser processados."
        );
      }

      let orderResume;

      // ==============================
      // COMPLETED (PAGAMENTO OK)
      // ==============================
      if (status === "completed" && shippmentDatas) {
        return await this.prisma.$transaction(async(tx)=>{
          await this.repository.setOrderStatus(id_order, "completed");
          orderResume = await this.repository.getOrderItemsByOrder(order.id_order, tx);

          const shippement = await this.shippmentService?.registerShipment({
            ...shippmentDatas,
            id_order_fk: id_order
          }, tx)
          
        if(!shippement?.success)
        {
          return shippement
        }
        const shippentResponse = shippement.datas

        await this.emailProvider.sendEmail(
          userDatas.account_details.email,
          "Compra confirmada",
          "<h1>O seu pedido foi aprovado</h1>"
        );
        console.log(orderResume)
        return {
          success: true,
          statusCode: 200,
          message: "Pedido aprovado e envio processado.",
          datas: orderResume
        };
        })
      }

      // ==============================
      // FAILED (PAGAMENTO FALHOU)
      // ==============================
      if (status === "failed") {
        await this.repository.setOrderStatus(id_order, "failed");

        orderResume = await this.repository.getOrderItemsByOrder(order.id_order);

        await this.emailProvider.sendEmail(
          userDatas.account_details.email,
          "Pagamento falhou",
          "<h1>O pagamento do seu pedido falhou</h1>"
        );

        return {
          success: true,
          statusCode: 200,
          message: "Pagamento falhou.",
          datas: orderResume
        };
      }

      // ==============================
      // CANCELLED (DEVOLVE STOCK)
      // ==============================

      const orderItems = await this.prisma.orderItems.findMany({
        where: { id_order_fk: id_order }
      });

      for (const item of orderItems) {
        // 🔥 aqui está a mudança principal
        const variant = await this.prisma.productVariants.findFirst({
          where: {
            id_variant: item.id_variant_fk
          }
        });

        if (variant) {
          await this.prisma.productVariants.update({
            where: {
              id_variant: variant.id_variant
            },
            data: {
              stock: {
                increment: item.quantity
              }
            }
          });
        }
      }

      await this.repository.setOrderStatus(id_order, "cancelled");

      orderResume = await this.repository.getOrderItemsByOrder(order.id_order);

      await this.emailProvider.sendEmail(
        userDatas.account_details.email,
        "Pedido cancelado",
        "<h1>O seu pedido foi cancelado</h1>"
      );

      return {
        success: true,
        statusCode: 200,
        message: "Pedido cancelado com sucesso.",
        datas: { orderResume }
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.log(error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!"
      };
    }
  }
}

export { SetOrdersStatusService };