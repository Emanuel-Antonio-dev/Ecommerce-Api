import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class EditMyCartDatasService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories

    ) {}

    async editCartDatas(id_user_fk: string, datas: Partial<cartItemsDatas>)
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
            const cartIetemsToUpdate: Partial<cartItemsDatas> = {};
            
            if (datas.quantity)
            {
                cartIetemsToUpdate.quantity = datas.quantity;
            }
            if (datas.price)
            {
                cartIetemsToUpdate.price = datas.price;
            }
            if (Object.keys(cartIetemsToUpdate).length === 0)
            {
                throw new HttpException(false, 400, "Nenhum dado foi fornecido para atualização.");
            }
            const updatedCartItem = await this.repository.editCartItems(datas.id_cart_item!, cartIetemsToUpdate);
            if (!updatedCartItem) {
                throw new HttpException(false, 500, "Ocorreu um erro ao atualizar o item do carrinho.");
            }
            const updatedCartDatas = await this.repository.getCartDatas(cartDatas.id_cart, undefined);
            if (!updatedCartDatas) {
                throw new HttpException(false, 500, "Ocorreu um erro ao recuperar os dados atualizados do carrinho.");
            }
            return {
                success: true,
                status: 200,
                message: "Item do carrinho atualizado com sucesso.",
                datas: updatedCartDatas
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
export { EditMyCartDatasService };
