import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetUserService } from "../../../Services/Users/Admin/admin-get-user.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetUserService(repository);

class AdminGetUserController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id_account } = req.params;
      const result = await service.execute(id_account as string);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetUserController };
