import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetAllUsersService } from "../../../Services/Users/Admin/admin-get-all-users.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetAllUsersService(repository);

class AdminGetAllUsersController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const filters = {
        search:     req.query.search     as string | undefined,
        user_type:  req.query.user_type  as "admin" | "client" | undefined,
        is_active:  req.query.is_active  !== undefined ? req.query.is_active === "true"  : undefined,
        verified:   req.query.verified   !== undefined ? req.query.verified  === "true"  : undefined,
        from:       req.query.from       as string | undefined,
        to:         req.query.to         as string | undefined,
      };

      const result = await service.execute(page, limit, filters);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetAllUsersController };
