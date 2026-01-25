import { PrismaAccountRepositories } from "../../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import * as  crypto from "node:crypto"
import "dotenv/config"
import { PrismaAuthenticationsRepositories } from "../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { HtmlTemplateResetPassword } from "../../../Common/Utils/Emails/Templates/resetPasswordTemplate";
import { PrismaClient } from "../../../../generated/prisma/client";

class RequestNewPasswordService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly acountRepository: PrismaAccountRepositories,
        private readonly authenticationRepository: PrismaAuthenticationsRepositories,
        private readonly emailSender: SendEmail
    ){}

    async RequestNewPassword(email: string)
    {
        try
        {
            if(!email)
            {
                return {success: false, statusCode: 400, message:"Por favor informe o seu email"}
            }
            const existsAccount = await this.acountRepository.getDatas({action:"GetOnlyBasicsDatas"}, undefined, email)
            if (!existsAccount)
            {
                return {success: false, statusCode: 404, message:"Não conseguimos encontrar esta conta, verifique se informou correctamente os seus dados"}
            }
            const restPasswordToken = crypto.randomBytes(32).toString("hex")
            await this.prisma.$transaction(async(tx)=>{
                const authentication = await this.authenticationRepository.initAuthenticationDatas({
                    type:"by_token",
                    used:false,
                    expireIn: new Date(Date.now() + 3600000),
                    id_account_fk: existsAccount.id_account
                }, tx)
                if (!authentication)
                {
                    throw new Error()
                }
                const registerToken = await this.authenticationRepository.registerToken({
                    token: restPasswordToken,
                    token_type: "resetPassword",
                    id_authentication: authentication.id_authentication,
                }, tx)
                if (!registerToken)
                {
                    throw new Error()
                }
            })
            ///Add sendEmailService
            await this.emailSender.sendEmail(email, "Recuperação de senha.", HtmlTemplateResetPassword(restPasswordToken))
            return {statusCode: 200, success: true, message:`Enviamos um email para ${email}, por favor verifique a sua caixa de email`, ...(process.env.NODE_ENV==="test"?{token: restPasswordToken}:{})}

        } catch (error: any)
        {
            console.log(error)
            return {success: false,statusCode: 500, message:"Ocorreu um erro, por favor tente novamente."}
        }
    }
}
export{RequestNewPasswordService}