import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetOrderService } from "../../../Services/Users/Admin/admin-get-order.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetOrderService(repository);

class AdminGetOrderController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id_order } = req.params;
      const result = await service.execute(Number(id_order));
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetOrderController };
