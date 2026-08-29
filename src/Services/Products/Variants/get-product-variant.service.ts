import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/general-products-repositoires";
import { IProductVariantsRepository } from "../../../Repositories/Products/Variants/IProduct-variants-repositories";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

export class GetProductVariantsService {
  constructor(
    private productRepository: IGeneralProductsRepositories,
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(id_product: number) {
    try {
      if (!id_product) {
        throw new HttpException(false, 400, "Informe o produto");
      }

      const cacheKey = CACHE_KEYS.productVariants(id_product);
      const cached = cacheService.get<any>(cacheKey);
      if (cached) return { ...cached, cached: true };

      const existsProduct = await this.productRepository.getProductDatas(
        { action: "GetOnlyBasicsDatas" },
        id_product
      );
      if (!existsProduct) {
        throw new HttpException(false, 404, "Produto não encontrado");
      }

      const variants = await this.variantsRepository.findByProductId(id_product);
      if(!variants){
        throw new HttpException(false, 404, "Nenhuma variante encontrada para este produto");
      }
      const response = {
        success: true,
        statusCode: 200,
        datas: variants,
      };

      // TTL curto — stock é sensível a vendas concorrentes
      cacheService.set(cacheKey, response, CACHE_TTL.PRODUCT_VARIANTS);

      return { ...response, cached: false };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message,
        };
      }

      console.error(error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente.",
      };
    }
  }
}