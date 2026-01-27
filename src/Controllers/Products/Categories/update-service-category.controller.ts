import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { EditProductCategoryService } from "../../../Services/Products/Categories/edit-product-category.service";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const service: EditProductCategoryService = new EditProductCategoryService(repository)

class EditProductCategoryController
{
    static async editProduct(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = Number(req.params.id_category)
            const productCategoryDatas: productsCategoriesDatas = {
                name: req.body.name,
                description: req.body.description
            }
            const result = await service.editCategory(id_category, productCategoryDatas)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {EditProductCategoryController}