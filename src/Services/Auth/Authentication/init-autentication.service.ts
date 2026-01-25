import { PrismaClient, Prisma} from "../../../../generated/prisma/client";
import { AuthenticationDatas } from "../../../interfaces/Shared/authentication.interface";
import { PrismaAuthenticationsRepositories } from "../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

class InitAuthenticationsService
{
    constructor(private readonly repository: PrismaAuthenticationsRepositories){}

    async initAuthentication(datas: AuthenticationDatas, tx: Omit<Prisma.TransactionClient, "$transaction">)
    {
        try
        {
            const result = await this.repository.initAuthenticationDatas(datas, tx)
            if(!result)
            {
            return {success: false, statusCode:500, message:"Ocorreu um erro ao tentar processar alguns paramêtros!"}
            }
            return result
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode:500, message:"Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {InitAuthenticationsService}