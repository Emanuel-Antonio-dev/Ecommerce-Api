import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IWishlistRepositories } from "../../../Repositories/Products/Wishlist/I-wishlist-repository";
import { IGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/general-products-repositoires";
import { cacheService } from "../../../lib/cache.service";

const WISHLIST_LIMIT = 100; // impede wishlist abusiva

class AddToWishlistService {
  constructor(
    private readonly repository: IWishlistRepositories,
    private readonly productRepository: IGeneralProductsRepositories
  ) {}

  async execute(id_user_fk: number, id_product_fk: number) {
    try {
      if (!id_user_fk || !id_product_fk) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const product = await this.productRepository.getProductDatas(
        { action: "GetOnlyBasicsDatas" },
        id_product_fk
      );

      if (!product) {
        throw new HttpException(false, 404, "Produto não encontrado");
      }

      if (!product.available) {
        throw new HttpException(false, 400, "Produto indisponível");
      }

      const alreadyInWishlist = await this.repository.findItem(id_user_fk, id_product_fk);
      if (alreadyInWishlist) {
        throw new HttpException(false, 409, "Produto já está na sua wishlist");
      }

      const total = await this.repository.countByUser(id_user_fk);
      if (total >= WISHLIST_LIMIT) {
        throw new HttpException(
          false,
          400,
          `A lista de desejos atingiu o limite de ${WISHLIST_LIMIT} itens`
        );
      }

      const item = await this.repository.add({ id_user_fk, id_product_fk });
      if (!item) {
        throw new HttpException(false, 500, "Ocorreu um erro ao adicionar produto à lista de desejos");
      }
      cacheService.invalidateWishlist(id_user_fk);
      return {
        success: true,
        statusCode: 201,
        message: "Produto adicionado à lista de desejos com sucesso",
        datas: item,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { AddToWishlistService };
