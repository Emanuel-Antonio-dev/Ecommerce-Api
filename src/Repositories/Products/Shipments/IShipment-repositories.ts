import { RegisterShipmentDatas } from '../../../interfaces/Products/Shipments/interface';
import { ShipmentStatus } from '../../../../generated/prisma/enums';
import { Prisma } from '../../../../generated/prisma/client';

export abstract class IShipmentsRepository {
  abstract register(data: RegisterShipmentDatas, tx?:Omit<Prisma.TransactionClient, "$transaction">): Promise<any>;
  abstract findByOrderId(id_order: number): Promise<any | null>;
  abstract findByTrackingCode(code: string): Promise<any | null>;
  abstract updateStatus(id_shipment: string,status: ShipmentStatus): Promise<any>;
  abstract updateDetails(id_shipment: string, data: Partial<{ carrier: string; tracking_code: string; estimated_delivery: Date }>): Promise<any>;
  abstract findById(id: string): Promise<any | null>;
  abstract findAllShipments(take?: number, skip?: number):Promise<any[]>
  abstract countShipment():Promise<number | any>
  abstract findShipment(param:Partial<{id: string, code: string, id_order: number}>):Promise<any>
}