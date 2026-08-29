import { PaginationParams, PaginatedResult, buildPagination} from "../../../Common/Utils/helpers"
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories"
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories"
import { buildCacheHash } from "../../../Common/Utils/Cache/hash"
import { cacheService } from "../../../lib/cache.service"
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys"

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
            const hash = buildCacheHash({ page: pagination.page, limit: pagination.take })
            const cacheKey = CACHE_KEYS.tagsList(hash)

            const cached = cacheService.get<any>(cacheKey)
            if (cached) return { ...cached, cached: true }

            const result = await this.repository.getAllTags(pagination.take, pagination.skip)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem tags"}
            }
            const totalTags = await this.repository.countTags()
            const response = {
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

            cacheService.set(cacheKey, response, CACHE_TTL.TAGS)

            return { ...response, cached: false }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductTagsService}