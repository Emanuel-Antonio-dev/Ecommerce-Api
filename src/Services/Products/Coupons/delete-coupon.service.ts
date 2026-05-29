import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";

class DeleteCouponService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute(id_coupon: string) {
    try {
      if (!id_coupon) {
        throw new HttpException(false, 400, "Informe o cupom");
      }

      const coupon = await this.repository.findById(id_coupon);
      if (!coupon) {
        throw new HttpException(false, 404, "Cupom não encontrado");
      }

      // soft delete — preserva histórico de usages no banco
      const result = await this.repository.softDelete(id_coupon);
      if(!result) {
        throw new HttpException(false, 500, "Ocorreu um erro ao remover o cupom");
      }
      return {
        success: true,
        statusCode: 200,
        message: "Cupom removido com sucesso",
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

export { DeleteCouponService };
