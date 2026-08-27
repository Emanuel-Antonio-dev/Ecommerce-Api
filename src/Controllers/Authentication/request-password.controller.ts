import { Request, Response } from "express"
import { prismaService } from "../../lib/prisma.service"
import { RequestNewPasswordService } from "../../Services/Auth/ResetPassword/request-new-password.service"
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories"
import { EmailProviderFactory } from "../../Common/Utils/Emails/email-factory"
import { SendEmail } from "../../Common/Utils/Emails/send-email"

const acountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const authenticationRepository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const emailProvider: EmailProviderFactory = new EmailProviderFactory()
const emailSender: SendEmail = new SendEmail(EmailProviderFactory.create())
const requestPasswordService: RequestNewPasswordService = new RequestNewPasswordService(prismaService, acountRepository, authenticationRepository, emailSender)
class RequestPasswordController
{
    static async requestPassword(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {email} = req.body
            const requestNewPassword = await requestPasswordService.RequestNewPassword(email)
            return res.status(requestNewPassword.statusCode).json(requestNewPassword)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, message: "Ocorreu um erro, tente novamente"})
        }
    }

}
export {RequestPasswordController}