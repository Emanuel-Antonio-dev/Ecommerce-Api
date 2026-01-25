import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterProductCategoryService } from "../../../Services/Products/Categories/register-product-category.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const service: RegisterProductCategoryService = new RegisterProductCategoryService(repository)

class RegisterProductCategoryController
{
    static async register(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const productCategoryDatas: productsCategoriesDatas = {
                name: req.body.name,
                description: req.body.description
            }
            const result = await service.register(productCategoryDatas)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {RegisterProductCategoryController}