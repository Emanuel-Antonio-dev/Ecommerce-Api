import { Prisma, PrismaClient} from "../../../../generated/prisma";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class RegisterCartsService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories
    ){}

    async registerCart(datas: cartDatas, items: cartItemsDatas[])
    {
        try {
            if(!datas.id_user_fk && !datas.id_guest_cart)
            {
                throw new HttpException(false, 400, "Informe todos os campos")
            }
            if(items.length === 0)
            {
                throw new HttpException(false, 400, "Adicione pelo menos 1 item no carrinho");
            }
            if(datas.id_user_fk && !await this.userRepository.getUsersProfileDatas(datas.id_user_fk, "client"))
            {
                throw new HttpException(false, 404, "Não conseguimos encontrar este usuário");
            }
            const transaction = await this.prisma.$transaction(async (tx) => {
                let cart
                if(datas.id_user_fk)
                {
                    cart = await this.repository.getCartDatas(tx, undefined, datas.id_user_fk);
                }
                else
                {
                    cart = await tx.carts.findFirst({where:{id_guest_cart: datas.id_guest_cart, status:"active"}})
                }           
                if(!cart)
                {
                    cart = await this.repository.registerCart(datas, tx);
                }
                for(const item of items)
                    {
                        const availableProduct = await tx.products.findFirst({where:{id_product: item.id_product_fk}})
                        if(!availableProduct)
                        {
                            throw new HttpException(false, 404, "O Produto selecionado não existe")
                        }
                        if(!availableProduct.available || availableProduct.available_stock < item.quantity)
                        {
                            throw new HttpException(false, 400, `O produto ${availableProduct.name} esta sem estoque suficiente.`)
                        }
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
                return await this.repository.getCartDatas(tx, cart.id_cart, undefined);
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
    async migrateGuestCartToUser(id_guest_cart: string, id_user: string) {
        return this.prisma.$transaction(async (tx) => {
            const guestCart = await tx.carts.findFirst({
                where: { id_guest_cart, status: "active" },
                include: { cart_items: true },
            });
            
            if (!guestCart) return null;

            let userCartExists = await tx.carts.findFirst({
                where: { id_user_fk: id_user, status: "active" },
                include: { cart_items: true },
            });
            
            if (!userCartExists)
            {
                userCartExists = await tx.carts.update({
                    where: { id_cart: guestCart.id_cart },
                    include: { cart_items: true },
                    data: { id_user_fk: id_user, id_guest_cart: null },
                });
            }
            else
            {
                for (const item of guestCart.cart_items)
                {
                    const existingItem = await tx.cartItems.findFirst({
                        where: { id_cart_fk: userCartExists.id_cart, id_product_fk: item.id_product_fk },
                    });
                    if (existingItem)
                    {
                        await tx.cartItems.update({
                            where: { id_cart_item: existingItem.id_cart_item },
                            data: { quantity: existingItem.quantity + item.quantity },
                        });
                    }
                    else
                    {
                        await this.repository.registerCartItems(
                        {
                            id_cart_fk: userCartExists.id_cart,
                            id_product_fk: item.id_product_fk,
                            quantity: item.quantity,
                            price: item.price,
                        },
                        tx
                    );
                }
            }
            await tx.carts.delete({ where: { id_cart: guestCart.id_cart } });
        }
        return await tx.carts.findFirst({
            where: { id_user_fk: id_user, status: "active" },
            include: { cart_items: true },
        });
    });
}

}
export {RegisterCartsService}