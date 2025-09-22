import { HttpException } from "../../Common/Middlewares/Filters/HttpException"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"

class UsersDeleteProfileService
{
    constructor(private readonly repository: PrismaUsersRepositories){}

    async deleteProfile(id_user: string)
    {
        try
        {
            if(!await this.repository.getUsersProfileDatas(id_user))
            {
                throw new HttpException(false,404,"Perfil não encontrado.")
            }
            const deleteProfileResult = await this.repository.deleteUserProfile(id_user)
            if(!deleteProfileResult)
            {
                throw new HttpException(false, 500, "Ocorreu um erro, tente novamente.")
            }
            return {success: true, statusCode: 200, message:"Perfil deletado com sucesso!"}
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