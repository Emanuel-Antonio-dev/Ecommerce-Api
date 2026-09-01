import { FulfillmentResult, IFulfillmentProvider } from "./Ifulfillment-provider";

/**
 * ⏳ Placeholder para quando existir uma transportadora real integrada.
 *
 * Quando esse dia chegar, a implementação aqui deve:
 *   1. Chamar a API da transportadora com os dados do pedido/endereço de
 *      entrega (endereço já está em `Orders.shipping_*`).
 *   2. Obter o tracking_code REAL emitido pela transportadora (não gerar um
 *      código interno — o cliente precisa conseguir rastrear no site dela).
 *   3. Tratar falhas da API externa sem derrubar a confirmação do pedido —
 *      ver `ProcessOrderFulfillmentService`, que já isola esse passo do
 *      commit do pagamento.
 *
 * Depois de implementado, é só trocar a seleção em
 * `FulfillmentProviderFactory` (via a env var `FULFILLMENT_PROVIDER`) — mais
 * nenhum outro ponto do sistema precisa mudar.
 */
export class CarrierFulfillmentProvider implements IFulfillmentProvider {
  readonly name = "carrier";

  async createShipment(order: { id_order: number }): Promise<FulfillmentResult> {
    throw new Error(
      "CarrierFulfillmentProvider ainda não está implementado — nenhuma transportadora integrada."
    );
  }
}
