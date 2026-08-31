import { IShipmentsRepository } from '../IShipment-repositories';
import { Prisma, PrismaClient } from '../../../../../generated/prisma/client';
import { RegisterShipmentDatas } from '../../../../interfaces/Products/Shipments/interface';
import { ShipmentStatus } from '../../../../../generated/prisma/enums';

export class PrismaShipmentsRepository implements IShipmentsRepository {
  constructor(private readonly prisma: PrismaClient){}

  async register(data: RegisterShipmentDatas, tx?:Omit<Prisma.TransactionClient, "$transaction">): Promise<any> {
    const client = tx || this.prisma
    return client.shipments.create({
      data: {
        ...data,
        tracking_code: data.tracking_code!
      },
    });
  }

  async findByOrderId(id_order: number): Promise<any | null> {
    return this.prisma.shipments.findFirst({
      where: { id_order_fk: id_order },
    });
  }

  async findByTrackingCode(code: string): Promise<any | null> {
    return this.prisma.shipments.findFirst({
      where: { tracking_code: code },
    });
  }

  async updateStatus(id_shipment: string, status: ShipmentStatus): Promise<any> {
    return this.prisma.shipments.update({
      where: { id_shipment },
      data: { status },
    });
  }

  async findById(id: string): Promise<any | null> {
    return this.prisma.shipments.findUnique({
      where: { id_shipment: id },
    });
  }
  async findAllShipments(take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.shipments.findMany({select:{id_shipment: true, shipped_at: true, status: true, tracking_code: true, id_order_fk: true}, take: take!, skip: skip!})
  }
  async countShipment(): Promise<number | any> {
    return await this.prisma.shipments.count()
  }
  async findShipment(param: Partial<{ id: string; code: string; id_order: number; }>): Promise<any> {
    if(param.id_order)
      {
        return await this.prisma.shipments.findFirst({where:{id_order_fk: param.id_order},select:{id_shipment: true, shipped_at: true, status: true, tracking_code: true, id_order_fk: true}})
      }
      else if(param.code)
      {
        return await this.prisma.shipments.findFirst({where:{tracking_code: param.code},select:{id_shipment: true, shipped_at: true, status: true, tracking_code: true, id_order_fk: true}})
      }
      else{
        return await this.prisma.shipments.findFirst({where:{id_shipment: param.id},select:{id_shipment: true, shipped_at: true, status: true, tracking_code: true, id_order_fk: true}})
      }
    }
}
