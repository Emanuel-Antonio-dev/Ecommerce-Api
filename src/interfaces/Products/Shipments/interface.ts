import { ShipmentStatus } from "../../../../generated/prisma/enums";

export interface RegisterShipmentDatas {
    tracking_code?: string;
    carrier?: string;
    id_order_fk: number;
    status: ShipmentStatus;
    id_shipment?: string;
    estimated_delivery?: Date;
    shipped_at?: Date;
    delivered_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}