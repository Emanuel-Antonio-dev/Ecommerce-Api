import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import crypto from "crypto";
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
                total_amount: datas.total_amount!,
                order_number: crypto.randomBytes(10).toString("hex"),
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
                id_variant_fk: datas.id_variant_fk,
                price: datas.price,
                product_name: datas.product_name,
                product_price: datas.product_price,
            }
        })
    }
    async setOrderStatus(id_order: number, status: "completed" | "cancelled" | "failed", tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.orders.update({where:{id_order: id_order}, data:{status:status}})    
    }
    async getOrderItemsByOrder(id_order_fk: number, tx?:Omit<Prisma.TransactionClient, "$transaction">): Promise<productsOrderItemsDatas[] | any>
    {
        const client = tx || this.prisma
        return await client.orderItems.findMany({where:{id_order_fk: id_order_fk},
            omit:{id_order_fk: true, id_variant_fk: true},
            include:{
                order:{
                    omit:
                    {
                        id_user_fk: true
                    },
                        include:{
                            user_details: 
                            {
                                select:{
                                    id_user: true,
                                    first_name: true, 
                                    last_name: true
                                }}},},
                        variant:{
                            select:{
                                product: {
                                    select:{
                                        id_product: true,
                                        name: true, 
                                        price: true, 
                        images:{
                            select:{
                                url: true
                            }},
                }}}}}})
    }
    async getOrder(id_order: number): Promise<any> {
        return await this.prisma.orders.findFirst({where:{id_order: id_order}, omit:{id_user_fk: true},include:{user_details:{
            select:{
                id_user: true,
                first_name: true,
                last_name: true,
                my_contacts: {select:{phone_number: true}},
                account_details:{select:{email: true}}
            }
        }}})
    }
}
export {PrismaOrdersRepositories}