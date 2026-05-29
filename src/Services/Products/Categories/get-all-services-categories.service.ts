import { buildPagination, PaginationParams, PaginatedResult} from "../../../Common/Utils/helpers"
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"

class GetAllProductsCategoriesService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async getAllCategories({limit, page}:PaginationParams):Promise<PaginatedResult<any> | any>
    {
        try
        {
            const pagination = buildPagination({limit, page})

            const categoriesResult = await this.repository.getAllCategoriesDatas(pagination.take, pagination.skip)
            if(categoriesResult.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem categorias"}
            }
            const totalProducts = await this.repository.countCategories()

            return {
                success: true, 
                statusCode: 200,
                datas: categoriesResult,
                meta: {
                    total: totalProducts,
                    page: pagination.page,
                    limit: pagination.take,
                    total_pages: Math.ceil(totalProducts / pagination.take)
                }
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductsCategoriesService}