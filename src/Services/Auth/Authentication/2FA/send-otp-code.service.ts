import { PrismaClient } from "../../../../../generated/prisma/client";
import { PrismaAuthenticationsRepositories } from "../../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
import { OtpGeneratorService } from "../../../../Common/Utils/AuthenticationsProcols/2FA/generate-otp-code.protocol";
import { InitAuthenticationsService } from "../init-autentication.service";
import { SendEmail } from "../../../../Common/Utils/Emails/send-email";
import "dotenv/config"

class SendOtpCodesService
{
    constructor(
        private readonly repository: PrismaAuthenticationsRepositories,
        private readonly otpCode: OtpGeneratorService,
        private readonly authenticationService: InitAuthenticationsService,
        private readonly prisma: PrismaClient,
        private emailSender: SendEmail
    ){}

    async sendOtpCode(email?: string, phone_number?: string)
    {
        try
        {
            if(!email && !phone_number)
            {
                return {success: false, statusCode: 400, message: "Informe o seu email ou o seu número de telefone."}
            }
            const getOtp = await this.otpCode.generate(6, 15)
            const transaction = await this.prisma.$transaction(async(tx)=>{
                await this.repository.invalidateActiveAuthentications({ email, phone_number },tx);
                const authentication = await this.authenticationService.initAuthentication({
                    type: "by_otp",
                    used:false,
                    expireIn: new Date(Date.now() +  15 * 60 * 1000),
                    temp_email: email,
                    temp_phone_number: phone_number
                }, tx)
                const result = await this.repository.registerOtpCode({
                    id_authentication_fk: authentication.id_authentication,
                    otp_code: getOtp.otpCodeHash,
                }, tx)
                if(!result)
                {
                    return {success: false, statusCode: 500, message: "Ocorreu um erro ao tentar processar alguns paramêtros."}
                }
                return {success: true, statusCode: 200, datas:{otp_code: getOtp.otpCode}}
            },{maxWait: 30000, timeout: 45000})
            if(!transaction.success)
            {
                return {success: transaction.success, statusCode: transaction.statusCode, message: transaction.message}
            }
            if(email)
            {
                await this.emailSender.sendEmail(email, "Verificação em duas etapas", `Seu codigo e ${transaction.datas?.otp_code}`)
                return {status: transaction.success, statusCode: transaction.statusCode, message: `Acabamos de enviar um código de verificação para ${email}`, 
                    ...(process.env.NODE_ENV === "test" ? { otp_code: transaction.datas?.otp_code } : {})
                    
                    }
            }
            return {status: transaction.success, statusCode: transaction.statusCode, message: `Acabamos de enviar um código de verificação para ${phone_number}`}

        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {SendOtpCodesService}