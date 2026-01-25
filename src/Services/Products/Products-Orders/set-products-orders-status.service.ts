import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaClient } from "../../../../generated/prisma/client";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class SetOrdersStatusService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaOrdersRepositories,
        private readonly userRepository: PrismaUsersRepositories,
        private readonly emailProvider: SendEmail
    ){}

    async setOrderStatus(id_order: string,status:"completed"|"cancelled"|"failed",id_user: string)
    {
        try
        {
            if(!id_order || !id_user)
            {
                throw new HttpException(false, 400, "Informe todos os campos")
            }
            const order = await this.prisma.orders.findFirst({where: {id_order: id_order, id_user_fk: id_user}})
            const userDatas = await this.userRepository.getUsersProfileDatas(id_user, "client")
            if(!order)
            {
                throw new HttpException(false, 404, "Pedido não encontrado")
            }
            const orderResume = await this.repository.getOrderItemsByOrder(order.id_order)

            if(order.status !== "pending")
            {
                throw new HttpException(false, 400, "Somente pedidos pendentes podem ser aprovados.");
            }
            if(status === "completed")
            {
                const updatedOrder = await this.repository.setOrderStatus(id_order, "completed")
                await this.emailProvider.sendEmail(userDatas.account_details.email,"Confirmar compra","<h1>Pedido aprovado</h1>")
                return { success: true, statusCode: 200, message: "O seu pedido foi aprovado com sucesso.", datas: orderResume };
            }
            if(status === "failed")
            {
                const updatedOrder = await this.repository.setOrderStatus(id_order, "failed")
                await this.emailProvider.sendEmail(userDatas.account_details.email,"O processamento da sua compra falhou","<h1>Pedido falhou</h1>")
                return { success: true, statusCode: 200, message: "O processamento do seu pedido falhou.", datas: orderResume };
            }
            const orderItems = await this.prisma.orderItems.findMany({where:{id_order_fk: id_order}})
            for(const item of orderItems)
            {
                await this.prisma.products.update({where:{id_product: item.id_product_fk},data:{
                    available_stock:{increment: item.quantity}
                }})
            }
            const updatedOrder = await this.repository.setOrderStatus(id_order, "cancelled")
            await this.emailProvider.sendEmail(userDatas.account_details.email,"Pedido negado","<h1>Pedido aprovado</h1>")
            return { success: true, statusCode: 200, message: "O seu pedido foi negado.", datas: {
                updatedOrder,
                orderResume
            } };
        } catch (error: any)
        {
            if (error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{SetOrdersStatusService}