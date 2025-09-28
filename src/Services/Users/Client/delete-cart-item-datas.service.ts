import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaCartRepositories } from "../../../Repositories/Cart/Prisma/PrismaCartRepositories";

class DeleteCartItemDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories
    ) {}

    async deleteCartItems(id_user_fk: string): Promise<any> {
        try {
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
