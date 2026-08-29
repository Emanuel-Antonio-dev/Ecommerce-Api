import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginationParams, buildPagination, PaginatedResult } from "../../../Common/Utils/helpers";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";
import { buildCacheHash } from "../../../Common/Utils/Cache/hash";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetAllCouponsService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute({ page, limit }: PaginationParams): Promise<PaginatedResult<any> | any> {
    try {
      const pagination = buildPagination({ page, limit });
      const hash = buildCacheHash({ page: pagination.page, limit: pagination.take });
      const cacheKey = CACHE_KEYS.couponsList(hash);

      const cached = cacheService.get<any>(cacheKey);
      if (cached) return { ...cached, cached: true };

      const result = await this.repository.findAll(pagination.take, pagination.skip);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum cupom encontrado" };
      }

      const total = await this.repository.count();

      const response = {
        success: true,
        statusCode: 200,
        datas: result,
        meta: {
          total,
          page: pagination.page,
          limit: pagination.take,
          total_pages: Math.ceil(total / pagination.take),
        },
      };

      cacheService.set(cacheKey, response, CACHE_TTL.COUPONS_LIST);

      return { ...response, cached: false };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { GetAllCouponsService };
