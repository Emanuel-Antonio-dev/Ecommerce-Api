import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/general-products-repositoires";

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

      const productResult = await this.repository.getProductDatas(
        { action: "getAll" },
        id_product,
        undefined
      );

      if (!productResult) {
        throw new HttpException(false, 404, "Produto não encontrado");
      }

      await this.prisma.products.update({
        where: { id_product },
        data: { views_count: { increment: 1 } }
      });

      const productAverage = await this.repository.productAverage(id_product);

      return {
        success: true,
        statusCode: 200,
        datas: {
          ...productResult,
          tags: productResult.tags.map((tag: any) => ({ tag: tag.tag.tag })),
          averageRating: productAverage._avg.rating ?? 0,
          totalReviews: productAverage._count.rating ?? 0
        }
      };
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