import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";
import { CouponDatas } from "../../../interfaces/Products/Coupons/interface";
import { COUPON_CODE_REGEX } from "../../../Common/Utils/helpers";

class CreateCouponService {
  constructor(private readonly repository: ICouponsRepositories) {}

  async execute(datas: CouponDatas) {
    try {
      if (!datas.code || !datas.discount_type || datas.discount_value === undefined) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const sanitizedCode = datas.code.toUpperCase().trim();

      if (!COUPON_CODE_REGEX.test(sanitizedCode)) {
        throw new HttpException(
          false,
          400,
          "Código inválido. Use apenas letras maiúsculas, números, hífen ou underscore (3–30 caracteres)"
        );
      }
      if (Number(datas.discount_value) <= 0) {
        throw new HttpException(false, 400, "O valor do desconto deve ser maior que zero");
      }

      if (datas.discount_type === "percentage" && Number(datas.discount_value) > 100) {
        throw new HttpException(false, 400, "Desconto percentual não pode ultrapassar 100%");
      }

      if (datas.minimum_amount !== undefined && Number(datas.minimum_amount) < 0) {
        throw new HttpException(false, 400, "Valor mínimo inválido");
      }

      if (datas.usage_limit !== undefined && datas.usage_limit <= 0) {
        throw new HttpException(false, 400, "Limite de uso deve ser maior que zero");
      }

      if (datas.starts_at && datas.expires_at) {
        const start = new Date(datas.starts_at);
        const end = new Date(datas.expires_at);
        if (end <= start) {
          throw new HttpException(false, 400, "A data de expiração deve ser posterior à data de início");
        }
      }
      if (datas.expires_at && new Date(datas.expires_at) <= new Date()) {
        throw new HttpException(false, 400, "A data de expiração não pode ser no passado");
      }

      const alreadyExists = await this.repository.findByCode(sanitizedCode);
      if (alreadyExists) {
        throw new HttpException(false, 409, "Já existe um cupom com este código");
      }

      const coupon = await this.repository.create({ ...datas, code: sanitizedCode });
      if(!coupon) {
        throw new HttpException(false, 500, "Ocorreu um erro ao criar o cupom");
      }
      return {
        success: true,
        statusCode: 201,
        message: "Cupom criado com sucesso",
        datas: coupon,
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

export { CreateCouponService };
