import { Prisma } from "@prisma/client";
import { productsOrderItemsDatas, productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";

abstract class IProductOrderRepositories
{
    abstract registerOrder(datas: productsOrdersDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract registerOrderItems(datas: productsOrderItemsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
   //abstract getOrdersByUser(id_user_fk: string): Promise<productsOrdersDatas[]>
   abstract getOrderItemsByOrder(id_order_fk: string): Promise<productsOrderItemsDatas[]>
   abstract setOrderStatus(id_order: string, status:"completed"|"cancelled"):Promise<any>
}
export {IProductOrderRepositories}