import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { DeleteAllProductsCategoriesService } from "../../../Services/Products/Categories/delete-all-products-categories.service";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const service: DeleteAllProductsCategoriesService = new DeleteAllProductsCategoriesService(repository)

class DeleteAllProductsCategoriesController
{
    static async deleteAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const categoriesDeleted = await service.deleteAllServiceCategories()
            return res.status(categoriesDeleted.statusCode).json(categoriesDeleted)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {DeleteAllProductsCategoriesController}