import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetProductsCategoryDatasService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async getCategory(id_category: number)
    {
        try
        {
            if(!id_category)
            {
                return {success: false, statusCode: 400, message:"Informe a categoria"}
            }

            const cacheKey = CACHE_KEYS.category(id_category)
            const cached = cacheService.get<any>(cacheKey)
            if (cached) return { ...cached, cached: true }

            if(!await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"},id_category, undefined))
            {
                return {success: false, statusCode: 404, message:"Categoria não encontrada"}
            }
            const result = await this.repository.getCategoryData({action:"getAll"}, id_category, undefined)
            if(!result)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao encontrar esta categoria, tente novamente"}
            }
            const response = {success: true, statusCode: 200, datas: result}
            cacheService.set(cacheKey, response, CACHE_TTL.CATEGORY)
            return { ...response, cached: false }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetProductsCategoryDatasService}