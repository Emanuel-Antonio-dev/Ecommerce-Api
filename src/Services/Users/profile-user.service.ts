import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";

class UsersProfileService
{
    constructor(private readonly repository: PrismaUsersRepositories){}
    async profile(id_user: number, user_type?:"admin" | "client")
    {
        try
        {
            if(!id_user && !user_type)
            {
                throw new HttpException(false, 400, "Informe todos os campos.")
            }
            if (!await this.repository.getUsersProfileDatas(id_user, user_type))
            {
                throw new HttpException(false, 404, "Perfil não encontrado.")
            }
            const userProfileResult = await this.repository.getUsersProfileDatas(id_user, user_type)
            if (!userProfileResult)
            {
                throw new HttpException(false, 500, "Ocorreu um erro, tente novamente")
            }
            return {success: true, statusCode: 200, datas: userProfileResult}
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
export{UsersProfileService}