import { Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { GetMyTicketsService } from "../../Services/Support/get-my-tickets.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaSupportRepositories(prismaService);
const service = new GetMyTicketsService(repository);

class GetMyTicketsController {
  static async get(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const { page, limit } = req.query;
      const result = await service.execute(req.credentials!.sub, {
        page: Number(page) || 1,
        limit: Number(limit) || 20,
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

export { GetMyTicketsController };
