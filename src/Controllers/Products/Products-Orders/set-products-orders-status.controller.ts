import { prismaService } from "../../../lib/prisma.service";
import { Request, Response } from "express";
import { EmailProviderFactory } from "../../../Common/Utils/Emails/email-factory";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../../Services/Products/Products-Orders/set-products-orders-status.service";
import { ProcessOrderFulfillmentService } from "../../../Services/Products/Products-Orders/process-order-fulfillment.service";
import { RequestWithCredentials } from "../../../interfaces/Shared/authentication.interface";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { RegisterShipmentService } from "../../../Services/Products/Shipments/register-shipment.service";
import { FulfillmentProviderFactory } from "../../../Services/Products/Shipments/Providers/fulfillment-provider.factory";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const emailSender: SendEmail = new SendEmail(EmailProviderFactory.create())
const shippmentRepo = new PrismaShipmentsRepository(prismaService)
const shippmentService = new RegisterShipmentService(prismaService, shippmentRepo)
// ✅ FIX: o admin usa exatamente o mesmo caminho de transição/fulfillment que
// o webhook — antes este controller montava manualmente um objeto de envio
// e chamava um branch do service que só existia se `shippmentDatas` fosse
// truthy; qualquer chamada legítima do webhook (sem esses dados) caía no
// bloco de cancelamento por engano. Agora "completar" um pedido tem um
// único significado, venha de onde vier.
const fulfillmentService = new ProcessOrderFulfillmentService(
  prismaService,
  shippmentService,
  FulfillmentProviderFactory.create()
)
const service = new SetOrdersStatusService(prismaService, repository, userRepository, emailSender, fulfillmentService)

class SetProductsOrdersStatusController
{
    static async set(req: RequestWithCredentials, res: Response):Promise<Response | any>
    {
        try
        {
            const {status} = req.body
            const id_order = Number(req.params.id_order)

            const result = await service.setOrderStatus(id_order, status);
            return res.status(result.statusCode).json(result);
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {SetProductsOrdersStatusController}
