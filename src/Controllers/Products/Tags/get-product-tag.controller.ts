import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { GetProductTagsService } from "../../../Services/Products/Tags/get-product-tag.service";

const repository = new PrismaProductsTagsRepositories(prismaService);
const service = new GetProductTagsService(repository);

class GetProductTagsController
{
  static async get(req: Request, res: Response):Promise<Response>
  {
    try
    {
        const {tag} = req.params;
        const result = await service.getProductTag(tag as string);
        return res.status(result.statusCode).json(result);
    }
    catch (error: any)
    {
        console.log(error)
        return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
    }
  }
}

export { GetProductTagsController };
