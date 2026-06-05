import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";
import { AdminUserFilters } from "../../../interfaces/Users/interface";

class AdminGetAllUsersService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(page?: number, limit?: number, filters?: AdminUserFilters) {
    try {
      validateDateRange(filters?.from, filters?.to);

      const pagination = buildAdminPagination(page, limit);
      const [result, total] = await Promise.all([
        this.repository.getAllUsers(pagination.take, pagination.skip, filters),
        this.repository.countUsers(filters),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "De momento ainda não existem utilizadores" };
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

export { AdminGetAllUsersService };
