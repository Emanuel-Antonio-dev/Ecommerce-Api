import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterGeneralProductService } from "../../../Services/Products/GeneralProducts/register-product.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { PrismaProductVariantsRepository } from "../../../Repositories/Products/Variants/Prisma/PrismaVaiantsRepositories";
import { RegisterProductVariantService } from "../../../Services/Products/Variants/register-product-variant.service";
import { ProductVariantDatas } from "../../../interfaces/Products/Variants/interface";

const repository         = new PrismaGeneralProductsRepositories(prismaService);
const categoryRepository = new PrismaProductsCategories(prismaService);
const imagesRepository   = new PrismaProductsImages(prismaService);
const brandRepository    = new PrismaProductsBrands(prismaService);
const tagRepository      = new PrismaProductsTagsRepositories(prismaService);
const variantsRepository = new PrismaProductVariantsRepository(prismaService);
const variantsService    = new RegisterProductVariantService(repository, variantsRepository);
const service            = new RegisterGeneralProductService(prismaService, repository, imagesRepository, categoryRepository, brandRepository, tagRepository, variantsService);

class RegisterProductsController {
  static async register(req: Request, res: Response): Promise<Response> {
    try {
      const tagIds: number[] = Array.isArray(req.body.id_tags)
        ? req.body.id_tags.map(Number)
        : req.body.id_tags
        ? (req.body.id_tags as string).split(",").map(Number)
        : [];

      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const imagePaths = files?.["ProductImages"]?.map((file) => file.path) || [];

      const result = await service.registerProducts({
        // ── dados do produto ──────────────────────────────────────────
        name:            req.body.name,
        description:     req.body.description,
        additional_info: req.body.additional_info,
        price:           parseFloat(req.body.price),
        weight:          parseFloat(req.body.weight),
        id_category_fk:  Number(req.body.id_category_fk),
        id_brand_fk:     Number(req.body.id_brand_fk),
        is_featured:     Boolean(req.body.is_featured),
        id_tags:         tagIds,
        image_url:       imagePaths,

        // ── dados da variante inicial ─────────────────────────────────
        color:           req.body.color,
        size:            req.body.size,
        stock:           req.body.stock ? parseInt(req.body.stock) : undefined,
        available_stock: req.body.available_stock ? parseInt(req.body.available_stock) : undefined,
      });

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { RegisterProductsController };