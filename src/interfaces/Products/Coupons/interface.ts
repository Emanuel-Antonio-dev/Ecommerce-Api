import { Decimal } from "../../../../generated/prisma/internal/prismaNamespace";

interface CouponDatas {
  id_coupon?: string;
  code: string;
  description?: string;
  discount_type: "percentage" | "fixed";
  discount_value: number | Decimal;
  minimum_amount?: number | Decimal;
  usage_limit?: number;
  starts_at?: Date | string;
  expires_at?: Date | string;
  active?: boolean;
}

interface ApplyCouponDatas {
  code: string;
  id_order_fk: number;
  id_user_fk: number;
  order_total: number | Decimal;
}

export { CouponDatas, ApplyCouponDatas };
