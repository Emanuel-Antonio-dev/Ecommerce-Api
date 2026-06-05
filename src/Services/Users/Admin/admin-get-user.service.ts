import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";

class AdminGetUserService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(id_account: string) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o id da conta");
      }

      const user = await this.repository.getUserById(id_account.trim());
      if (!user) {
        throw new HttpException(false, 404, "Utilizador não encontrado");
      }

      // nunca expõe password mesmo que venha do DB
      const { password: _, ...safeUser } = user;

      return { success: true, statusCode: 200, datas: safeUser };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminGetUserService };
