import { productsOrderItemsDatas, productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";

class RegisterProductOrderService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly repository: PrismaOrdersRepositories,
        private readonly cartRepository: PrismaCartRepositories
    ){}

    async registerOrder(datas: productsOrdersDatas)
    {
        try
        {
            return await this.prisma.$transaction(async(tx)=>{
                const cart = await this.prisma.carts.findFirst({
                    where:{id_user_fk: datas.id_user_fk, status:"active"},
                    include:{cart_items: {include:{product:true}}}
                })
                if(!cart)
                {
                    throw new HttpException(false, 404, "Carrinho não encontrado ou já processado.")
                }
                for(const item of cart.cart_items)
                {
                    if(!item.product.available || item.product.available_stock < item.quantity)
                    {
                        throw new HttpException(false, 400, `O produto ${item.product.name} esta sem estoque suficiente.`)
                    }
                }
                const order = await this.repository.registerOrder({
                id_user_fk: datas.id_user_fk,
                total_amount: cart.cart_items.reduce(
                    (sum, item) => sum + Number(item.price) * item.quantity,
                    0
                ),
                status:"pending",
                payment_method: datas.payment_method,
            }, tx);
            const orderResume = await this.repository.getOrderItemsByOrder(order.id_order)

            for (const item of cart.cart_items)
            {
                const orderItems: productsOrderItemsDatas ={
                    id_order_fk: order.id_order,
                    id_product_fk: item.id_product_fk,
                    quantity: item.quantity,
                    price: item.price
                }
                await this.repository.registerOrderItems(orderItems, tx)
                await tx.products.update({
                    where:{id_product: item.id_product_fk},
                    data:{
                        available_stock: {
                            decrement: item.quantity
                        }
                    }
                })
                await tx.carts.update({
                    where:{id_cart: cart.id_cart},
                    data:{status: "ordered"}
                })
            }
            await tx.carts.deleteMany({where:{id_cart: cart.id_cart}})
            return ({success: true, statusCode: 201, message: "O seu pedido foi processado com sucesso!", datas: {
                order,
                orderResume
            }})
            })

        } catch (error: any)
        {
            if (error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{RegisterProductOrderService}