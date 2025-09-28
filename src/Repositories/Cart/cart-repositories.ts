import { Prisma } from "../../../generated/prisma";
import { cartDatas, cartItemsDatas } from "../../interfaces/Products/Cart/interface";

abstract class ICartRepositories
{
    abstract registerCart(datas: cartDatas, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract getCartDatas(id_cart: string):Promise<any>
    abstract registerCartItems(datas: cartItemsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract editCartItems(id_cart_item: string, data: Partial<cartItemsDatas>):Promise<any>
    abstract deleteCartItem(id_cart: string):Promise<any>
    abstract deleteAllCartItems(id_cart: string):Promise<any>
    abstract getAllCartItems(id_cart: string):Promise<any>
}
export{ICartRepositories}