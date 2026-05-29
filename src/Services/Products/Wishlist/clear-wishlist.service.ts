import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IWishlistRepositories } from "../../../Repositories/Products/Wishlist/I-wishlist-repository";

class ClearWishlistService {
  constructor(private readonly repository: IWishlistRepositories) {}

  async execute(id_user_fk: number) {
    try {
      if (!id_user_fk) {
        throw new HttpException(false, 400, "Informe o usuário");
      }

      const total = await this.repository.countByUser(id_user_fk);
      if (total === 0) {
        throw new HttpException(false, 404, "A lista de desejos já está vazia");
      }

      await this.repository.clearByUser(id_user_fk);

      return {
        success: true,
        statusCode: 200,
        message: "Lista de desejos limpa com sucesso",
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

export { ClearWishlistService };
