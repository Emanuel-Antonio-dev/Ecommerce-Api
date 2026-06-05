import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { AdminGetAllOrdersService } from "../../../Services/Users/Admin/admin-get-all-orders.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetAllOrdersService(repository);

class AdminGetAllOrdersController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const filters = {
        status:         req.query.status         as any,
        payment_method: req.query.payment_method as any,
        id_user_fk:     req.query.id_user_fk ? Number(req.query.id_user_fk) : undefined,
        from:           req.query.from as string | undefined,
        to:             req.query.to   as string | undefined,
      };

      const result = await service.execute(page, limit, filters);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetAllOrdersController };
