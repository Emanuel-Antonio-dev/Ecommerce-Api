import { PrismaClient } from "../../../../generated/prisma";
import { EmailProvider } from "../../../Common/Utils/Emails/email-sender";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";

const prisma = new PrismaClient()
const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const emailProvider: EmailProvider = new EmailProvider() 
const emailSender: SendEmail = new SendEmail(emailProvider)
const service = new SetOrdersStatusService(prisma,repository,userRepository,emailSender)

class SetProductsOrdersStatusController
{
    static async setStatus(req: any, res: any):Promise<Response | any>
    {
        try
        {
            const {status, id_user} = req.body
            const {id_order} = req.params
            if(!id_order || !status || !id_user)
            {
                return res.status(400).json({ success: false, statusCode:400, message: "Informe todos os campos" });
            }
            if(status !== "completed" && status !== "cancelled")
            {
                return res.status(400).json({ success: false, statusCode:400, message: "Status inválido" });
            }
            const result = await service.setOrderStatus(id_order,status,id_user);
            if (!result.success)
            {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);   
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {SetProductsOrdersStatusController}