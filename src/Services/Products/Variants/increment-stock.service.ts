import { IProductVariantsRepository } from '../../../Repositories/Products/Variants/IProduct-variants-repositories';
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { cacheService } from "../../../lib/cache.service";
export class IncrementVariantStockService {
  constructor(
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(id_variant: number, quantity: number) {
    try {
        if(!id_variant || quantity <= 0) {
            throw new HttpException(false, 400, "Dados inválidos");
        }

        const variant = await this.variantsRepository.findById(id_variant);

        if (!variant) {
            throw new HttpException(false, 404, "Variante não encontrada");
        }
        await this.variantsRepository.incrementStock(id_variant, quantity);
        cacheService.invalidateVariant(id_variant, variant.id_product_fk);

      return {
        success: true,
        statusCode: 200,
        message: "Stock restaurado com sucesso",
      };
    } catch (error: any) {
      console.error(error);

      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente.",
      };
    }
  }
}