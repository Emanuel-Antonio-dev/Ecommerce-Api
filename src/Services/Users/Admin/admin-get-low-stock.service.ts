import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";

class AdminGetLowStockService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(page?: number, limit?: number) {
    try {
      const pagination = buildAdminPagination(page, limit);
      const [result, total] = await Promise.all([
        this.repository.getLowStockVariants(pagination.take, pagination.skip),
        this.repository.countLowStockVariants(),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 200, message: "Nenhuma variante com stock baixo" };
      }

      return {
        success: true,
        statusCode: 200,
        datas: result,
        paginationDatas: buildAdminMeta(total, pagination, result.length),
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminGetLowStockService };
