import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { DeleteCouponService } from "../../../Services/Products/Coupons/delete-coupon.service";

const repository = new PrismaCouponsRepositories(prismaService);
const service = new DeleteCouponService(repository);

class DeleteCouponController {
  static async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id_coupon } = req.params;

      const result = await service.execute(id_coupon as string);

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

export { DeleteCouponController };
