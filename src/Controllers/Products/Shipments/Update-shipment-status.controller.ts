import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { UpdateShipmentStatusService } from "../../../Services/Products/Shipments/update-shipment.service";

const repository = new PrismaShipmentsRepository(prismaService);
const service = new UpdateShipmentStatusService(prismaService, repository);

class UpdateShipmentStatusController {
  static async updateStatus(req: Request, res: Response): Promise<Response> {
    try {
      const { id_shipment } = req.params;
      const { status } = req.body;

      const result = await service.updateStatus(id_shipment as string, status);

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

export { UpdateShipmentStatusController };
