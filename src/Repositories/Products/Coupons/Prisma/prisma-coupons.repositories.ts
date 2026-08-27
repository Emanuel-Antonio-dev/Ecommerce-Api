import { PrismaClient } from "../../../../../generated/prisma/client";
import { CouponDatas } from "../../../../interfaces/Products/Coupons/interface";
import { ICouponsRepositories } from "../Icoupons-repositories";

class PrismaCouponsRepositories implements ICouponsRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async create(datas: CouponDatas): Promise<any> {
    return await this.prisma.coupons.create({
      data: {
        code: datas.code.toUpperCase().trim(),
        description: datas.description,
        discount_type: datas.discount_type,
        discount_value: datas.discount_value,
        minimum_amount: datas.minimum_amount,
        usage_limit: datas.usage_limit,
        starts_at: datas.starts_at,
        expires_at: datas.expires_at,
        active: datas.active ?? true,
      },
    });
  }

  async findById(id_coupon: string): Promise<any> {
    return await this.prisma.coupons.findFirst({
      where: { id_coupon, deleted_at: null },
      include: {
        usages: {
          select: {
            id_coupon_usage: true,
            id_user_fk: true,
            id_order_fk: true,
            discount_applied: true,
            created_at: true,
          },
        },
      },
    });
  }

  async findByCode(code: string): Promise<any> {
    return await this.prisma.coupons.findFirst({
      where: { code: code.toUpperCase().trim(), deleted_at: null },
    });
  }

  async findAll(take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.coupons.findMany({
      where: { deleted_at: null },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  async count(): Promise<number> {
    return await this.prisma.coupons.count({ where: { deleted_at: null } });
  }

  async update(id_coupon: string, datas: Partial<CouponDatas>): Promise<any> {
    return await this.prisma.coupons.update({
      where: { id_coupon },
      data: { ...datas },
    });
  }

  async softDelete(id_coupon: string): Promise<any> {
    return await this.prisma.coupons.update({
      where: { id_coupon },
      data: { deleted_at: new Date(), active: false },
    });
  }

  async incrementUsage(id_coupon: string): Promise<any> {
    return await this.prisma.coupons.update({
      where: { id_coupon },
      data: { used_count: { increment: 1 } },
    });
  }

  async hasUserUsedCoupon(id_coupon: string, id_user_fk: number): Promise<boolean> {
    const usage = await this.prisma.couponUsages.findFirst({
      where: { id_coupon_fk: id_coupon, id_user_fk },
    });
    return !!usage;
  }

  async registerUsage(
    id_coupon: string,
    id_order_fk: number,
    id_user_fk: number,
    discount_applied: number
  ): Promise<any> {
    return await this.prisma.couponUsages.create({
      data: {
        id_coupon_fk: id_coupon,
        id_order_fk,
        id_user_fk,
        discount_applied,
      },
    });
  }

  // ✅ FIX: tudo dentro de $transaction. O incremento de uso é feito com
  // `updateMany` + guarda condicional (equivalente a um UPDATE ... WHERE
  // used_count < usage_limit atômico no Postgres), então duas requisições
  // concorrentes não conseguem "passar" ao mesmo tempo pelo limite — a segunda
  // sempre vê `count === 0` e é rejeitada. O desconto também é gravado direto
  // em `orders.discount_amount`, para ser usado depois no valor cobrado.
  async applyCouponAtomically(params: {
    id_coupon: string;
    id_order_fk: number;
    id_user_fk: number;
    discount_applied: number;
    usage_limit: number | null;
  }): Promise<{ ok: true } | { ok: false; reason: "limit_reached" | "already_applied_to_order" }> {
    const { id_coupon, id_order_fk, id_user_fk, discount_applied, usage_limit } = params;

    try {
      return await this.prisma.$transaction(async (tx) => {
        const incrementResult = await tx.coupons.updateMany({
          where:
            usage_limit === null
              ? { id_coupon }
              : { id_coupon, used_count: { lt: usage_limit } },
          data: { used_count: { increment: 1 } },
        });

        if (incrementResult.count === 0) {
          return { ok: false as const, reason: "limit_reached" as const };
        }

        await tx.couponUsages.create({
          data: {
            id_coupon_fk: id_coupon,
            id_order_fk,
            id_user_fk,
            discount_applied,
          },
        });

        await tx.orders.update({
          where: { id_order: id_order_fk },
          data: { discount_amount: discount_applied },
        });

        return { ok: true as const };
      });
    } catch (error: any) {
      // violação da constraint única id_order_fk em CouponUsages => já havia cupom nesse pedido
      if (error?.code === "P2002") {
        return { ok: false, reason: "already_applied_to_order" };
      }
      throw error;
    }
  }
}

export { PrismaCouponsRepositories };
