import { CouponDatas } from "../../../interfaces/Products/Coupons/interface";
import { PaginationParams } from "../../../Common/Utils/helpers";

abstract class ICouponsRepositories {
  abstract create(datas: CouponDatas): Promise<any>;
  abstract findById(id_coupon: string): Promise<any>;
  abstract findByCode(code: string): Promise<any>;
  abstract findAll(take?: number, skip?: number): Promise<any[]>;
  abstract count(): Promise<number>;
  abstract update(id_coupon: string, datas: Partial<CouponDatas>): Promise<any>;
  abstract softDelete(id_coupon: string): Promise<any>;
  abstract incrementUsage(id_coupon: string): Promise<any>;
  abstract hasUserUsedCoupon(id_coupon: string, id_user_fk: number): Promise<boolean>;
  abstract registerUsage(id_coupon: string, id_order_fk: number, id_user_fk: number, discount_applied: number): Promise<any>;
  // ✅ FIX: aplica o cupom (checagem de limite + registro de uso + incremento +
  // gravação do desconto no pedido) em UMA ÚNICA transação atômica, evitando:
  // (a) corrida que permitia ultrapassar o usage_limit em requisições simultâneas;
  // (b) o desconto nunca ser refletido no valor cobrado no Stripe.
  abstract applyCouponAtomically(params: {
    id_coupon: string;
    id_order_fk: number;
    id_user_fk: number;
    discount_applied: number;
    usage_limit: number | null;
  }): Promise<{ ok: true } | { ok: false; reason: "limit_reached" | "already_applied_to_order" }>;
}

export { ICouponsRepositories };
