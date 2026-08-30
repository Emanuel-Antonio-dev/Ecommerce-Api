import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { UpdateTicketStatusService } from "../../Services/Support/update-ticket-status.service";

const repository = new PrismaSupportRepositories(prismaService);
const service = new UpdateTicketStatusService(repository);

class UpdateTicketStatusController {
  static async update(req: Request, res: Response): Promise<Response> {
    try {
      const result = await service.execute(req.params.id_ticket as string, {
        status: req.body.status,
        priority: req.body.priority,
      });

      return res.status(result.statusCode).json(result);
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

export { UpdateTicketStatusController };
