import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { DeleteProductCategoryService } from "../../../Services/Products/Categories/delete-product-category.service";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const service: DeleteProductCategoryService = new DeleteProductCategoryService(repository)


class DeleteProductCategoryController
{
    static async delete(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = Number(req.params.id_category)
            const result = await service.deleteServiceCategory(id_category)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {DeleteProductCategoryController}