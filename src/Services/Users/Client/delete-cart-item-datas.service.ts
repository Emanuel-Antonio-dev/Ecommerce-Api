import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class DeleteCartItemDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories
    ) {}

    async deleteCartItems(id_user_fk: number)
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

            if (!cartDatas || cartDatas.items.length===0) {
                throw new HttpException(
                    false,
                    404,
                    "Você ainda não possui items no carrinho, adicione os seus primeiros item."
                );
            }
            const cartDeleted = await this.repository.deleteCartItem(cartDatas.items[0].id_cart_item);
            if (!cartDeleted) {
                throw new HttpException(false, 500, "Ocorreu um erro ao deletar o item do carrinho.");
            }
            return {
                success: true,
                statusCode: 200,
                message: "Item removido com sucesso."
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
export { DeleteCartItemDatasService };
