import { IProductVariantsRepository } from '../../../Repositories/Products/Variants/IProduct-variants-repositories';
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";

export class DecrementVariantStockService {
  constructor(
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(id_variant: number, quantity: number) {
    try {
      if (!id_variant || quantity <= 0) {
        throw new HttpException(false, 400, "Dados inválidos");
      }

      const variant = await this.variantsRepository.findById(id_variant);

      if (!variant) {
        throw new HttpException(false, 404, "Variante não encontrada");
      }

      if (variant.stock < quantity) {
        throw new HttpException(
          false,
          400,
          `Stock insuficiente. Disponível: ${variant.stock}`
        );
      }

      await this.variantsRepository.decrementStock(id_variant, quantity);

      return {
        success: true,
        statusCode: 200,
        message: "Stock reduzido com sucesso",
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