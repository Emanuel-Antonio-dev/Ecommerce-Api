import { Prisma, PrismaClient} from "../../../../generated/prisma";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Cart/Prisma/PrismaCartRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";

class RegisterCartsService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaCartRepositories
    ){}

    async registerCart(datas: cartDatas, items: cartItemsDatas[]): Promise<any>
    {
        try {
            if(!datas.id_user_fk)
            {
                throw new HttpException(false, 400, "Informe todos o usuario")
            }
            if(items.length === 0)
            {
                throw new HttpException(false, 400, "Adicione pelo menos 1 item no carrinho");
            }
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
                    else
                    {
                        await this.repository.registerCartItems(item, tx);
                    }
                }
                return await this.repository.getCartDatas(cart.id_cart, undefined);
            })
            return {
                success: true,
                statusCode: 201,
                message: "Carrinho atualizado/criado com sucesso.",
                datas: transaction
            };
        } catch (error: any)
        {
            if (error instanceof HttpException) {
                return {
                    success: false,
                    statusCode: error.statusCode,
                    message: error.message
                };
            }

            console.error(error);
            return {
                success: false,
                statusCode: 500,
                message: "Ocorreu um erro interno, tente novamente!"
            };    
        }

    }
}
export {RegisterCartsService}