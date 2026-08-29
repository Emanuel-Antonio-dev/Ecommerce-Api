import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ApplyCouponDatas } from "../../../interfaces/Products/Coupons/interface";
import { ICouponsRepositories } from "../../../Repositories/Products/Coupons/Icoupons-repositories";
import { IUsersRepositories } from "../../../Repositories/Users/users-repositories";
import { IProductOrderRepositories } from "../../../Repositories/Products/ProductOrders/product-order-repositories";
import { cacheService } from "../../../lib/cache.service";

class ApplyCouponService {
  constructor(
    private readonly repository: ICouponsRepositories,
    private readonly usersRepositories: IUsersRepositories,
    // ✅ FIX: necessário para buscar o valor REAL do pedido no banco, em vez de
    // confiar no `order_total` enviado pelo cliente.
    private readonly ordersRepository: IProductOrderRepositories

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

      // ✅ FIX: busca o pedido real e confirma que pertence ao usuário autenticado
      // (antes não havia checagem de ownership — qualquer usuário logado podia
      // tentar aplicar um cupom em cima do id_order de outra pessoa).
      const order = await this.ordersRepository.getOrder(datas.id_order_fk);
      if (!order) {
        throw new HttpException(false, 404, "Pedido não encontrado");
      }
      if (order.id_user_fk !== datas.id_user_fk) {
        throw new HttpException(false, 403, "Você não tem permissão sobre este pedido");
      }
      if (order.status !== "pending") {
        throw new HttpException(false, 400, "Este pedido não está mais disponível para aplicação de cupom");
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
        throw new HttpException(false, 400, "Este cupom atingiu o limite de utilização");
      }

      const alreadyUsedByUser = await this.repository.hasUserUsedCoupon(
        coupon.id_coupon,
        datas.id_user_fk
      );

      if (alreadyUsedByUser) {
        throw new HttpException(false, 400, "Você já utilizou este cupom");
      }

      const orderTotal = Number(order.total_amount);

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

      // ✅ FIX: registro de uso + incremento do limite + gravação do desconto no
      // pedido, tudo em uma transação atômica (ver applyCouponAtomically).
      const result = await this.repository.applyCouponAtomically({
        id_coupon: coupon.id_coupon,
        id_order_fk: datas.id_order_fk,
        id_user_fk: datas.id_user_fk,
        discount_applied,
        usage_limit: coupon.usage_limit,
      });

      if (!result.ok) {
        if (result.reason === "limit_reached") {
          throw new HttpException(false, 400, "Este cupom atingiu o limite de utilização");
        }
        throw new HttpException(false, 400, "Este pedido já possui um cupom aplicado");
      }

      // ✅ used_count do cupom mudou (e pode ter atingido o limite de uso) —
      // invalida para que a próxima leitura reflita o novo estado
      cacheService.invalidateCoupon(coupon.id_coupon, coupon.code);

      return {
        success: true,
        statusCode: 200,
        message: "Cupom aplicado com sucesso",
        datas: {
          discount_applied,
          discount_type: coupon.discount_type,
          coupon_code: coupon.code,
          new_total: Math.max(orderTotal - discount_applied, 0),
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
