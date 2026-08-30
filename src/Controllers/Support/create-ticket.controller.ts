import { Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaSupportRepositories } from "../../Repositories/Support/Prisma/prisma-support.repositories";
import { PrismaOrdersRepositories } from "../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { CreateTicketService } from "../../Services/Support/create-ticket.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaSupportRepositories(prismaService);
const orderRepository = new PrismaOrdersRepositories(prismaService);
const service = new CreateTicketService(repository, orderRepository);

class CreateTicketController {
  static async create(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const result = await service.execute({
        id_user_fk: req.credentials!.sub,
        subject: req.body.subject,
        message: req.body.message,
        priority: req.body.priority,
        id_order_fk: req.body.id_order_fk ? Number(req.body.id_order_fk) : undefined,
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

export { CreateTicketController };
