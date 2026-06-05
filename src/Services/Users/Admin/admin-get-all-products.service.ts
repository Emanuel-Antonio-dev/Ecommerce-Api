import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { AdminProductFilters } from "../../../interfaces/Users/interface";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";

class AdminGetAllProductsService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(page?: number, limit?: number, filters?: AdminProductFilters) {
    try {
      const pagination = buildAdminPagination(page, limit);
      const [result, total] = await Promise.all([
        this.repository.getAllProducts(pagination.take, pagination.skip, filters),
        this.repository.countProducts(filters),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum produto encontrado" };
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
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { AdminGetAllProductsService };
