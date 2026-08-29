import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginationParams, buildPagination } from "../../../Common/Utils/helpers";
import { IWishlistRepositories } from "../../../Repositories/Products/Wishlist/I-wishlist-repository";
import { buildCacheHash } from "../../../Common/Utils/Cache/hash";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetWishlistService {
  constructor(private readonly repository: IWishlistRepositories) {}

  async execute(id_user_fk: number, { page, limit }: PaginationParams) {
    try {
      if (!id_user_fk) {
        throw new HttpException(false, 400, "Informe o usuário");
      }

      const pagination = buildPagination({ page, limit });
      const hash = buildCacheHash({ page: pagination.page, limit: pagination.take });
      const cacheKey = CACHE_KEYS.wishlist(id_user_fk, hash);

      const cached = cacheService.get<any>(cacheKey);
      if (cached) return { ...cached, cached: true };

      const items = await this.repository.findByUser(
        id_user_fk,
        pagination.take,
        pagination.skip
      );

      const total = await this.repository.countByUser(id_user_fk);

      const response = {
        success: true,
        statusCode: 200,
        datas: items,
        meta: {
          total,
          page: pagination.page,
          limit: pagination.take,
          total_pages: Math.ceil(total / pagination.take),
        },
      };

      cacheService.set(cacheKey, response, CACHE_TTL.WISHLIST);

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

export { GetWishlistService };
