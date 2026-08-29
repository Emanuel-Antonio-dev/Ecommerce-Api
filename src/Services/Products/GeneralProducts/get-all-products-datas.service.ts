import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { buildPagination, PaginatedResult, PaginationParams } from '../../../Common/Utils/helpers';
import { buildCacheHash } from "../../../Common/Utils/Cache/hash";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

interface GetAllProductsParams extends PaginationParams {
    is_featured?: boolean;
}

class GetAllProductsDatasService {
    constructor(private readonly repository: PrismaGeneralProductsRepositories) {}

    async getAll({ page, limit, is_featured }: GetAllProductsParams): Promise<PaginatedResult<any> | any>{
        try {

            const pagination = buildPagination({ page, limit })
            const hash = buildCacheHash({ page: pagination.page, limit: pagination.take, is_featured })

            // lista de destaques usa a chave dedicada `products:featured:*`
            // (TTL igual, mas invalidada separadamente por invalidateFeaturedProducts)
            const cacheKey = is_featured
                ? CACHE_KEYS.featuredProducts(hash)
                : CACHE_KEYS.productsList(hash)

            const cached = cacheService.get<any>(cacheKey)
            if (cached) return { ...cached, cached: true }

            // Busca os produtos da página atual
            const allProducts = await this.repository.getAllProductsDatas(pagination.take, pagination.skip, is_featured)

            if (allProducts.length === 0) {
                throw new HttpException(true, 404, "De momento não existem produtos disponíveis")
            }

            // Conta o total de produtos no banco
            const totalProducts = await this.repository.countProducts(is_featured)
            const response = {
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

            cacheService.set(
                cacheKey,
                response,
                is_featured ? CACHE_TTL.PRODUCT_FEATURED : CACHE_TTL.PRODUCTS_LIST
            )

            return { ...response, cached: false }
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