import { Prisma } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ProductVariantDatas } from "../../../interfaces/Products/Variants/interface";
import { IGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/general-products-repositoires";
import { IProductVariantsRepository } from "../../../Repositories/Products/Variants/IProduct-variants-repositories";
import { cacheService } from "../../../lib/cache.service";

export class RegisterProductVariantService {
  constructor(
    private readonly productRepository: IGeneralProductsRepositories,
    private readonly variantsRepository: IProductVariantsRepository
  ) {}

  async execute(datas: ProductVariantDatas, tx?:Omit<Prisma.TransactionClient, "$transaction">) {
    try {
      if (!datas.id_product_fk || !datas.sku) {
        throw new HttpException(false, 400, "Produto e SKU são obrigatórios");
      }
      const existsProduct = await this.productRepository.getProductDatas(
        { action: "GetOnlyBasicsDatas" },
        datas.id_product_fk
      );
      if (!existsProduct) {
        throw new HttpException(false, 404, "Produto não encontrado");
      }
      if (datas.stock < 0) {
        throw new HttpException(false, 400, "Stock inválido");
      }
      const variant = await this.variantsRepository.register(datas, tx);
      if(!variant){
        throw new HttpException(false, 500, `Ocorreu um erro ao criar esta variante para o produto ${existsProduct.name}`);
      }
      cacheService.invalidateProduct(datas.id_product_fk);
      return {
        success: true,
        statusCode: 201,
        message: `Variante do produto ${existsProduct.name} criada com sucesso`,
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