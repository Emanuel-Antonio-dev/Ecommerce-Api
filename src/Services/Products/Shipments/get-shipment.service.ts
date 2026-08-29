import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

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
          const cacheKey = CACHE_KEYS.shipmentOrder(param.id_order)
          const cached = cacheService.get<any>(cacheKey)
          if (cached) return { ...cached, cached: true }

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
          const response = {success: true, statusCode: 200, datas: result}
          cacheService.set(cacheKey, response, CACHE_TTL.SHIPMENT)
          return { ...response, cached: false }
        }
        else if(param.code)
        {
          const cacheKey = CACHE_KEYS.shipmentTracking(param.code)
          const cached = cacheService.get<any>(cacheKey)
          if (cached) return { ...cached, cached: true }

          let result = await this.repository.findByTrackingCode(param.code)
          if(!result)
          {
            throw new HttpException(false, 404, "Pedido de entrega não encontrado")
          }
          const response = {success: true, statusCode: 200, datas: result}
          cacheService.set(cacheKey, response, CACHE_TTL.SHIPMENT)
          return { ...response, cached: false }
        }

        const cacheKey = CACHE_KEYS.shipment(param.id!)
        const cached = cacheService.get<any>(cacheKey)
        if (cached) return { ...cached, cached: true }

        const result = await this.repository.findById(param.id!)
        if(!result)
        {
          throw new HttpException(false, 404, "Pedido de entrega não encontrado")
        }
      const response = {
        success: true,
        statusCode: 200,
        datas: result,
      };
      cacheService.set(cacheKey, response, CACHE_TTL.SHIPMENT)
      return { ...response, cached: false };
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