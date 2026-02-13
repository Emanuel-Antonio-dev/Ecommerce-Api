import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";

class GetAllOrdersService
{
    constructor(private readonly repository: PrismaAdminRepositories){}
    async getAllOrders(page?: number, limit?: number)
    {
        try
        {
            const take = limit && limit > 0 ? limit : 50
            const currentPage = page && page > 0 ? page : 1
            const skip = (currentPage - 1) * take

            const result = await this.repository.getAllOrders(take, skip)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message:"De momento ainda não existem pedidos"}
            }
            const totalProducts = await this.repository.countOrders()
            const totalPages = Math.ceil(totalProducts / take)
            return {
                success: true,
                statusCode: 200,
                datas: result,
                paginationDatas: {
                    page: currentPage,
                    limit: take,
                    returned: result.length,
                    totalItems: totalProducts,
                    totalPages
                },
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{GetAllOrdersService}