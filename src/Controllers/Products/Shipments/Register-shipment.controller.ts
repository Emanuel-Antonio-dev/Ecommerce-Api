import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { RegisterShipmentService } from "../../../Services/Products/Shipments/register-shipment.service";
import { RegisterShipmentDatas } from "../../../interfaces/Products/Shipments/interface";
import { ShipmentStatus } from "../../../../generated/prisma/enums";

const repository = new PrismaShipmentsRepository(prismaService);
const service = new RegisterShipmentService(prismaService, repository);

class RegisterShipmentController {
  static async register(req: Request, res: Response): Promise<Response> {
    try {
      const datas = {
        tracking_code: req.body.tracking_code,
        carrier: req.body.carrier || null,
        id_order_fk: req.body.id_order_fk,
        status: ShipmentStatus.pending,
        estimated_delivery: new Date(req.body.estimated_delivery) || null,
        shipped_at: new Date(req.body.shipped_at) || null,
        delivered_at: new Date(req.body.delivered_at) || null,
      }

      const result = await service.registerShipment(datas);

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

export { RegisterShipmentController };
