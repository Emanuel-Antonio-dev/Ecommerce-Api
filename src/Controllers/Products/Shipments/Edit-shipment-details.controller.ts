import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { EditShipmentDetailsService } from "../../../Services/Products/Shipments/edit-shipment-details.service";

const repository = new PrismaShipmentsRepository(prismaService);
const service = new EditShipmentDetailsService(repository);

class EditShipmentDetailsController {
  static async edit(req: Request, res: Response): Promise<Response> {
    try {
      const { id_shipment } = req.params;

      const result = await service.execute(id_shipment as string, {
        carrier: req.body.carrier,
        tracking_code: req.body.tracking_code,
        estimated_delivery: req.body.estimated_delivery,
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

export { EditShipmentDetailsController };
