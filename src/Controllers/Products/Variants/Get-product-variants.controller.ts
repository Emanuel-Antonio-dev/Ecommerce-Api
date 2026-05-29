import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { GetProductVariantsService } from '../../../Services/Products/Variants/get-product-variant.service';
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductVariantsRepository } from '../../../Repositories/Products/Variants/Prisma/PrismaVaiantsRepositories';

const productRepository = new PrismaGeneralProductsRepositories(prismaService);
const variantsRepository = new PrismaProductVariantsRepository(prismaService);
const service = new GetProductVariantsService(productRepository, variantsRepository);

class GetProductVariantsController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id_product } = req.params;

      const result = await service.execute(Number(id_product));

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

export { GetProductVariantsController };
