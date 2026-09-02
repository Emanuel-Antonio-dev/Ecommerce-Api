import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminExportOrdersService } from "../../../Services/Users/Admin/admin-export-orders.service";

const repository = new PrismaAdminRepository(prismaService);
const service = new AdminExportOrdersService(repository);

class AdminExportOrdersController {
  static async export(req: Request, res: Response): Promise<Response | void> {
    try {
      const { from, to, status, payment_method } = req.query;

      const result = await service.execute({
        from: from as string | undefined,
        to: to as string | undefined,
        status: status as any,
        payment_method: payment_method as any,
      });

      if (!result.success) {
        return res.status(result.statusCode).json(result);
      }

      const filename = `pedidos-${new Date().toISOString().slice(0, 10)}.csv`;

      res.setHeader("Content-Type", "text/csv; charset=utf-8");
      res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
      return res.status(200).send(result.csv);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { AdminExportOrdersController };
