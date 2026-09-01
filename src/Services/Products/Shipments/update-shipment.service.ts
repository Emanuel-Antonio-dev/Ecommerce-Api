import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaShipmentsRepository } from "../../../Repositories/Products/Shipments/Prisma/prisma-shipment";
import { ShipmentStatus } from "../../../../generated/prisma/enums";
import { cacheService } from "../../../lib/cache.service";
import { SetOrdersStatusService } from "../Products-Orders/set-products-orders-status.service";

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
    private readonly repository: PrismaShipmentsRepository,
    // ✅ FIX: antes este service escrevia `orders.status` diretamente com
    // `prisma.orders.update`, ignorando por completo `SetOrdersStatusService`
    // — isso significava que cancelar um envio NÃO devolvia o stock (só o
    // fluxo de cancelamento do pedido faz isso), e nenhum email era
    // disparado. Agora delega ao mesmo caminho único usado pelo webhook e
    // pelo admin, para que "cancelar"/"completar" um pedido tenha sempre o
    // mesmo efeito, venha de onde vier.
    private readonly orderStatusService?: SetOrdersStatusService
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

      // ── efeitos colaterais no pedido — desacoplados, depois do commit
      // acima. Se falharem, o ENVIO continua correctamente atualizado; só o
      // pedido fica por sincronizar, registado no log para correção manual.
      if (status === "delivered" && this.orderStatusService) {
        const result = await this.orderStatusService.setOrderStatus(shipment.id_order_fk, "completed");
        if (!result.success) {
          console.error(
            `[UpdateShipmentStatusService] falha ao marcar pedido ${shipment.id_order_fk} como completed:`,
            result.message
          );
        }
      }

      if (status === "cancelled" && this.orderStatusService) {
        const result = await this.orderStatusService.setOrderStatus(shipment.id_order_fk, "cancelled");
        if (!result.success) {
          console.error(
            `[UpdateShipmentStatusService] falha ao cancelar pedido ${shipment.id_order_fk}:`,
            result.message
          );
        }
      }

      // ✅ status e possivelmente o pedido associado mudaram
      cacheService.invalidateShipment(
        id_shipment,
        shipment.id_order_fk,
        shipment.tracking_code
      );

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
