import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetLowStockService } from "../../../Services/Users/Admin/admin-get-low-stock.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetLowStockService(repository);

class AdminGetLowStockController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const result = await service.execute(page, limit);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetLowStockController };
