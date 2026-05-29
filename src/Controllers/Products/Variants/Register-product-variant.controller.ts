import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { RegisterProductVariantService } from '../../../Services/Products/Variants/register-product-variant.service';
import { PrismaProductVariantsRepository } from "../../../Repositories/Products/Variants/Prisma/PrismaVaiantsRepositories";
import { ProductVariantDatas } from "../../../interfaces/Products/Variants/interface";

const productRepository = new PrismaGeneralProductsRepositories(prismaService);
const variantsRepository = new PrismaProductVariantsRepository(prismaService);
const service = new RegisterProductVariantService(productRepository, variantsRepository);

class RegisterProductVariantController {
  static async register(req: Request, res: Response): Promise<Response> {
    try {
      const data:ProductVariantDatas = {
        id_product_fk: Number(req.body.id_product_fk),
        sku: req.body.sku,
        color: req.body.color || null,
        size: req.body.size || null,
        stock: Number(req.body.stock),
        price: Number(req.body.price)
      };
      const result = await service.execute(data);

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!"
      });
    }
  }
}

export { RegisterProductVariantController };
