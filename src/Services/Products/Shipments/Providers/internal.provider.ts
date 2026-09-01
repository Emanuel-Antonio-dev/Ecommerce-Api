import { generateTrackingCode } from "../../../../Common/Utils/helpers";
import { FulfillmentResult, IFulfillmentProvider } from "./Ifulfillment-provider";

// quantos dias, por omissão, a loja estima para entregar quando é ela
// própria a fazer o transporte (sem transportadora terceira integrada)
const DEFAULT_INTERNAL_DELIVERY_DAYS = 5;

/**
 * Provedor "de autoria do sistema": hoje é assim que a loja opera — não há
 * transportadora terceira integrada, então o próprio sistema gera um código
 * de rastreio interno e assume a entrega. Quando existir uma transportadora
 * real, cria-se um novo provedor (ex: `CarrierFulfillmentProvider`) que
 * implementa a mesma interface chamando a API dela, e troca-se a seleção em
 * `FulfillmentProviderFactory` — nenhum outro ponto do sistema muda.
 */
export class InternalFulfillmentProvider implements IFulfillmentProvider {
  readonly name = "internal";

  async createShipment(order: { id_order: number }): Promise<FulfillmentResult> {
    const estimated_delivery = new Date();
    estimated_delivery.setDate(estimated_delivery.getDate() + DEFAULT_INTERNAL_DELIVERY_DAYS);

    return {
      tracking_code: `SHP-${generateTrackingCode()}`,
      carrier: "Entrega própria",
      estimated_delivery,
    };
  }
}
