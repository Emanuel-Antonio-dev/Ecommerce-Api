import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCouponsRepositories } from "../../../Repositories/Products/Coupons/Prisma/prisma-coupons.repositories";
import { GetAllCouponsService } from "../../../Services/Products/Coupons/get-all-coupons.service";

const repository = new PrismaCouponsRepositories(prismaService);
const service = new GetAllCouponsService(repository);

class GetAllCouponsController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const result = await service.execute({ page, limit });

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

export { GetAllCouponsController };
