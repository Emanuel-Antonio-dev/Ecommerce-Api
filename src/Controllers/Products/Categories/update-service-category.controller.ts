import { Request, Response } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { EditProductCategoryService } from "../../../Services/Products/Categories/edit-product-category.service";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
const service: EditProductCategoryService = new EditProductCategoryService(repository)

class EditProductCategoryController
{
    static async editProduct(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = parseInt(req.params.id_category, 10)
            if(!id_category)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe a categoria"})
            }
            const productCategoryDatas: productsCategoriesDatas = {
                name: req.body.name,
                description: req.body.description
            }
            if(!productCategoryDatas.name || !productCategoryDatas.description)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos para atualização"})
            }

            const result = await service.editCategory(id_category, productCategoryDatas)
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
export {EditProductCategoryController}