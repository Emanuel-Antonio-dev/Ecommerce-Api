import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginationParams, buildPagination, PaginatedResult } from "../../../Common/Utils/helpers";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";

class GetAllCouponsService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute({ page, limit }: PaginationParams): Promise<PaginatedResult<any> | any> {
    try {
      const pagination = buildPagination({ page, limit });

      const result = await this.repository.findAll(pagination.take, pagination.skip);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum cupom encontrado" };
      }

      const total = await this.repository.count();

      return {
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
