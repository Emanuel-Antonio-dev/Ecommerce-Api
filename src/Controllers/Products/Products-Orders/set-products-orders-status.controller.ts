import { prismaService } from "../../../lib/prisma.service";
import { Request, Response } from "express";
import { EmailProvider } from "../../../Common/Utils/Emails/email-sender";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const emailProvider: EmailProvider = new EmailProvider() 
const emailSender: SendEmail = new SendEmail(emailProvider)
const service = new SetOrdersStatusService(prismaService,repository,userRepository,emailSender)

class SetProductsOrdersStatusController
{
    static async setStatus(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {status, id_user} = req.body
            const {id_order} = req.params

            if(status !== "completed" && status !== "cancelled")
            {
                return res.status(400).json({ success: false, statusCode:400, message: "Status inválido" });
            }
            const result = await service.setOrderStatus(id_order as string,status,id_user);
            return res.status(result.statusCode).json(result);   
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {SetProductsOrdersStatusController}