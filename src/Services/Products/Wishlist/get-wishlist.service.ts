import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginationParams, buildPagination } from "../../../Common/Utils/helpers";
import { IWishlistRepositories } from "../../../Repositories/Products/Wishlist/I-wishlist-repository";

class GetWishlistService {
  constructor(private readonly repository: IWishlistRepositories) {}

  async execute(id_user_fk: number, { page, limit }: PaginationParams) {
    try {
      if (!id_user_fk) {
        throw new HttpException(false, 400, "Informe o usuário");
      }

      const pagination = buildPagination({ page, limit });

      const items = await this.repository.findByUser(
        id_user_fk,
        pagination.take,
        pagination.skip
      );

      const total = await this.repository.countByUser(id_user_fk);

      return {
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
