import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { RegisterShipmentDatas } from "../../../interfaces/Products/Shipments/interface";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";

const TRACKING_CODE_REGEX = /^[A-Z0-9\-]{4,40}$/;
const CARRIER_MAX_LENGTH = 100;

class RegisterShipmentService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaShipmentsRepository
  ) {}

  async registerShipment(datas: RegisterShipmentDatas) {
    try {
      // ── campos obrigatórios ──────────────────────────────────────────
      if (!datas.tracking_code || !datas.id_order_fk) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      // ── tracking_code ────────────────────────────────────────────────
      const sanitizedTracking = datas.tracking_code.toUpperCase().trim();

      if (!TRACKING_CODE_REGEX.test(sanitizedTracking)) {
        throw new HttpException(
          false,
          400,
          "Código de rastreamento inválido. Use apenas letras maiúsculas, números e hífens (4–40 caracteres)"
        );
      }

      // ── carrier (opcional) ───────────────────────────────────────────
      if (datas.carrier !== undefined) {
        const carrier = datas.carrier.trim();

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

        datas.carrier = carrier;
      }

      // ── estimated_delivery (opcional) ────────────────────────────────
      if (datas.estimated_delivery !== undefined) {
        const estimatedDate = new Date(datas.estimated_delivery);

        if (isNaN(estimatedDate.getTime())) {
          throw new HttpException(false, 400, "Data de entrega estimada contém uma data inválida");
        }

        if (estimatedDate <= new Date()) {
          throw new HttpException(false, 400, "Data de entrega estimada deve ser uma data futura");
        }

        datas.estimated_delivery = estimatedDate;
      }

      // ── shipped_at (opcional) ─────────────────────────────────────────
      if (datas.shipped_at !== undefined) {
        const shippedDate = new Date(datas.shipped_at);

        if (isNaN(shippedDate.getTime())) {
          throw new HttpException(false, 400, "Data de envio contém uma data inválida");
        }

        if (shippedDate > new Date()) {
          throw new HttpException(false, 400, "Data de envio não pode ser uma data futura");
        }

        datas.shipped_at = shippedDate;
      }

      // ── delivered_at (opcional) ───────────────────────────────────────
      if (datas.delivered_at !== undefined) {
        const deliveredDate = new Date(datas.delivered_at);

        if (isNaN(deliveredDate.getTime())) {
          throw new HttpException(false, 400, "Data de entrega contém uma data inválida");
        }

        if (deliveredDate > new Date()) {
          throw new HttpException(false, 400, "Data de entrega não pode ser uma data futura");
        }

        // entregue não pode ser antes de despachado
        if (datas.shipped_at && deliveredDate < new Date(datas.shipped_at)) {
          throw new HttpException(
            false,
            400,
            "Data de entrega não pode ser anterior a data de envio"
          );
        }

        datas.delivered_at = deliveredDate;
      }

      // ── coerência entre datas ─────────────────────────────────────────
      if (datas.estimated_delivery && datas.shipped_at) {
        // estimativa pode ser anterior ao shipped_at em edge cases; apenas loga
        // mas entrega real antes da estimativa é válida — sem bloqueio aqui
      }

      // ── unicidade ─────────────────────────────────────────────────────
      const shipmentAlreadyExists = await this.repository.findByOrderId(datas.id_order_fk);
      if (shipmentAlreadyExists) {
        throw new HttpException(false, 400, "Este pedido já possui envio registrado");
      }

      const trackingAlreadyExists = await this.repository.findByTrackingCode(sanitizedTracking);
      if (trackingAlreadyExists) {
        throw new HttpException(false, 400, "Código de rastreamento já utilizado");
      }

      // ── pedido e pagamento ────────────────────────────────────────────
      const order = await this.prisma.orders.findFirst({
        where: { id_order: datas.id_order_fk },
        include: { payment: true },
      });

      if (!order) {
        throw new HttpException(false, 404, "Pedido não encontrado");
      }

      if (!order.payment) {
        throw new HttpException(false, 400, "Pedido sem pagamento concluído");
      }

      if (order.payment.status !== "paid") {
        throw new HttpException(false, 400, "Somente pedidos pagos podem ser enviados");
      }

      if (order.status === "cancelled") {
        throw new HttpException(false, 400, "Não é possível criar envio para um pedido cancelado");
      }

      // ── persistência ──────────────────────────────────────────────────
      const shipment = await this.repository.register({
        ...datas,
        tracking_code: sanitizedTracking,
      });

      return {
        success: true,
        statusCode: 201,
        message: "Envio registrado com sucesso",
        datas: shipment,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }

      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { RegisterShipmentService };