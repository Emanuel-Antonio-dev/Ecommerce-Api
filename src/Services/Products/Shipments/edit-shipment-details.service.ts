import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { cacheService } from "../../../lib/cache.service";

const TRACKING_CODE_REGEX = /^[A-Z0-9\-]{4,40}$/;
const CARRIER_MAX_LENGTH = 100;

// mesmos estados finais definidos em UpdateShipmentStatusService — não faz
// sentido editar carrier/tracking de um envio já entregue ou cancelado
const FINAL_STATUSES = ["delivered", "cancelled"];

interface EditShipmentDetailsInput {
  carrier?: string;
  tracking_code?: string;
  estimated_delivery?: string | Date;
}

class EditShipmentDetailsService {
  constructor(private readonly repository: PrismaShipmentsRepository) {}

  async execute(id_shipment: string, input: EditShipmentDetailsInput) {
    try {
      if (!id_shipment) {
        throw new HttpException(false, 400, "Informe o envio");
      }

      if (
        input.carrier === undefined &&
        input.tracking_code === undefined &&
        input.estimated_delivery === undefined
      ) {
        throw new HttpException(false, 400, "Informe pelo menos um campo para atualizar");
      }

      const shipment = await this.repository.findById(id_shipment);
      if (!shipment) {
        throw new HttpException(false, 404, "Envio não encontrado");
      }

      // ✅ útil sobretudo para o caso "entrega própria": o sistema gera um
      // tracking_code interno automaticamente ao confirmar o pagamento, mas
      // o admin pode querer substituí-lo por um código real que já tem em
      // mãos (ex: número de guia físico do estafeta), ou trocar o carrier
      // de "Entrega própria" pelo nome de quem entrega de facto.
      if (FINAL_STATUSES.includes(shipment.status)) {
        throw new HttpException(
          false,
          400,
          `Não é possível editar um envio com status "${shipment.status}"`
        );
      }

      const data: Partial<{ carrier: string; tracking_code: string; estimated_delivery: Date }> = {};

      if (input.carrier !== undefined) {
        const carrier = input.carrier.trim();
        if (carrier.length === 0) {
          throw new HttpException(false, 400, "Transportadora não pode ser uma string vazia");
        }
        if (carrier.length > CARRIER_MAX_LENGTH) {
          throw new HttpException(
            false,
            400,
            `Transportadora não pode ultrapassar ${CARRIER_MAX_LENGTH} caracteres`
          );
        }
        data.carrier = carrier;
      }

      if (input.tracking_code !== undefined) {
        const trackingCode = input.tracking_code.trim().toUpperCase();
        if (!TRACKING_CODE_REGEX.test(trackingCode)) {
          throw new HttpException(false, 400, "Código de rastreamento em formato inválido");
        }
        if (trackingCode !== shipment.tracking_code) {
          const trackingAlreadyExists = await this.repository.findByTrackingCode(trackingCode);
          if (trackingAlreadyExists) {
            throw new HttpException(false, 400, "Código de rastreamento já utilizado");
          }
        }
        data.tracking_code = trackingCode;
      }

      if (input.estimated_delivery !== undefined) {
        const estimatedDate = new Date(input.estimated_delivery);
        if (isNaN(estimatedDate.getTime())) {
          throw new HttpException(false, 400, "Data de entrega estimada contém uma data inválida");
        }
        if (estimatedDate <= new Date()) {
          throw new HttpException(false, 400, "Data de entrega estimada deve ser uma data futura");
        }
        data.estimated_delivery = estimatedDate;
      }

      const updated = await this.repository.updateDetails(id_shipment, data);

      cacheService.invalidateShipment(id_shipment, shipment.id_order_fk, shipment.tracking_code);
      if (data.tracking_code) {
        cacheService.invalidateShipment(id_shipment, shipment.id_order_fk, data.tracking_code);
      }

      return {
        success: true,
        statusCode: 200,
        message: "Envio atualizado com sucesso",
        datas: updated,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { EditShipmentDetailsService };
