import { PrismaClient, Prisma} from "../../../../generated/prisma";
import { ICartRepositories } from "../cart-repositories";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { nanoid } from "nanoid";

class PrismaCartRepositories implements ICartRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async registerCart(datas: cartDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        return await this.prisma.carts.create({
            data:{
                id_cart: nanoid(),
                status:"active",
                id_user_fk: datas.id_user_fk
            }
        })
    }
    async registerCartItems(datas: cartItemsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ??  this.prisma
        return await client.cartItems.create({
            data:{
                id_cart_item: nanoid(),
                price: datas.price,
                quantity: datas.quantity,
                id_cart_fk: datas.id_cart_fk,
                id_product_fk: datas.id_product_fk
            }
        })
    }
    async getCartDatas(id_cart?: string, id_user_fk?: string): Promise<any>
    {
        if(id_cart)
        {
            return await this.prisma.carts.findUnique({where:{id_cart:id_cart}, include:{cart_items:{include:{product:true}}, user_details: true}})    
        }
        if(id_user_fk)
        {
            return await this.prisma.carts.findFirst({where:{id_user_fk:id_user_fk, status:"active"}, include:{cart_items:{include:{product: true}}, user_details: true}})    
        }
        return null;
    }
    async editCartItems(id_cart_item: string, data: Partial<cartItemsDatas>): Promise<any>
    {
        return await this.prisma.cartItems.update({
            where:{id_cart_item:id_cart_item},
            data:{
                ...data
            }
        })
    }
    async deleteCartItem(id_cart_item: string): Promise<any>
    {
        return await this.prisma.cartItems.delete({where:{id_cart_item:id_cart_item}})
    }
    async deleteAllCartItems(id_cart: string): Promise<any>
    {
        return await this.prisma.cartItems.deleteMany({where:{id_cart_fk:id_cart}})
    }
    async getAllCartItems(id_cart: string): Promise<any>
    {
        return await this.prisma.cartItems.findMany({where:{id_cart_fk:id_cart}, include:{product:true, cart:true}})
    }
}
export {PrismaCartRepositories}