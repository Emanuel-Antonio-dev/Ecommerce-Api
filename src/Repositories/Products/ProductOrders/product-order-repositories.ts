import { Prisma } from "../../../../generated/prisma/client";
import { productsOrderItemsDatas, productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";

abstract class IProductOrderRepositories
{
    abstract registerOrder(datas: productsOrdersDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract registerOrderItems(datas: productsOrderItemsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
   //abstract getOrdersByUser(id_user_fk: number): Promise<productsOrdersDatas[]>
   abstract getOrderItemsByOrder(id_order_fk: number): Promise<productsOrderItemsDatas[]>
   abstract setOrderStatus(id_order: number, status:"completed"|"cancelled"):Promise<any>
}
export {IProductOrderRepositories}