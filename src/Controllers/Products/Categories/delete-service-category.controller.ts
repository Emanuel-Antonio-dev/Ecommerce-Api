import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { DeleteProductCategoryService } from "../../../Services/Products/Categories/delete-product-category.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
const service: DeleteProductCategoryService = new DeleteProductCategoryService(repository)


class DeleteProductCategoryController
{
    static async delete(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = parseInt(req.params.id_category, 10)
            if(!id_category)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const result = await service.deleteServiceCategory(id_category)
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
export {DeleteProductCategoryController}