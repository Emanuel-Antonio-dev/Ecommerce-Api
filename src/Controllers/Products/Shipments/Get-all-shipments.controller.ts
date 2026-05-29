import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { GetAllShipmentsService } from "../../../Services/Products/Shipments/get-all-shiments.service";

const repository = new PrismaShipmentsRepository(prismaService);
const service = new GetAllShipmentsService(repository);

class GetAllShipmentsController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const result = await service.getAllShipmentsService({ page, limit });

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

export { GetAllShipmentsController };
