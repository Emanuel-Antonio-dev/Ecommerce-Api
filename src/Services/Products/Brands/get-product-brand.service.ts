import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetProductsBrandDatasService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async getBrand(brand_name: string)
    {
        try
        {
            if(!brand_name)
            {
                return {success: false, statusCode: 400, message:"Informe a marca"}
            }

            const cacheKey = CACHE_KEYS.brandByName(brand_name)
            const cached = cacheService.get<any>(cacheKey)
            if (cached) return { ...cached, cached: true }

            if(!await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"},undefined, brand_name))
            {
                return {success: false, statusCode: 404, message:"Marca não encontrada"}
            }
            const result = await this.repository.getProductBrandData({action:"getAll"}, undefined, brand_name)
            if(!result)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao retornar os dados desta marca, tente novamente"}
            }
            const response = {success: true, statusCode: 200, datas: result}
            cacheService.set(cacheKey, response, CACHE_TTL.BRAND)
            return { ...response, cached: false }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetProductsBrandDatasService}