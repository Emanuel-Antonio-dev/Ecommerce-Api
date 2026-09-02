import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { AdminOrderFilters } from "../../../interfaces/Users/interface";
import { buildCsv } from "../../../Common/Utils/Csv/csv-builder";

const EXPORT_COLUMNS = [
  "id_order",
  "order_number",
  "status",
  "payment_status",
  "payment_provider",
  "customer_name",
  "customer_email",
  "total_amount",
  "discount_amount",
  "payment_method",
  "created_at",
  "paid_at",
];

class AdminExportOrdersService {
  constructor(private readonly repository: IAdminRepositories) {}

  async execute(filters?: AdminOrderFilters) {
    try {
      // ✅ limita o intervalo a no máximo 1 ano de cada vez — evita um export
      // sem filtro nenhum carregar a base de dados inteira em memória
      if (filters?.from && filters?.to) {
        const fromDate = new Date(filters.from);
        const toDate = new Date(filters.to);
        const oneYearMs = 365 * 24 * 60 * 60 * 1000;
        if (toDate.getTime() - fromDate.getTime() > oneYearMs) {
          throw new HttpException(false, 400, "O período do export não pode ultrapassar 1 ano");
        }
      }

      const orders = await this.repository.getOrdersForExport(filters);

      const rows = orders.map((order: any) => ({
        id_order: order.id_order,
        order_number: order.order_number,
        status: order.status,
        payment_status: order.payment?.status ?? "",
        payment_provider: order.payment?.provider ?? "",
        customer_name: order.user_details
          ? `${order.user_details.first_name} ${order.user_details.last_name}`
          : "",
        customer_email: order.user_details?.account_details?.email ?? "",
        total_amount: order.total_amount,
        discount_amount: order.discount_amount,
        payment_method: order.payment_method,
        created_at: order.created_at?.toISOString?.() ?? order.created_at,
        paid_at: order.payment?.paid_at?.toISOString?.() ?? "",
      }));

      const csv = buildCsv(rows, EXPORT_COLUMNS);

      return { success: true, statusCode: 200, csv, count: rows.length };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { AdminExportOrdersService };
