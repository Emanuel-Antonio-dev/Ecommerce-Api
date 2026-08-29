import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/general-products-repositoires";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetProductDatasService {
  constructor(
    private readonly repository: IGeneralProductsRepositories,
    private readonly prisma: PrismaClient
  ) {}

  async getProductDatas(id_product: number) {
    try {
      if (!id_product) {
        throw new HttpException(false, 400, "Informe o produto");
      }

      // ── cache-aside: se já temos o produto em cache, evitamos as duas
      // queries (produto + média de reviews). O contador de visualizações é
      // incrementado de forma assíncrona logo abaixo, independentemente de
      // cache hit ou miss, para não deixar `views_count` congelado enquanto
      // o produto estiver em cache.
      const cacheKey = CACHE_KEYS.product(id_product);
      const cachedResponse = cacheService.get<any>(cacheKey);
      let response: any;
      let wasCached = false;

      if (cachedResponse) {
        response = cachedResponse;
        wasCached = true;
      } else {
        const productResult = await this.repository.getProductDatas(
          { action: "getAll" },
          id_product,
          undefined
        );

        if (!productResult) {
          throw new HttpException(false, 404, "Produto não encontrado");
        }

        const productAverage = await this.repository.productAverage(id_product);

        response = {
          success: true,
          statusCode: 200,
          datas: {
            ...productResult,
            tags: productResult.tags.map((tag: any) => ({ tag: tag.tag.tag })),
            averageRating: productAverage._avg.rating ?? 0,
            totalReviews: productAverage._count.rating ?? 0
          }
        };

        cacheService.set(cacheKey, response, CACHE_TTL.PRODUCT);
      }

      // fire-and-forget — não bloqueia a resposta nem quebra o fluxo caso falhe
      this.prisma.products
        .update({ where: { id_product }, data: { views_count: { increment: 1 } } })
        .catch((err) => console.error("[GetProductDatasService] falha ao incrementar views_count:", err));

      // `cached` é anexado na leitura, nunca guardado no objeto persistido em
      // cache — evita que um valor `false` fique "congelado" nos próximos hits
      return { ...response, cached: wasCached };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { GetProductDatasService };