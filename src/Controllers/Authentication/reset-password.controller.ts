import { Request, Response } from "express"
import { RequestNewPasswordService } from "../../Services/Auth/ResetPassword/request-new-password.service"
import { ResetPasswordService } from "../../Services/Auth/ResetPassword/reset-password.service"
import { PrismaClient } from "@prisma/client"
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories"
import { EmailProvider } from "../../Utils/Emails/email-sender"
import { SendEmail } from "../../Utils/Emails/send-email"

const prisma: PrismaClient = new PrismaClient()
const acountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prisma)
const authenticationRepository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)
const emailProvider: EmailProvider = new EmailProvider()
const emailSender: SendEmail = new SendEmail(emailProvider)
const requestPasswordService: RequestNewPasswordService = new RequestNewPasswordService(prisma, acountRepository, authenticationRepository, emailSender)
const resetPasswordService: ResetPasswordService = new ResetPasswordService(acountRepository, authenticationRepository)

class ResetPasswordController
{
    static async request(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {email} = req.body
            if (!email)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe o seu email"})
            }
            const requestNewPassword = await requestPasswordService.RequestNewPassword(email)
            if (!requestNewPassword.success)
            {
                return res.status(requestNewPassword.statusCode).json(requestNewPassword)
            }
            return res.status(requestNewPassword.statusCode).json(requestNewPassword)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, message: "Ocorreu um erro, tente novamente"})
        }
    }

    static async reset(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {newPassword} = req.body
            const {authorization} = req.query as {authorization: string }

            if (!newPassword || !authorization)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe todos os campos."})
            }
            const resetPassword = await resetPasswordService.ResetPassword(newPassword, authorization)
            if (!resetPassword.success)
            {
                return res.status(resetPassword.statusCode).json(resetPassword)
            }
            return res.status(resetPassword.statusCode).json(resetPassword)
        }
        catch(error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500,  message: "Estamos tentando resolver este problema, tente novamente"})
        }
    }
}
export {ResetPasswordController}