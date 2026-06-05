import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { buildAdminPagination, buildAdminMeta, validateDateRange } from "../../../Common/Utils/helpers";

class AdminGetOrderService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(id_order: number) {
    try {
      if (!id_order || isNaN(id_order)) {
        throw new HttpException(false, 400, "Informe o id do pedido");
      }

      const order = await this.repository.getOrderById(id_order);
      if (!order) {
        throw new HttpException(false, 404, "Pedido não encontrado");
      }

      return { success: true, statusCode: 200, datas: order };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminGetOrderService };
