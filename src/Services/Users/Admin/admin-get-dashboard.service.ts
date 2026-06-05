import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";

class AdminGetDashboardService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute() {
    try {
      const stats = await this.repository.getDashboardStats();
      return { success: true, statusCode: 200, datas: stats };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminGetDashboardService };
