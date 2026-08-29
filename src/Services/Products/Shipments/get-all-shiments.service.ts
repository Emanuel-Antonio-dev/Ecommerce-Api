import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination} from "../../../Common/Utils/helpers";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { buildCacheHash } from "../../../Common/Utils/Cache/hash";
import { cacheService } from "../../../lib/cache.service";
import { CACHE_KEYS, CACHE_TTL } from "../../../lib/cache_keys";

class GetAllShipmentsService {
  constructor(
    private readonly repository: PrismaShipmentsRepository
  ) {}

  async getAllShipmentsService({limit, page}: PaginationParams):Promise<PaginatedResult<any> | any> {
    try {
        const pagination = buildPagination({ page, limit })
        const hash = buildCacheHash({ page: pagination.page, limit: pagination.take })
        const cacheKey = CACHE_KEYS.shipmentsList(hash)

        const cached = cacheService.get<any>(cacheKey)
        if (cached) return { ...cached, cached: true }

        const result = await this.repository.findAllShipments(pagination.take, pagination.skip)
        if(result.length === 0)
        {
            return {success: true, statusCode: 404, message: "De momento não existem pedidos de entrega"}
        }
        const totalShipments = await this.repository.countShipment()

      const response = {
        success: true,
        statusCode: 201,
        message: "Envio registrado com sucesso",
        datas: result,
        meta: {
            total: totalShipments,
            page: pagination.page,
            limit: pagination.take,
            total_pages: Math.ceil(totalShipments / pagination.take)
        }
      };

      cacheService.set(cacheKey, response, CACHE_TTL.SHIPMENTS_LIST)

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

export { GetAllShipmentsService };