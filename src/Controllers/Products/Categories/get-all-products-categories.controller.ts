import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { GetAllProductsCategoriesService } from "../../../Services/Products/Categories/get-all-services-categories.service";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const getAllProductsCategories: GetAllProductsCategoriesService = new GetAllProductsCategoriesService(repository)

class GetAllProductsCategoriesController
{
    static async getAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const{limit, page} =req.query
            const result = await getAllProductsCategories.getAllCategories(Number(page),Number(limit))
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetAllProductsCategoriesController}