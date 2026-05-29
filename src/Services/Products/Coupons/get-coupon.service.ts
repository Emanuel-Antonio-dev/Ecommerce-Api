import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";

class GetCouponService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute(param: Partial<{ id_coupon: string; code: string }>) {
    try {
      if (!param.id_coupon && !param.code) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      let coupon: any;

      if (param.code) {
        const sanitizedCode = param.code.toUpperCase().trim();
        if (sanitizedCode.length > 30) {
          throw new HttpException(false, 400, "Código inválido");
        }
        coupon = await this.repository.findByCode(sanitizedCode);
      } else {
        coupon = await this.repository.findById(param.id_coupon!);
      }

      if (!coupon) {
        throw new HttpException(false, 404, "Cupom não encontrado");
      }

      return { success: true, statusCode: 200, datas: coupon };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { GetCouponService };
