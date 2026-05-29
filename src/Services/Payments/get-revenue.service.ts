import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

class GetTotalRevenueService {
  constructor(
    private readonly repository: IPaymentsRepositories
  ) {}

  async getTotalRevenue() {
    try {
      const total = await this.repository.getTotalRevenue();

      return {
        success: true,
        statusCode: 200,
        message: "Total faturado obtido com sucesso",
        data: {
          total_revenue: total
        }
      };

    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.error("❌ Erro ao calcular faturamento:", error);

      return {
        success: false,
        statusCode: 500,
        message: "Erro interno ao calcular faturamento"
      };
    }
  }
}

export { GetTotalRevenueService };