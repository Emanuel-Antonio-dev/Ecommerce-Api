import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class GetCartDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories
    ) {}

    async getCartDatas(id_user_fk: number)
    {
        try {
            if(!id_user_fk)
            {
                throw new HttpException(false, 400, "Informe o usuário")
            }
            if(!await this.userRepository.getUsersProfileDatas(id_user_fk, "client"))
            {
                throw new HttpException(false, 404, "Não conseguimos encontrar este usuário")
            }
            const cartDatas = await this.repository.getCartItems(undefined,id_user_fk);

            if (!cartDatas) {
                throw new HttpException(
                    false,
                    404,
                    "Você ainda não possui um carrinho, adicione o seu primeiro item."
                );
            }
            const items = cartDatas.cart_items.map((item: any) => ({
                        id_cart_item: item.id_cart_item,
                        quantity: item.quantity,
                        price: item.price,
                        created_at: item.created_at,
                        updated_at: item.updated_at,
                        product_datas: item.product,
                    }));
                    const total_amount = items.reduce((acc:any, item: any) => {
                        const price = typeof item.price === "string" ? parseFloat(item.price) : item.price;
                        return acc + Number(price) * item.quantity;
                    }, 0);
            
              const formattedCart = {
                id_cart: cartDatas.id_cart,
                status: cartDatas.status,
                created_at: cartDatas.created_at,
                updated_at: cartDatas.updated_at,
                user_datas: cartDatas.user_details,
                items,
                total_amount, // ✅ adicionado aqui
              };
            return {
                success: true,
                statusCode: 200,
                message: "Carrinho encontrado com sucesso.",
                datas: formattedCart
            };

        } catch (error: any) {
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
export { GetCartDatasService };
