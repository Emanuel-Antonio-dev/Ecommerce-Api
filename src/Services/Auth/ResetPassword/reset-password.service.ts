import { PrismaAccountRepositories } from "../../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaAuthenticationsRepositories } from "../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
import { PasswordValidator } from "../../../Common/Validators/password-validator";
import * as bcrypt from 'bcrypt';

class ResetPasswordService
{
    constructor(
        private readonly acountRepository: PrismaAccountRepositories,
        private readonly authenticationRepository: PrismaAuthenticationsRepositories
    ){}

    async ResetPassword(newPassword: string, token: string)
    {
        try
        {
            if(!newPassword || !token)
            {
                return {success: false, statusCode: 400, message:"Por favor informe todos os campos"}
            }
            const isValidToken = await this.authenticationRepository.findToken(token, "resetPassword")
            if (!isValidToken || isValidToken.authentication_details.expireIn < new Date() || isValidToken.authentication_details.used)
            {
                return {statusCode: 400, success: false, message: "Infelizmente o seu tempo para alterar a senha expirou, por favor tente novamente." }
            }
            if(!PasswordValidator.IsValidPassword(newPassword))
            {
                return {statusCode: 400, success: false, message: "A sua nova senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, um número e um caractere especial."}

            }
            const passwordHashed = await bcrypt.hash(newPassword, 12)
            await this.acountRepository.updateAccount(isValidToken.authentication_details.account_details.id_account, {password: passwordHashed.trim()})
            await this.authenticationRepository.updateToken(token, true)
            
            if (!isValidToken)
            {
                return {statusCode: 400, success: false, message: "Desculpe, mas não conseguimos realizar esta operação, tente novamente!"}  
            }

            return {statusCode: 200, success: true, message: "Senha alterada com sucesso."}
        } catch (error: any)
        {
            console.log(error)
            return {success: false,statusCode: 500, message:"Ocorreu um erro, por favor tente novamente."}
        }
    }
}
export{ResetPasswordService}