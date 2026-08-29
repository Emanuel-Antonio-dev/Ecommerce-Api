import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { CouponDatas } from "../../../interfaces/Products/Coupons/interface";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";
import { cacheService } from "../../../lib/cache.service";

class UpdateCouponService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute(id_coupon: string, datas: Partial<CouponDatas>) {
    try {
      if (!id_coupon) {
        throw new HttpException(false, 400, "Informe o cupom");
      }

      const coupon = await this.repository.findById(id_coupon);
      if (!coupon) {
        throw new HttpException(false, 404, "Cupom não encontrado");
      }

      if (datas.discount_value !== undefined && Number(datas.discount_value) <= 0) {
        throw new HttpException(false, 400, "Valor do desconto deve ser maior que zero");
      }

      const discount_type = datas.discount_type ?? coupon.discount_type;
      const discount_value = datas.discount_value ?? coupon.discount_value;

      if (discount_type === "percentage" && Number(discount_value) > 100) {
        throw new HttpException(false, 400, "Desconto percentual não pode ultrapassar 100%");
      }

      if (datas.usage_limit !== undefined && datas.usage_limit <= 0) {
        throw new HttpException(false, 400, "Limite de uso deve ser maior que zero");
      }

      if (datas.expires_at && new Date(datas.expires_at) <= new Date()) {
        throw new HttpException(false, 400, "A data de expiração não pode ser no passado");
      }

      if (datas.starts_at && datas.expires_at) {
        if (new Date(datas.expires_at) <= new Date(datas.starts_at)) {
          throw new HttpException(false, 400, "A data de expiração deve ser posterior à data de início");
        }
      }

      // impede alterar o código para um já existente
      if (datas.code) {
        const sanitizedCode = datas.code.toUpperCase().trim();
        if (sanitizedCode !== coupon.code) {
          const conflict = await this.repository.findByCode(sanitizedCode);
          if (conflict) {
            throw new HttpException(false, 409, "Já existe um cupom com este código");
          }
        }
        datas.code = datas.code.toUpperCase().trim();
      }

      const updated = await this.repository.update(id_coupon, datas);

      // invalida pelo código antigo E pelo novo (caso tenha sido alterado)
      cacheService.invalidateCoupon(id_coupon, coupon.code);
      if (datas.code && datas.code !== coupon.code) {
        cacheService.invalidateCoupon(id_coupon, datas.code);
      }

      return {
        success: true,
        statusCode: 200,
        message: "Cupom atualizado com sucesso"
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

export { UpdateCouponService };
