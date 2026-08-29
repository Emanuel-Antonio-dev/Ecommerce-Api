import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IProductVariantsRepository } from '../../../Repositories/Products/Variants/IProduct-variants-repositories';
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

export class GetVariantByIdService {
  constructor(
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(id_variant: number) {
    try {
      if (!id_variant) {
        throw new HttpException(false, 400, "Informe a variante");
      }

      const cacheKey = CACHE_KEYS.variant(id_variant);
      const cached = cacheService.get<any>(cacheKey);
      if (cached) return { ...cached, cached: true };

      const variant = await this.variantsRepository.findById(id_variant);

      if (!variant) {
        throw new HttpException(false, 404, "Variante não encontrada");
      }

      const response = {
        success: true,
        statusCode: 200,
        datas: variant,
      };

      // TTL curto — stock é sensível a vendas concorrentes
      cacheService.set(cacheKey, response, CACHE_TTL.VARIANT);

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