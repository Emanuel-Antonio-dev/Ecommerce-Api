import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { ICartRepositories } from "../cart-repositories";
import { cartDatas, cartItemsDatas } from "../../../../interfaces/Products/Cart/interface";

class PrismaCartRepositories implements ICartRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async registerCart(datas: cartDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        return await this.prisma.carts.create({
            data:{
                status:"active",
                id_guest_cart: datas.id_guest_cart ?? null,
                id_user_fk: datas.id_user_fk ?? null
            }
        })
    }
    async registerCartItems(datas: cartItemsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ??  this.prisma
        return await client.cartItems.create({
            data:{
                price: datas.price!,
                quantity: datas.quantity,
                id_cart_fk: datas.id_cart_fk,
                id_product_fk: datas.id_product_fk
            }
        })
    }
    async getCartItems(id_cart?:number, id_user_fk?:number, tx?: Omit<Prisma.TransactionClient, "$transaction"> ): Promise<any>
    {
        const client = tx ?? this.prisma
        const where = id_cart ? {id_cart: id_cart} : {id_user_fk: id_user_fk}
        const datas = await client.carts.findFirst({where: {...where, status:"active"}, include:{cart_items:{include:{product:true}}, user_details: {
            select: {
                username: true,
                first_name: true,
                last_name: true,
                user_type: true,
                created_at: true
            }
        }}})    
        
        if(!datas)
        {
            return null
        }
        return {
            id_cart: datas?.id_cart,
            id_user_fk: datas?.id_user_fk,
            status: datas?.status,
            created_at: datas?.created_at,
            updated_at: datas?.updated_at,
            user_datas: datas?.user_details,
            items: datas?.cart_items.map(item => ({
                id_cart_item: item.id_cart_item,
                quantity: item.quantity,
                price: item.price,
                created_at: item.created_at,
                updated_at: item.updated_at,
                product_datas: item.product
            }))
        }
    }
    async editCartItems(id_cart_item:number, data: Partial<cartItemsDatas>): Promise<any>
    {
        return await this.prisma.cartItems.update({
            where:{id_cart_item:id_cart_item},
            data:{
                ...data
            }
        })
    }
    async deleteCartItem(id_cart_item:number): Promise<any>
    {
        return await this.prisma.cartItems.delete({where:{id_cart_item:id_cart_item}})
    }
    async deleteAllCartItems(id_cart:number): Promise<any>
    {
        return await this.prisma.cartItems.deleteMany({where:{id_cart_fk:id_cart}})
    }
    async getAllCartItems(id_cart:number): Promise<any>
    {
        return await this.prisma.cartItems.findMany({where:{id_cart_fk:id_cart}, include:{product:true, cart:true}})
    }
}
export {PrismaCartRepositories}