import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";

class GetShipmentsService {
  constructor(
    private readonly repository: PrismaShipmentsRepository,
    private readonly orderRepository: PrismaOrdersRepositories
  ) {}
  async getShipmentsService(param: Partial<{ id: string; code: string; id_order: number; }>){
    try {
        if(!param.id_order && !param.id && !param.code)
        {
          throw new HttpException(false, 400, "Informe algum parâmetro")
        }
        if(param.id_order)
        {
          const existsOrder = await this.orderRepository.getOrder(param.id_order)
          if(!existsOrder)
          {
            throw new HttpException(false, 404, "pedido não encontrado")
          }
          let result = await this.repository.findByOrderId(param.id_order)
          if(!result)
          {
            throw new HttpException(false, 404, "Pedido de entrega não encontrado")
          }
          return {success: true, statusCode: 200, datas: result}
        }
        else if(param.code)
        {
          let result = await this.repository.findByTrackingCode(param.code)
          if(!result)
          {
            throw new HttpException(false, 404, "Pedido de entrega não encontrado")
          }
          return {success: true, statusCode: 200, datas: result}
        }
        const result = await this.repository.findById(param.id!)
        if(!result)
        {
          throw new HttpException(false, 404, "Pedido de entrega não encontrado")
        }
      return {
        success: true,
        statusCode: 200,
        datas: result,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.log(error);

      return {
        success: false,
        statusCode: 500,
        message: "Erro interno do servidor"
      };
    }
  }
}

export { GetShipmentsService };