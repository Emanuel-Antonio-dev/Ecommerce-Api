import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaCartRepositories } from "../../../Repositories/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class DeleteCartItemDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories
    ) {}

    async deleteCartItems(id_user_fk: string)
    {
        try {
            if(!await this.userRepository.getUsersProfileDatas(id_user_fk, "client"))
            {
                throw new HttpException(false, 404, "Não conseguimos encontrar este usuário")
            }
            const cartDatas = await this.repository.getCartDatas(undefined, id_user_fk);

            if (!cartDatas) {
                throw new HttpException(
                    false,
                    404,
                    "Você ainda não possui um carrinho, adicione o seu primeiro item."
                );
            }
            const cartDeleted = await this.repository.deleteCartItem(cartDatas.id_cart_item);
            if (!cartDeleted) {
                throw new HttpException(false, 500, "Ocorreu um erro ao deletar o item do carrinho.");
            }
            return {
                success: true,
                status: 200,
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
