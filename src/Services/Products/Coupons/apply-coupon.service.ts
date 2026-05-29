import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ApplyCouponDatas } from "../../../interfaces/Products/Coupons/interface";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";
import { IUsersRepositories } from "../../../Repositories/Users/users-repositories";

class ApplyCouponService {
  constructor(
    private readonly repository: ICouponsRepositories,
    private readonly usersRepositories: IUsersRepositories

  ) {}

  async execute(datas: ApplyCouponDatas) {
    try {
      if (!datas.code || !datas.id_order_fk || !datas.id_user_fk) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const existsUser = await this.usersRepositories.getUsersProfileDatas(datas.id_user_fk, "client");
      if (!existsUser) {
        throw new HttpException(false, 404, "Usuário não encontrado");
      }
      const sanitizedCode = datas.code.toUpperCase().trim();

        // evita brute force via código — normaliza antes de qualquer I/O
      if (sanitizedCode.length > 30) {
        throw new HttpException(false, 400, "Código inválido");
      }

      const coupon = await this.repository.findByCode(sanitizedCode);

      if (!coupon) {
        throw new HttpException(false, 404, "Cupom não encontrado");
      }

      if (!coupon.active) {
        throw new HttpException(false, 400, "Este cupom não está ativo");
      }

      const now = new Date();

      if (coupon.starts_at && new Date(coupon.starts_at) > now) {
        throw new HttpException(false, 400, "Este cupom ainda não está válido");
      }

      if (coupon.expires_at && new Date(coupon.expires_at) < now) {
        throw new HttpException(false, 400, "Este cupom já expirou");
      }

      if (coupon.usage_limit !== null && coupon.used_count >= coupon.usage_limit) {
        throw new HttpException(false, 400, "Este cupom atingiu o limite de utilizações");
      }

      const alreadyUsedByUser = await this.repository.hasUserUsedCoupon(
        coupon.id_coupon,
        datas.id_user_fk
      );

      if (alreadyUsedByUser) {
        throw new HttpException(false, 400, "Você já utilizou este cupom");
      }

      const orderTotal = Number(datas.order_total);

      if (coupon.minimum_amount !== null && orderTotal < Number(coupon.minimum_amount)) {
        throw new HttpException(
          false,
          400,
          `Valor mínimo do pedido para este cupom é ${coupon.minimum_amount}`
        );
      }

      let discount_applied = 0;

      if (coupon.discount_type === "percentage") {
        discount_applied = (orderTotal * Number(coupon.discount_value)) / 100;
      } else {
        discount_applied = Math.min(Number(coupon.discount_value), orderTotal);
      }

      discount_applied = Math.round(discount_applied * 100) / 100;

      await this.repository.registerUsage(
        coupon.id_coupon,
        datas.id_order_fk,
        datas.id_user_fk,
        discount_applied
      );

      await this.repository.incrementUsage(coupon.id_coupon);

      return {
        success: true,
        statusCode: 200,
        message: "Cupom aplicado com sucesso",
        datas: {
          discount_applied,
          discount_type: coupon.discount_type,
          coupon_code: coupon.code,
        },
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

export { ApplyCouponService };
