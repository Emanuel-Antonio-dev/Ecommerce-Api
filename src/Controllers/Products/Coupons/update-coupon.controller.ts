import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { UpdateCouponService } from "../../../Services/Products/Coupons/update-coupon.service";

const repository = new PrismaCouponsRepositories(prismaService);
const service = new UpdateCouponService(repository);

class UpdateCouponController {
  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id_coupon } = req.params;
      const datas = req.body;

      const result = await service.execute(id_coupon as string, datas);

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

export { UpdateCouponController };
