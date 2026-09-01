import "dotenv/config";
import { IFulfillmentProvider } from "./Ifulfillment-provider";
import { InternalFulfillmentProvider } from "./internal.provider";
import { CarrierFulfillmentProvider } from "./carrier.provider";

export class FulfillmentProviderFactory {
  static create(): IFulfillmentProvider {
    const driver = process.env.FULFILLMENT_PROVIDER || "internal";

    switch (driver) {
      case "internal":
        return new InternalFulfillmentProvider();
      case "carrier":
        return new CarrierFulfillmentProvider();
      default:
        throw new Error(`FULFILLMENT_PROVIDER inválido: "${driver}"`);
    }
  }
}
