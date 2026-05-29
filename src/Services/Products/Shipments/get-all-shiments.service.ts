import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination} from "../../../Common/Utils/helpers";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";

class GetAllShipmentsService {
  constructor(
    private readonly repository: PrismaShipmentsRepository
  ) {}

  async getAllShipmentsService({limit, page}: PaginationParams):Promise<PaginatedResult<any> | any> {
    try {
        const pagination = buildPagination({ page, limit })
        const result = await this.repository.findAllShipments(pagination.take, pagination.skip)
        if(result.length === 0)
        {
            return {success: true, statusCode: 404, message: "De momento não existem pedidos de entrega"}
        }
        const totalShipments = await this.repository.countShipment()
        
      return {
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