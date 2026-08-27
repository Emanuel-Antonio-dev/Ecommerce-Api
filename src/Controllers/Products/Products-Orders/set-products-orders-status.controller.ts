import { prismaService } from "../../../lib/prisma.service";
import { Request, Response } from "express";
import { EmailProviderFactory } from "../../../Common/Utils/Emails/email-factory";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";
import { RequestWithCredentials } from "../../../interfaces/Shared/authentication.interface";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const emailSender: SendEmail = new SendEmail(EmailProviderFactory.create())
const service = new SetOrdersStatusService(prismaService,repository,userRepository,emailSender)

class SetProductsOrdersStatusController
{
    static async set(req: RequestWithCredentials, res: Response):Promise<Response | any>
    {
        try
        {
            const {status} = req.body
            const id_user = Number(req.credentials?.sub) 
            const id_order = Number(req.params.id_order)
            const result = await service.setOrderStatus(id_order,status,id_user);
            return res.status(result.statusCode).json(result);   
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {SetProductsOrdersStatusController}