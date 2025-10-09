import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { RegisterProductCategoryService } from "../../../Services/Products/Categories/register-product-category.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
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
            if(!productCategoryDatas.name || !productCategoryDatas.description)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const result = await service.register(productCategoryDatas)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {RegisterProductCategoryController}