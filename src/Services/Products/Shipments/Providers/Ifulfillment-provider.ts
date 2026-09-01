/**
 * Resultado produzido por um provedor de fulfillment ao gerar um envio para
 * um pedido pago. Hoje a única implementação é `InternalFulfillmentProvider`
 * (a própria loja faz a entrega), mas a interface já está pronta para uma
 * transportadora real: basta implementar `IFulfillmentProvider` chamando a
 * API da transportadora e devolvendo o tracking code real que ela emitir.
 */
export interface FulfillmentResult {
  tracking_code: string;
  carrier: string;
  estimated_delivery?: Date;
}

export interface IFulfillmentProvider {
  /** nome curto do provedor, usado em logs (ex: "internal", "carrier-x") */
  readonly name: string;

  createShipment(order: { id_order: number }): Promise<FulfillmentResult>;
}
