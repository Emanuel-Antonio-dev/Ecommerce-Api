import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { CreateCouponService } from "../../../Services/Products/Coupons/create-coupon.service";
import { CouponDatas } from "../../../interfaces/Products/Coupons/interface";

const repository = new PrismaCouponsRepositories(prismaService);
const service = new CreateCouponService(repository);

class CreateCouponController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const datas: CouponDatas = {
        code: req.body.code,
        discount_type: req.body.discount_type as "percentage" | "fixed",
        description: req.body.description,
        discount_value: Number(req.body.discount_value),
        minimum_amount: Number(req.body.minimum_amount),
        usage_limit: Number(req.body.usage_limit),
        starts_at: req.body.starts_at,
        expires_at: req.body.expires_at,
        active: req.body.active
      };
      const result = await service.execute(datas);

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { CreateCouponController };
