import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";

class DeleteAllCartItemsDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories
    ) {}

    async deleteAllCartItems(id_cart: number)
    {
        try {
            if(!id_cart)
            {
                throw new HttpException(false, 400, "Informe o carrinho")
            }
            if(!await this.repository.getCartItems(undefined, id_cart))
            {
                throw new HttpException(false, 404, "Este carrinho não existe")
            }
            const cartDatas = await this.repository.getAllCartItems(id_cart);
            if(cartDatas.length === 0) {
                throw new HttpException(
                    true,
                    404,
                    "Não possui itens no carrinho para serem deletados."
                );
            }
            const cartDeleted = await this.repository.deleteAllCartItems(id_cart);
            if (!cartDeleted) {
                throw new HttpException(false, 500, "Ocorreu um erro ao deletar os itens do carrinho.");
            }
            return {
                success: true,
                statusCode: 200,
                message: "Itens removidos com sucesso."
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
export { DeleteAllCartItemsDatasService };
