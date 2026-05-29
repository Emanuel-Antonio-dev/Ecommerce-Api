import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IWishlistRepositories } from "../../../Repositories/Products/Wishlist/I-wishlist-repository";

class RemoveFromWishlistService {
  constructor(private readonly repository: IWishlistRepositories) {}

  async execute(id_user_fk: number, id_product_fk: number) {
    try {
      if (!id_user_fk || !id_product_fk) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const item = await this.repository.findItem(id_user_fk, id_product_fk);
      if (!item) {
        throw new HttpException(false, 404, "Item não encontrado na lista de desejos");
      }

      await this.repository.remove(id_user_fk, id_product_fk);

      return {
        success: true,
        statusCode: 200,
        message: "Produto removido da lista de desejos",
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { RemoveFromWishlistService };
