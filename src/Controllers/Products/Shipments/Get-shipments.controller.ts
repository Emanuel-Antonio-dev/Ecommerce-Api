import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { GetShipmentsService } from "../../../Services/Products/Shipments/get-shipment.service"

const repository = new PrismaShipmentsRepository(prismaService);
const orderRepository = new PrismaOrdersRepositories(prismaService);
const service = new GetShipmentsService(repository, orderRepository);

class GetShipmentsController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id, code, id_order} = req.query;

      const result = await service.getShipmentsService({
        id: id as string | undefined,
        code: code as string | undefined,
        id_order: id_order ? Number(id_order) : undefined
      });

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!"
      });
    }
  }
}

export { GetShipmentsController };
