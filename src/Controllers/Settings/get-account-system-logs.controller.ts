import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSystemLogsRepository } from "../../Repositories/SystemSettings/System/prisma/prisma-system-logs-repositories";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";
import { GetAccountSystemLogsService } from "../../Services/Settings/get-account-system-logs.service";

const repository = new PrismaSystemLogsRepository(prismaService);
const service    = new GetAccountSystemLogsService(repository);

class GetAccountSystemLogsController {
  // ── admin consulta logs de qualquer conta ─────────────────────────
  static async getByAccount(req: Request, res: Response): Promise<Response> {
    try {
      const { id_account } = req.params;
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 20;

      const result = await service.execute(id_account as string, { page, limit });

      return res.status(result.statusCode).json({
        success:    result.success,
        statusCode: result.statusCode,
        message:    result.message,
        datas:      result.datas,
        meta:       result.meta,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }

  // ── utilizador consulta os seus próprios logs ─────────────────────
  static async getMine(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const id_account = req.credentials?.account_id;
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 20;

      if (!id_account) {
        return res.status(401).json({ success: false, statusCode: 401, message: "Não autorizado" });
      }

      const result = await service.execute(id_account, { page, limit });

      return res.status(result.statusCode).json({
        success:    result.success,
        statusCode: result.statusCode,
        message:    result.message,
        datas:      result.datas,
        meta:       result.meta,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { GetAccountSystemLogsController };
