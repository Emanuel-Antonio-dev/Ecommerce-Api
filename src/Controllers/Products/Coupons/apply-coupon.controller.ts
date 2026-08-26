import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { ApplyCouponService } from "../../../Services/Products/Coupons/apply-coupon.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

const repository = new PrismaCouponsRepositories(prismaService);
const userRepository = new PrismaUsersRepositories(prismaService);
const service = new ApplyCouponService(repository, userRepository);

class ApplyCouponController {
  static async apply(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const { code, id_order_fk, order_total } = req.body;
      const id_user_fk = req.credentials?.sub;

      if (!id_user_fk) {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Usuário não autorizado",
        });
      }

      const result = await service.execute({
        code,
        id_order_fk: Number(id_order_fk),
        id_user_fk: Number(id_user_fk),
        order_total,
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

export { ApplyCouponController };
