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
}

export { ICouponsRepositories };
