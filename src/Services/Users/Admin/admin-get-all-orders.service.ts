import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";

class AdminGetAllOrdersService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(page?: number, limit?: number, filters?: AdminOrderFilters) {
    try {
      validateDateRange(filters?.from, filters?.to);

      const pagination = buildAdminPagination(page, limit);
      const [result, total] = await Promise.all([
        this.repository.getAllOrders(pagination.take, pagination.skip, filters),
        this.repository.countOrders(filters),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "De momento ainda não existem pedidos" };
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
      if (error instanceof Error) {
        return { success: false, statusCode: 400, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { AdminGetAllOrdersService };
