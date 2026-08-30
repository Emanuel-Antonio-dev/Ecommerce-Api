import { Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { ReplyTicketService } from "../../Services/Support/reply-ticket.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaSupportRepositories(prismaService);
const service = new ReplyTicketService(repository);

class ReplyTicketController {
  static async reply(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const result = await service.execute(
        req.params.id_ticket as string,
        {
          id_user: req.credentials!.sub,
          user_type: req.credentials!.user_type as "admin" | "client",
        },
        req.body.message
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

export { ReplyTicketController };
