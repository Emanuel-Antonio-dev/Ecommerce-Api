import { Prisma, PrismaClient} from "../../../generated/prisma/client"
import { HttpException } from "../../Common/Middlewares/Filters/HttpException"
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"

class UsersDeleteProfileService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaUsersRepositories,
        private readonly accountRepository: PrismaAccountRepositories
    ){}

    async deleteProfile(id_user: number)
    {
        try
        {
            if(!id_user)
            {
                throw new HttpException(false, 400, "Informe o usuário.")
            }
            const userExists = await this.repository.getUsersProfileDatas(id_user)
            if(!userExists)
            {
                throw new HttpException(false,404,"Perfil não encontrado.")
            }
            const transaction = await this.prisma.$transaction(async(tx)=>{
                const deleteUser = await this.repository.deleteUserProfile(id_user, tx)
                if(!deleteUser)
                {
                    throw new HttpException(false, 500, "Ocorreu um erro ao deletar os dados do usuario.")
                }
                const deleteUserAccount = await this.accountRepository.deleteAccount(userExists.id_account_fk, tx)
                if(!deleteUserAccount)
                {
                    throw new HttpException(false, 500, "Ocorreu um erro ao deletar o perfil.")
                }
                return {success: true, statusCode: 200, message:"Perfil deletado com sucesso!"}
            })
            return transaction
        } catch (error: any)
        {
            if (error instanceof HttpException)
                {
                    return {success: false, statusCode: error.statusCode, message: error.message}
                }
                console.log(error)
                return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{UsersDeleteProfileService}