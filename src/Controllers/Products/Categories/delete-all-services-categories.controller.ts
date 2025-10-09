import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { DeleteAllProductsCategoriesService } from "../../../Services/Products/Categories/delete-all-products-categories.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
const service: DeleteAllProductsCategoriesService = new DeleteAllProductsCategoriesService(repository)

class DeleteAllProductsCategoriesController
{
    static async deleteAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const categoriesDeleted = await service.deleteAllServiceCategories()
            if(!categoriesDeleted.success)
            {
                return res.status(categoriesDeleted.statusCode).json(categoriesDeleted)
            }
            return res.status(categoriesDeleted.statusCode).json(categoriesDeleted)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {DeleteAllProductsCategoriesController}