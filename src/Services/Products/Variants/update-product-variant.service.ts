import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IProductVariantsRepository } from '../../../Repositories/Products/Variants/IProduct-variants-repositories';

export class UpdateVariantStockService {
  constructor(
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(id_variant: number, stock: number) {
    try {
      if (!id_variant) {
        throw new HttpException(false, 400, "Informe a variante");
      }
      const existsVariant = await this.variantsRepository.findById(id_variant);
      if (!existsVariant) {
        throw new HttpException(false, 404, "Variante não encontrada");
      }
      if (stock < 0) {
        throw new HttpException(false, 400, "Stock inválido");
      }
      const variant = await this.variantsRepository.updateStock(
        id_variant,
        stock
      );
      return {
        success: true,
        statusCode: 200,
        message: "Stock atualizado com sucesso",
        datas: variant,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message,
        };
      }

      console.error(error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente.",
      };
    }
  }
}