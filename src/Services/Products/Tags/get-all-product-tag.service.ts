import { PaginationParams, PaginatedResult, buildPagination} from "../../../Common/Utils/helpers"
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories"
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories"

class GetAllProductTagsService
{
    constructor(
        private readonly repository: PrismaProductsTagsRepositories,
    ){}

    async getAllProductTagsService({ page, limit }: PaginationParams):Promise<PaginatedResult<any> | any>
    {
        try
        {
            const pagination = buildPagination({ page, limit })
            const result = await this.repository.getAllTags(pagination.take, pagination.skip)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem tags"}
            }
            const totalTags = await this.repository.countTags()
            return {
                success: true,
                statusCode: 200,
                datas: result,
                meta: {
                    total: totalTags,
                    page: pagination.page,
                    limit: pagination.take,
                    total_pages: Math.ceil(totalTags / pagination.take)
                }
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductTagsService}