import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterGeneralProductService } from "../../../Services/Products/GeneralProducts/register-product.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { ProductsTagsDatas } from "../../../interfaces/Products/Tags/interface";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const categoryRepository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const imagesRepository: PrismaProductsImages = new PrismaProductsImages(prismaService)
const brandRepository: PrismaProductsBrands = new PrismaProductsBrands(prismaService)
const tagRepository: PrismaProductsTagsRepositories = new PrismaProductsTagsRepositories(prismaService)
const service: RegisterGeneralProductService = new RegisterGeneralProductService(prismaService,repository, imagesRepository, categoryRepository, brandRepository, tagRepository)


class RegisterProductsController
{
    static async register(req: Request, res: Response): Promise<Response | any>
    {
        try{
            const tagIds: number[] = Array.isArray(req.body.id_tags)? req.body.id_tags: [req.body.id_tags];
            const productDatas: generalProductsDatas =
            {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            additional_info: req.body.aditional_info,
            id_category_fk: req.body.id_category_fk,
            id_brand_fk: req.body.id_brand_fk,
            stock: req.body.stock,
            id_tags: tagIds
        }

        const files = req.files as {[filedname: string]: Express.Multer.File[]};
        const imagesDatas = {
            image_url: files?.["ProductImages"].map(file => file.path) || []
        }
        const result = await service.registerProducts({
            name: productDatas.name,
            description: productDatas.description,
            additional_info: productDatas.additional_info,
            id_category_fk: productDatas.id_category_fk,
            id_brand_fk: productDatas.id_brand_fk,
            price: productDatas.price,
            stock: productDatas.stock,
            image_url: imagesDatas.image_url,
            id_tags: productDatas.id_tags
        });
        return res.status(result.statusCode).json(result);
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{RegisterProductsController}