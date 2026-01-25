import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";

class GetAllUsersService
{
    constructor(private readonly repository: PrismaAdminRepositories){}
    async getAllUsers()
    {
        try
        {
            const result = await this.repository.getAllUsers()
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message:"De momento ainda não existem usuários"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{GetAllUsersService}