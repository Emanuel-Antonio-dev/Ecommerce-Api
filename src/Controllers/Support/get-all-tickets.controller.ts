import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { GetAllTicketsService } from "../../Services/Support/get-all-tickets.service";

const repository = new PrismaSupportRepositories(prismaService);
const service = new GetAllTicketsService(repository);

class GetAllTicketsController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { page, limit, status } = req.query;
      const result = await service.execute(
        { page: Number(page) || 1, limit: Number(limit) || 20 },
        status as string | undefined
      );

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

export { GetAllTicketsController };
