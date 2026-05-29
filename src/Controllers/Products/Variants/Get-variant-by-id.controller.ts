import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductVariantsRepository } from '../../../Repositories/Products/Variants/Prisma/PrismaVaiantsRepositories';
import { GetVariantByIdService } from "../../../Services/Products/Variants/get-product-variant-by-id.service";

const variantsRepository = new PrismaProductVariantsRepository(prismaService);
const service = new GetVariantByIdService(variantsRepository);

class GetVariantByIdController {
  static async get(req: Request, res: Response): Promise<Response> {
    try {
      const { id_variant } = req.params;

      const result = await service.execute(Number(id_variant));
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

export { GetVariantByIdController };
