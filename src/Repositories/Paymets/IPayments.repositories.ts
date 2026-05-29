import { Prisma } from "../../../generated/prisma/client";
import { PaymentStatus, Payments } from "../../../generated/prisma/client";
import { PaymentsDatas } from "../../interfaces/Payments/Interface";

abstract class IPaymentsRepositories {
  abstract registerPayment(datas: PaymentsDatas,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<Payments>;

  abstract getPaymentDetail(id_order: number): Promise<any>;
  abstract findById(id_payment: string): Promise<any>;
  abstract findByPaymentOrder(id_order: number): Promise<any[]>;
  abstract isPaymentOrderPaid(id_order: number): Promise<boolean>;
  abstract findByProviderReference(ref: string): Promise<any>;
  abstract updatePaymentStatus(id_payment: string,status: PaymentStatus,paid_at?: Date,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>;
  abstract cancelPayment(id_payment: string,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>;
  abstract getTotalRevenue(): Promise<number>;
}

export { IPaymentsRepositories };