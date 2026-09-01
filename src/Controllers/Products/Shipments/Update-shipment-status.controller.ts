import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { UpdateShipmentStatusService } from "../../../Services/Products/Shipments/update-shipment.service";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { EmailProviderFactory } from "../../../Common/Utils/Emails/email-factory";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";

const repository = new PrismaShipmentsRepository(prismaService);
const orderRepository = new PrismaOrdersRepositories(prismaService);
const userRepository = new PrismaUsersRepositories(prismaService);
const emailSender = new SendEmail(EmailProviderFactory.create());
// ✅ sem fulfillmentService — quando um envio chega a "delivered"/"cancelled"
// não faz sentido tentar criar um NOVO envio; só queremos os efeitos
// colaterais de email/stock, que setOrderStatus já cobre sem o fulfillment.
const orderStatusService = new SetOrdersStatusService(prismaService, orderRepository, userRepository, emailSender);
const service = new UpdateShipmentStatusService(prismaService, repository, orderStatusService);

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
