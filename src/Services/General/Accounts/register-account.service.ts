import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { accountDatas } from "../../../interfaces/General/Accounts/interface";
import { PrismaAccountRepositories } from "../../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { Prisma } from "../../../../generated/prisma/client";
import { PasswordValidator } from "../../../Common/Validators/password-validator";
import { EmailValidator } from "../../../Common/Validators/email-validator";

class RegisterAccountService
{
    constructor(private readonly repository: PrismaAccountRepositories){}
    
    async register(datas: accountDatas, tx: Omit<Prisma.TransactionClient, "$transaction">)
    {
        try
        {
        if (!datas.email)
        {
            return {success: false, statusCode: 400, message:"Informe o e-mail!"}
        }
        
        // Password é obrigatório apenas se NÃO for autenticação OAuth (Google, etc.)
        // Para OAuth, o provider e providerId são usados em vez da senha
        if (!datas.provider && !datas.password)
        {
            return {success: false, statusCode: 400, message:"Informe a senha!"}
        }

        const alreadyExistsAccount = await this.repository.getDatas({action:"GetOnlyBasicsDatas"}, undefined,datas.email)
        if (alreadyExistsAccount)
        {
            return {success: false, statusCode: 409, message:"Este e-mail já está em uso!"}
        }
        if (!EmailValidator.isValidEmail(datas.email))
        {
            return {success: false, statusCode: 400, message: "Informe um e-mail válido!"}
        }
        
        // Validar password apenas se não for OAuth
        if (datas.password && !PasswordValidator.IsValidPassword(datas.password))
        {
            return {success: false, statusCode: 400, message: "A senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, um número e um caractere especial."}
        }

        const createdAccount = this.repository.register(
            {
                email: datas.email.trim(),
                password: datas.password ? datas.password.trim() : undefined,
                provider: datas.provider,
                providerId: datas.providerId
            }
            ,tx)
        if (!createdAccount)
            {
                return {success: false, statusCode: 400,message: "Ocorreu um erro ao criar esta conta, tente novamente!"}
            }
            return {success: true, statusCode: 201, datas: await createdAccount}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode:500, message:"Ocorreu um erro interno, tente novamente!"}
        }
    }
}

export{RegisterAccountService}