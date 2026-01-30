import { Request, Response } from "express";
import { RegisterProductsTagsService } from "../../../Services/Products/Tags/register-product-tag.service";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { ProductsTagsDatas } from "../../../interfaces/Products/Tags/interface";
import { prismaService } from "../../../lib/prisma.service";

const tagRepository = new PrismaProductsTagsRepositories(prismaService);
const tagService = new RegisterProductsTagsService(tagRepository);

class RegisterProductsTagsController {
  static async register(req: Request, res: Response) {
    try {
      let tagsDatas: ProductsTagsDatas[] = [];

      // Se veio um array
      if (Array.isArray(req.body.tags)) {
        tagsDatas = req.body.tags
          .filter((t: any) => t && t.tag) // filtra objetos inválidos
          .map((t: any) => ({ tag: Array.isArray(t.tag) ? t.tag : [t.tag] })); // normaliza para array
      } 
      // Se veio apenas um objeto
      else if (req.body.tag) {
        tagsDatas = [{ tag: Array.isArray(req.body.tag) ? req.body.tag : [req.body.tag] }];
      } 
      // Nenhum dado enviado
      else {
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Informe pelo menos uma tag.",
        });
      }

      const result = await tagService.register(tagsDatas);
      return res.status(result.statusCode).json(result);

    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente.",
      });
    }
  }
}

export { RegisterProductsTagsController };
