import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
class GetAllProductsDatasService {
    constructor(private readonly repository: PrismaGeneralProductsRepositories) {}

    async getAll(page?: number, limit?: number, is_futured?: boolean) {
        try {
            const take = limit && limit > 0 ? limit : 50
            const currentPage = page && page > 0 ? page : 1
            const skip = (currentPage - 1) * take

            // Busca os produtos da página atual
            const allProducts = await this.repository.getAllProductsDatas(take, skip)

            if (allProducts.length === 0) {
                throw new HttpException(true, 404, "De momento não existem produtos disponíveis")
            }

            // Conta o total de produtos no banco
            const totalProducts = await this.repository.countProducts()
            const totalPages = Math.ceil(totalProducts / take)
            return {
                success: true,
                statusCode: 200,
                datas: allProducts,
                paginationDatas: {
                    page: currentPage,
                    limit: take,
                    returned: allProducts.length,
                    totalItems: totalProducts,
                    totalPages
                }
            }

        } catch (error: any) {

            if (error instanceof HttpException) {
                return {
                    success: false,
                    statusCode: error.statusCode,
                    message: error.message
                }
            }

            console.log(error)

            return {
                success: false,
                statusCode: 500,
                message: "Ocorreu um erro interno, tente novamente!"
            }
        }
    }
}
export{GetAllProductsDatasService}