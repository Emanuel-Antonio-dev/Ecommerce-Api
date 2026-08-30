import { Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { GetTicketService } from "../../Services/Support/get-ticket.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaSupportRepositories(prismaService);
const service = new GetTicketService(repository);

class GetTicketController {
  static async get(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const result = await service.execute(req.params.id_ticket as string, {
        id_user: req.credentials!.sub,
        user_type: req.credentials!.user_type as "admin" | "client",
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

export { GetTicketController };
