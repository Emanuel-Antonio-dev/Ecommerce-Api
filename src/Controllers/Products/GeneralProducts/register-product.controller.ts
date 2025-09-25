import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { RegisterGeneralProductService } from "../../../Services/Products/GeneralProducts/register-general-product.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";

const prisma: PrismaClient = new PrismaClient();
const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const imagesRepository: PrismaProductsImages = new PrismaProductsImages(prisma)
const service: RegisterGeneralProductService = new RegisterGeneralProductService(prisma,repository, imagesRepository)

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
        if (
            !productDatas.name
            || !productDatas.description
            || !productDatas.aditional_info
            || !productDatas.id_category_fk
            || !productDatas.price
            || !productDatas.stock
            || !imagesDatas.image_url)
        {
            return res.status(400).json({ success: false, statusCode:400, message: "Informe todos os campossss" });
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
        if (!result.success)
        {
            return res.status(result.statusCode).json(result);
        }
        return res.status(result.statusCode).json(result);
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{RegisterProductsController}