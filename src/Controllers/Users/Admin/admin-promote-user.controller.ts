import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { PrismaSystemLogsRepository } from "../../../Repositories/SystemSettings/System/prisma/prisma-system-logs-repositories";
import { CreateSystemLogService } from "../../../Services/Settings/create-system-log.service";
import { AdminPromoteUserService } from "../../../Services/Users/Admin/admin-promote-user.service";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaAdminRepository(prismaService);
const logsRepo   = new PrismaSystemLogsRepository(prismaService);
const logService = new CreateSystemLogService(logsRepo);
const service    = new AdminPromoteUserService(repository, logService);

class AdminPromoteUserController {
  static async promote(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const { id_account }   = req.params;
      const { user_type }    = req.body;
      const admin_id_account = req.credentials?.account_id as string;
      const ip_address       = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.socket.remoteAddress || "unknown";
      const system_agent     = req.headers["user-agent"]?.slice(0, 500) || "unknown";

      const result = await service.execute(id_account as string, user_type, admin_id_account, ip_address, system_agent);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminPromoteUserController };
