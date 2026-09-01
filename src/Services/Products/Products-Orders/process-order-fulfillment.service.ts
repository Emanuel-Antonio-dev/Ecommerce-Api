import { PrismaClient } from "../../../../generated/prisma/client";
import { RegisterShipmentService } from "../Shipments/register-shipment.service";
import { IFulfillmentProvider } from "../Shipments/Providers/Ifulfillment-provider";
import { ShipmentStatus } from "../../../../generated/prisma/enums";

/**
 * Cria o envio de um pedido já confirmado como pago, usando o provedor de
 * fulfillment configurado (hoje: `InternalFulfillmentProvider` — a própria
 * loja faz a entrega; no futuro: uma transportadora real, sem precisar
 * mudar nenhum outro ponto do sistema — ver `FulfillmentProviderFactory`).
 *
 * ⚠️ Propositalmente NÃO faz parte da mesma transação que confirma o
 * pagamento (`SetOrdersStatusService`). São dois eventos de naturezas
 * diferentes: o pagamento é confirmado instantaneamente pelo webhook, mas o
 * envio físico pode depender de uma etapa operacional separada (armazém,
 * transportadora). Se o fulfillment falhar aqui, o pedido continua
 * corretamente "completed" — só o envio fica pendente, registado no log
 * para uma nova tentativa manual (ver `POST /shipments`) ou automática
 * (quando houver um worker de retry).
 */
class ProcessOrderFulfillmentService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly registerShipmentService: RegisterShipmentService,
    private readonly fulfillmentProvider: IFulfillmentProvider
  ) {}

  async process(id_order: number): Promise<{ success: boolean; message: string; datas?: any }> {
    try {
      const result = await this.fulfillmentProvider.createShipment({ id_order });

      const shipment = await this.registerShipmentService.registerShipment({
        id_order_fk: id_order,
        tracking_code: result.tracking_code,
        carrier: result.carrier,
        estimated_delivery: result.estimated_delivery,
        status: ShipmentStatus.pending,
      });

      if (!shipment.success) {
        console.error(
          `[ProcessOrderFulfillmentService] falha ao registar envio do pedido ${id_order} (provedor: ${this.fulfillmentProvider.name}):`,
          shipment.message
        );
        return { success: false, message: shipment.message };
      }

      return { success: true, message: "Envio processado com sucesso", datas: shipment.datas };
    } catch (error: any) {
      // ── nunca propaga: uma falha aqui não pode reverter/afetar a
      // confirmação do pedido, que já foi commitada antes deste passo rodar
      console.error(
        `[ProcessOrderFulfillmentService] erro inesperado ao processar fulfillment do pedido ${id_order}:`,
        error
      );
      return { success: false, message: "Erro interno ao processar o envio" };
    }
  }
}

export { ProcessOrderFulfillmentService };
