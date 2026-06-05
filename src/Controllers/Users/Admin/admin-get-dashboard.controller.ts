import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetDashboardService } from "../../../Services/Users/Admin/admin-get-dashboard.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetDashboardService(repository);

class AdminGetDashboardController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const result = await service.execute();
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetDashboardController };
