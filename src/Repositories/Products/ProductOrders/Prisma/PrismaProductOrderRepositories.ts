import { PrismaClient, Prisma} from "../../../../../generated/prisma";
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
                id_order: nanoid(),
                total_amount: datas.total_amount,
                id_user_fk: datas.id_user_fk,
                status: datas.status,
                payment_method: datas.payment_method
            }
        })
    }
    async registerOrderItems(datas: productsOrderItemsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.orderItems.create({
            data:{
                id_order_item: nanoid(),
                quantity: datas.quantity,
                id_order_fk: datas.id_order_fk,
                id_product_fk: datas.id_product_fk,
                price: datas.price
            }
        })
    }
    async setOrderStatus(id_order: string, status: "completed" | "cancelled"): Promise<any>
    {
        return await this.prisma.orders.update({where:{id_order: id_order}, data:{status:status}})    
    }
    async getOrderItemsByOrder(id_order_fk: string): Promise<productsOrderItemsDatas[] | any>
    {
        return await this.prisma.orderItems.findFirst({where:{id_order_fk: id_order_fk}})
    }
}
export {PrismaOrdersRepositories}