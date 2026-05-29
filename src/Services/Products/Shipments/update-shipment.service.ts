import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { ShipmentStatus } from "../../../../generated/prisma/enums";

// Máquina de estados — define quais transições são permitidas a partir de cada status
const ALLOWED_TRANSITIONS: Record<ShipmentStatus, ShipmentStatus[]> = {
  pending:    ["processing", "cancelled"],
  processing: ["shipped",    "cancelled"],
  shipped:    ["delivered",  "cancelled"],
  delivered:  [], // estado final — nenhuma transição permitida
  cancelled:  [], // estado final — nenhuma transição permitida
};

const VALID_STATUSES: ShipmentStatus[] = [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

class UpdateShipmentStatusService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaShipmentsRepository
  ) {}

  async updateStatus(id_shipment: string, status: ShipmentStatus) {
    try {
      // ── id_shipment ───────────────────────────────────────────────────
      if (!id_shipment || typeof id_shipment !== "string" || id_shipment.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o envio");
      }

      // ── status recebido ───────────────────────────────────────────────
      if (!status) {
        throw new HttpException(false, 400, "Informe o novo status");
      }

      if (!VALID_STATUSES.includes(status)) {
        throw new HttpException(
          false,
          400,
          `Status inválido. Valores aceites: ${VALID_STATUSES.join(", ")}`
        );
      }

      // ── envio existe ──────────────────────────────────────────────────
      const shipment = await this.repository.findById(id_shipment.trim());

      if (!shipment) {
        throw new HttpException(false, 404, "Envio não encontrado");
      }

      // ── transição igual ao atual ──────────────────────────────────────
      if (shipment.status === status) {
        throw new HttpException(
          false,
          400,
          `O envio já se encontra com o status "${status}"`
        );
      }

      // ── estado final — imutável ───────────────────────────────────────
      if (ALLOWED_TRANSITIONS[shipment.status as ShipmentStatus].length === 0) {
        throw new HttpException(
          false,
          400,
          `Não é possível alterar um envio com status "${shipment.status}"`
        );
      }

      // ── transição permitida pela máquina de estados ───────────────────
      const allowed = ALLOWED_TRANSITIONS[shipment.status as ShipmentStatus];

      if (!allowed.includes(status)) {
        throw new HttpException(
          false,
          400,
          `Transição inválida: "${shipment.status}" → "${status}". Transições permitidas: ${allowed.join(", ")}`
        );
      }

      // ── persistência ──────────────────────────────────────────────────
      const updatedShipment = await this.repository.updateStatus(id_shipment, status);

      // ── efeitos colaterais por status ─────────────────────────────────
      if (status === "delivered") {
        await this.prisma.orders.update({
          where: { id_order: shipment.id_order_fk },
          data: {
            delivered_at: new Date(),
            status: "completed",
          },
        });
      }

      if (status === "cancelled") {
        await this.prisma.orders.update({
          where: { id_order: shipment.id_order_fk },
          data: { status: "cancelled" },
        });
      }

      return {
        success: true,
        statusCode: 200,
        message: "Status atualizado com sucesso",
        datas: updatedShipment,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }

      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno." };
    }
  }
}

export { UpdateShipmentStatusService };