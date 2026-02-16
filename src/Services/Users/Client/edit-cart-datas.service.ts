import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class EditCartItemsService {
    constructor(
        private readonly repository: PrismaCartRepositories,
        private readonly userRepository: PrismaUsersRepositories
    ) {}

    async editCartItems(id_user_fk: number, datas: Partial<cartItemsDatas>) {
        try {
            if (!id_user_fk) {
                throw new HttpException(false, 400, "Informe o usuário");
            }

            // Verifica se o usuário existe
            const userExists = await this.userRepository.getUsersProfileDatas(id_user_fk, "client");
            if (!userExists) {
                throw new HttpException(false, 404, "Não conseguimos encontrar este usuário");
            }

            // Busca o carrinho e seus itens
            const cartDatas = await this.repository.getCartItems(undefined, id_user_fk);
            if (!cartDatas || !cartDatas.items || cartDatas.items.length === 0) {
                throw new HttpException(false, 404, "Você ainda não possui um carrinho, adicione o seu primeiro item.");
            }

            // O usuário precisa informar qual item deseja atualizar
            if (!datas.id_cart_item) {
                throw new HttpException(false, 400, "Informe o item do carrinho que deseja atualizar.");
            }

            // Busca o item correto do carrinho
            const itemToUpdate = cartDatas.items.find((item: any)  => item.id_cart_item === datas.id_cart_item);
            if (!itemToUpdate) {
                throw new HttpException(false, 404, "Item do carrinho não encontrado.");
            }
            const cartItemUpdate: Partial<cartItemsDatas> = {};

            // Validação da quantidade com estoque real
            if (datas.quantity !== undefined) {
                if (datas.quantity <= 0)
                {
                    throw new HttpException(false, 400, "Quantidade inválida.");
                }
                if (datas.quantity > itemToUpdate.product_datas.available_stock) {
                    throw new HttpException(
                        false,
                        400,
                        `O produto ${itemToUpdate.product_datas.name} está sem estoque suficiente. Quantidade disponível: ${itemToUpdate.product_datas.available_stock}`
                    );
                }
                cartItemUpdate.quantity = datas.quantity;
            }

            if (Object.keys(cartItemUpdate).length === 0) {
                throw new HttpException(false, 400, "Nenhum dado válido foi fornecido para atualização.");
            }

            // Atualiza o item
            const updatedCartItem = await this.repository.editCartItems(itemToUpdate.id_cart_item, cartItemUpdate);
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
