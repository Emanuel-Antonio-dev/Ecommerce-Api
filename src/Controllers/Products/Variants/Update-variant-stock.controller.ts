import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductVariantsRepository } from '../../../Repositories/Products/Variants/Prisma/PrismaVaiantsRepositories';
import { UpdateVariantStockService } from "../../../Services/Products/Variants/update-product-variant.service";

const variantsRepository = new PrismaProductVariantsRepository(prismaService);
const service = new UpdateVariantStockService(variantsRepository);

class UpdateVariantStockController {
  static async updateStock(req: Request, res: Response): Promise<Response> {
    try {
      const { id_variant } = req.params;
      const { stock } = req.body;

      const result = await service.execute(Number(id_variant), stock);

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

export { UpdateVariantStockController };
