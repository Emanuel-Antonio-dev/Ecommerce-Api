import { Prisma } from "../../../../generated/prisma/client";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";

abstract class ICartRepositories
{
    abstract registerCart(datas: cartDatas, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract getCartItems( id_cart?: number, id_user_fk?: number, tx?: Omit<Prisma.TransactionClient, "$transaction"> ):Promise<any>
    abstract registerCartItems(datas: cartItemsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract editCartItems(id_cart_item: number, data: Partial<cartItemsDatas>):Promise<any>
    abstract deleteCartItem(id_cart: number):Promise<any>
    abstract deleteAllCartItems(id_cart: number):Promise<any>
    abstract getAllCartItems(id_cart: number):Promise<any>
}
export{ICartRepositories}