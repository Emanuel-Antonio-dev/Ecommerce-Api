import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterGeneralProductService } from "../../../Services/Products/GeneralProducts/register-product.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const categoryRepository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const imagesRepository: PrismaProductsImages = new PrismaProductsImages(prismaService)
const service: RegisterGeneralProductService = new RegisterGeneralProductService(prismaService,repository, imagesRepository, categoryRepository)

class RegisterProductsController
{
    static async register(req: Request, res: Response): Promise<Response | any>
    {
        try{
        const productDatas: generalProductsDatas =
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            aditional_info: req.body.aditional_info,
            id_category_fk: req.body.id_category_fk,
            stock: req.body.stock,
        }
        const files = req.files as {[filedname: string]: Express.Multer.File[]};
        const imagesDatas = {
            image_url: files?.["ProductImages"].map(file => file.path) || []
        }
        const result = await service.registerProducts({
            name: productDatas.name,
            description: productDatas.description,
            aditional_info: productDatas.aditional_info,
            id_category_fk: parseInt(productDatas.id_category_fk.toString()),
            price: productDatas.price,
            stock: productDatas.stock,
            image_url: imagesDatas.image_url
        });
        return res.status(result.statusCode).json(result);
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{RegisterProductsController}