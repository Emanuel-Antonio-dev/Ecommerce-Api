import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class EditCartItemsService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories

    ) {}

    async editCartItems(id_user_fk: string, datas: Partial<cartItemsDatas>)
    {
        try {
            if(!await this.userRepository.getUsersProfileDatas(id_user_fk, "client"))
            {
                throw new HttpException(false, 404, "Não conseguimos encontrar este usuário")
            }
            const cartDatas = await this.repository.getCartItems(undefined,id_user_fk);

            if (!cartDatas || !cartDatas.items[0].id_cart_item) {
                throw new HttpException(
                    false,
                    404,
                    "Você ainda não possui um carrinho, adicione o seu primeiro item."
                );
            }
            const cartIetemsToUpdate: Partial<cartItemsDatas> = {};
            
            if (datas.quantity)
            {
                if(datas.quantity > cartDatas.items[0].quantity)
                {
                    throw new HttpException(false, 400, "Este produto esta sem estoque suficiente.");
                }
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
            const updatedCartItem = await this.repository.editCartItems(cartDatas.items[0].id_cart_item, cartIetemsToUpdate);
            if (!updatedCartItem) {
                throw new HttpException(false, 500, "Ocorreu um erro ao atualizar o item do carrinho.");
            }
            return {
                success: true,
                statusCode: 200,
                message: "Item do carrinho atualizado com sucesso."
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
export { EditCartItemsService };
