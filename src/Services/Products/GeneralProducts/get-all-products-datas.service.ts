import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { buildPagination, PaginatedResult, PaginationParams } from '../../../Common/Utils/helpers';
class GetAllProductsDatasService {
    constructor(private readonly repository: PrismaGeneralProductsRepositories) {}

    async getAll({ page, limit }: PaginationParams): Promise<PaginatedResult<any> | any>{
        try {

            const pagination = buildPagination({ page, limit })

            // Busca os produtos da página atual
            const allProducts = await this.repository.getAllProductsDatas(pagination.take, pagination.skip)

            if (allProducts.length === 0) {
                throw new HttpException(true, 404, "De momento não existem produtos disponíveis")
            }

            // Conta o total de produtos no banco
            const totalProducts = await this.repository.countProducts()
            return {
                success: true,
                statusCode: 200,
                datas: allProducts,
                meta: {
                    total: totalProducts,
                    page: pagination.page,
                    limit: pagination.take,
                    total_pages: Math.ceil(totalProducts / pagination.take)
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