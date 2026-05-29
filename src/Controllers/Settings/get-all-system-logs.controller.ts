import { Request, Response } from "express";
import { PrismaSystemLogsRepository } from "../../Repositories/SystemSettings/System/prisma/prisma-system-logs-repositories";
import { GetAllSystemLogsService } from "../../Services/Settings/get-all-system-logs.service";
import { prismaService } from "../../lib/prisma.service";

const repository = new PrismaSystemLogsRepository(prismaService);
const service    = new GetAllSystemLogsService(repository);

class GetAllSystemLogsController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 20;

      // filtros opcionais via query string
      const filters = {
        id_account_fk: req.query.id_account_fk as string | undefined,
        action:        req.query.action        as string | undefined,
        ip_address:    req.query.ip_address    as string | undefined,
        from:          req.query.from          as string | undefined,
        to:            req.query.to            as string | undefined,
      };

      const result = await service.execute({ page, limit }, filters);

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { GetAllSystemLogsController };
