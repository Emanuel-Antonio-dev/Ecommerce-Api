import { Prisma, PrismaClient} from "../../../../generated/prisma";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Cart/Prisma/PrismaCartRepositories";

class RegisterCartsService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaCartRepositories
    ){}

    async registerCart(datas: cartDatas, items: cartItemsDatas[]): Promise<any>
    {
        const transaction = await this.prisma.$transaction(async (tx) => {
            let cart = await this.repository.getCartDatas(undefined, datas.id_user_fk);
            
            if(!cart)
            {
                cart = await this.repository.registerCart(datas, tx);
            }
            for(const item of items)
            {
                item.id_cart_fk = cart.id_cart
                const existingItem = await tx.cartItems.findFirst({
                    where:{
                        id_cart_fk: cart.id_cart,
                        id_product_fk: item.id_product_fk
                    }
                })
                if(existingItem)
                {
                    const newQuantity = existingItem.quantity + item.quantity;
                    await this.repository.editCartItems(existingItem.id_cart_item, {quantity: newQuantity});
                    continue;
                }
                await this.repository.registerCartItems(item, tx);
            }
            const cartDatas = await this.repository.getCartDatas(cart.id_cart, undefined);
            return cartDatas;
        })
        return {
            success: true,
            status: 201,
            message: "Carrinho atualizado/criado com sucesso.",
            datas: transaction
        };

    }
}
export {RegisterCartsService}