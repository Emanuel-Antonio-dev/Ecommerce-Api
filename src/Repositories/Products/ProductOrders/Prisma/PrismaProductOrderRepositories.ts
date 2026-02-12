import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { nanoid } from "nanoid";
import { IProductOrderRepositories } from "../product-order-repositories";
import { productsOrderItemsDatas, productsOrdersDatas } from "../../../../interfaces/Products/Products-Orders/interface";

class PrismaOrdersRepositories implements IProductOrderRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async registerOrder(datas: productsOrdersDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.orders.create({
            data:{
                total_amount: datas.total_amount,
                id_user_fk: datas.id_user_fk,
                status: datas.status,
                payment_method: datas.payment_method,
                shipping_city: datas.shipping_city,
                shipping_country: datas.shipping_country,
                shipping_phone_number: datas.shipping_phone_number,
                shipping_province: datas.shipping_province,
                shipping_street: datas.shipping_street
            }
        })
    }
    async registerOrderItems(datas: productsOrderItemsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.orderItems.create({
            data:{
                quantity: datas.quantity,
                id_order_fk: datas.id_order_fk,
                id_product_fk: datas.id_product_fk,
                price: datas.price
            }
        })
    }
    async setOrderStatus(id_order: number, status: "completed" | "cancelled" | "failed"): Promise<any>
    {
        return await this.prisma.orders.update({where:{id_order: id_order}, data:{status:status}})    
    }
    async getOrderItemsByOrder(id_order_fk: number): Promise<productsOrderItemsDatas[] | any>
    {
        return await this.prisma.orderItems.findFirst({where:{id_order_fk: id_order_fk}, include:{order:{include:{user_details: true}}}})
    }
}
export {PrismaOrdersRepositories}