import { Prisma, PrismaClient, PaymentStatus } from "../../../../generated/prisma/client";
import { PaymentsDatas } from "../../../interfaces/Payments/Interface";
import { IPaymentsRepositories } from "../IPayments.repositories";

class PrismaPaymentsRepositories
  implements IPaymentsRepositories {

  constructor(private readonly prisma: PrismaClient) {}

  // 🔹 Criar pagamento
  async registerPayment(datas: PaymentsDatas,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
  {
    const client = tx ?? this.prisma;

    return client.payments.create({
      data: {
        amount: datas.amount,
        currency: datas.currency ?? "AOA",
        status: datas.payment_status ?? "pending",
        provider: datas.provider,
        provider_reference: datas.provider_reference,
        paid_at: datas.paid_at,
        id_order_fk: datas.id_order_fk,
        metadata: datas.metadata
          ? (typeof datas.metadata === "string"
              ? JSON.parse(datas.metadata)
              : datas.metadata)
          : undefined,
      },
    });
  }

  // 🔹 Buscar primeiro pagamento da ordem
async getPaymentDetail(id_order: number): Promise<any> {
  return this.prisma.payments.findFirst({
    where: { id_order_fk: id_order },
    orderBy: { created_at: "desc" },
    include: {
      order:{
        select:{
          id_order: true,
          payment_method: true,
          shipping_city: true,
          shipping_country: true,
          shipping_phone_number: true,
          shipping_province: true,
          shipping_street: true,
          total_amount: true,
          status: true,
          user_details:{
            select:{
              id_user: true,
              first_name: true,
              last_name: true,
              username: true,
              user_type: true,
              account_details: {select:{email: true, verified: true}},
              my_contacts:{
                select:{phone_number: true, is_default: true}
              }
            }
          },
          shipment:{
            select:{
              id_shipment: true,
              tracking_code: true,
              carrier: true,
              delivered_at: true,
              shipped_at: true
            }
          },
          order_items:{
            select:{
              id_order_item: true,
              price: true,
              quantity: true,
              variant:{
                select:{
                  product:{
                    select:{id_product: true,name: true, images:{select:{url: true}}}
              }
                }
              }
            }
          }
        }
      }
    }
  });
}

  // 🔹 Buscar por ID
  async findById(id_payment: string): Promise<any> {
    return this.prisma.payments.findUnique({
      where: { id_payment: id_payment },
    include: {
      order:{
        select:{
          id_order: true,
          payment_method: true,
          shipping_city: true,
          shipping_country: true,
          shipping_phone_number: true,
          shipping_province: true,
          shipping_street: true,
          total_amount: true,
          status: true,
          user_details:{
            select:{
              id_user: true,
              first_name: true,
              last_name: true,
              username: true,
              user_type: true,
              account_details: {select:{email: true, verified: true}},
              my_contacts:{
                select:{phone_number: true, is_default: true}
              }
            }
          },
          shipment:{
            select:{
              id_shipment: true,
              tracking_code: true,
              carrier: true,
              delivered_at: true,
              shipped_at: true
            }
          },
          order_items:{
            select:{
              id_order_item: true,
              price: true,
              quantity: true,
              variant:{
                select:{
                  product:{
                    select:{id_product: true,name: true, images:{select:{url: true}}}
                  }
                }
              }
            }
          }
        }
      }
    }
    });
  }

  // 🔹 Listar pagamentos da ordem
  async findByPaymentOrder(id_order: number): Promise<any[]> {
    return this.prisma.payments.findMany({
      where: { id_order_fk: id_order },
      orderBy: { created_at: "desc" },
      include: {
      order:{
        select:{
          id_order: true,
          payment_method: true,
          shipping_city: true,
          shipping_country: true,
          shipping_phone_number: true,
          shipping_province: true,
          shipping_street: true,
          total_amount: true,
          status: true,
          user_details:{
            select:{
              id_user: true,
              first_name: true,
              last_name: true,
              username: true,
              user_type: true,
              account_details: {select:{email: true, verified: true}},
              my_contacts:{
                select:{phone_number: true, is_default: true}
              }
            }
          },
          shipment:{
            select:{
              id_shipment: true,
              tracking_code: true,
              carrier: true,
              delivered_at: true,
              shipped_at: true
            }
          },
          order_items:{
            select:{
              id_order_item: true,
              price: true,
              quantity: true,
              variant:{
                select:{
              product:{
                select:{id_product: true,name: true, images:{select:{url: true}}}
              }
            }
          }
        }
      }
        }
      }
    }
    });
  }

  // 🔹 Verificar se já foi pago
  async isPaymentOrderPaid(id_order: number): Promise<boolean> {
    const payment = await this.prisma.payments.findFirst({
      where: {
        id_order_fk: id_order,
        status: "paid",
      },
    });

    return !!payment;
  }

  // 🔹 Buscar por referência do provider (webhook)
  async findByProviderReference(ref: string): Promise<any> {
    return this.prisma.payments.findUnique({
      where: {
        provider_reference: ref,
      },
    });
  }

  // 🔹 Atualizar status
  async updatePaymentStatus(id_payment: string,status: PaymentStatus,paid_at?: Date,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any> {
    const client = tx ?? this.prisma;

    return client.payments.update({
      where: { id_payment },
      data: {
        status: status,
        paid_at: paid_at
      },
    });
  }

  // 🔹 Cancelar pagamento
  async cancelPayment(id_payment: string,tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
  {
    const client = tx ?? this.prisma;

    return client.payments.update({
      where: { id_payment },
      data: {
        status: "cancelled",
      },
    });
  }

  // 🔹 Total faturado
  async getTotalRevenue(): Promise<number> {
    const result = await this.prisma.payments.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "paid",
      },
    });

    return Number(result._sum.amount ?? 0);
  }
}

export { PrismaPaymentsRepositories };