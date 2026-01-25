import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";

class GetAllOrdersService
{
    constructor(private readonly repository: PrismaAdminRepositories){}
    async getAllOrders()
    {
        try
        {
            const result = await this.repository.getAllOrders()
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message:"De momento ainda não existem pedidos"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{GetAllOrdersService}