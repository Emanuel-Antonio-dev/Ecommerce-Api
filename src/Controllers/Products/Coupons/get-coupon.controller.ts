import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { GetCouponService } from "../../../Services/Products/Coupons/get-coupon.service";

const repository = new PrismaCouponsRepositories(prismaService);
const service = new GetCouponService(repository);

class GetCouponController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id_coupon } = req.params;
      const { code } = req.query;

      const result = await service.execute({
        id_coupon: id_coupon as string | undefined,
        code: code as string | undefined,
      });

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

export { GetCouponController };
