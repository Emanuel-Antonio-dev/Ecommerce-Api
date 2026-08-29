import { PaginatedResult, PaginationParams, buildPagination} from "../../../Common/Utils/helpers"
import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories"
import { buildCacheHash } from "../../../Common/Utils/Cache/hash"
import { cacheService } from "../../../lib/cache.service"
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys"

class GetAllProductsBrandsService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async getAllBrands({limit, page}: PaginationParams):Promise<PaginatedResult<any> | any>
    {
        try
        {
            const pagination = buildPagination({limit, page})
            const hash = buildCacheHash({ page: pagination.page, limit: pagination.take })
            const cacheKey = CACHE_KEYS.brandsList(hash)

            const cached = cacheService.get<any>(cacheKey)
            if (cached) return { ...cached, cached: true }

            const result = await this.repository.getAllProductBrandsDatas(pagination.take, pagination.skip)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem marcas cadastradas."}
            }
            const totalBrands = await this.repository.countBrands()
            const response = {
                success: true,
                statusCode: 200,
                datas: result,
                meta: {
                    total: totalBrands,
                    page: pagination.page,
                    limit: pagination.take,
                    total_pages: Math.ceil(totalBrands / pagination.take)
                }
            }

            cacheService.set(cacheKey, response, CACHE_TTL.BRANDS)

            return { ...response, cached: false }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente."}     
        }
    }
}
export {GetAllProductsBrandsService}