import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PurgeSystemLogsService } from "../../Services/Settings/purge-system-logs.service";
import { PrismaSystemLogsRepository } from "../../Repositories/SystemSettings/System/prisma/prisma-system-logs-repositories";

const repository = new PrismaSystemLogsRepository(prismaService);
const service    = new PurgeSystemLogsService(repository);

class PurgeSystemLogsController {
  // DELETE /system-logs/purge?days=30
  static async purgeOlderThan(req: Request, res: Response): Promise<Response> {
    try {
      const days = req.query.days ? Number(req.query.days) : undefined;

      if (!days || isNaN(days)) {
        return res.status(400).json({
          success: false, statusCode: 400, message: "Informe o parâmetro 'days'",
        });
      }

      const result = await service.purgeOlderThan(days);

      return res.status(result.statusCode).json({
        success:    result.success,
        statusCode: result.statusCode,
        message:    result.message,
        datas:      result.datas,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }

  // DELETE /system-logs/account/:id_account
  static async purgeByAccount(req: Request, res: Response): Promise<Response> {
    try {
      const { id_account } = req.params;

      const result = await service.purgeByAccount(id_account as string);

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }

  // DELETE /system-logs/all
  static async purgeAll(req: Request, res: Response): Promise<Response> {
    try {
      const result = await service.purgeAll();

      return res.status(result.statusCode).json({
        success:    result.success,
        statusCode: result.statusCode,
        message:    result.message,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { PurgeSystemLogsController };
