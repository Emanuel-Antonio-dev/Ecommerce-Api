import { Request, Response } from "express"
import { prismaService } from "../../lib/prisma.service"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Authentications/Prisma/PrismaAuthenticationsRepositories"
import { PrismaAccountRepositories } from "../../Repositories/Accounts/Prisma/PrismaAccountRepositories"
import { ValidateOtpCodeService } from "../../Services/Auth/Authentication/2FA/validate-otp-code.service"
import { OtpGeneratorService } from "../../Common/Utils/AuthenticationsProcols/2FA/generate-otp-code.protocol"
import { EmailProvider } from "../../Common/Utils/Emails/email-sender"
import { SendEmail } from "../../Common/Utils/Emails/send-email"
import { SendOtpCodesService } from "../../Services/Auth/Authentication/2FA/send-otp-code.service"
import { InitAuthenticationsService } from "../../Services/Auth/Authentication/init-autentication.service"

const repository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const authenticationRepository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const initAuthenticationService: InitAuthenticationsService = new InitAuthenticationsService(authenticationRepository)
const instanceOfOtpService = new OtpGeneratorService()
const emailProvider: EmailProvider = new EmailProvider()
const emailSender: SendEmail = new SendEmail(emailProvider)
const service = new SendOtpCodesService(repository,instanceOfOtpService,initAuthenticationService,prismaService, emailSender)

class SendOtpCodeController
{
    static async send(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {email, phone_number} = req.body
            const result = await service.sendOtpCode(email, phone_number)
            return res.status(result.statusCode).json(result)
        }
        catch(error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, message: "Estamos tentando resolver este problema, tente novamente"})
        }
    }
}
export {SendOtpCodeController}