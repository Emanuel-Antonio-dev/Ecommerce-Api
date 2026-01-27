import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { GetProductsCategoryDatasService } from "../../../Services/Products/Categories/get-product-category.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { GetAllProductsCategoriesService } from "../../../Services/Products/Categories/find-all-services-categories.service";

const repository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const getProductCategory: GetProductsCategoryDatasService = new GetProductsCategoryDatasService(repository)
const getAllProductsCategories: GetAllProductsCategoriesService = new GetAllProductsCategoriesService(repository)

class GetProductsCategoriesController
{
    static async find(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = Number(req.params.id_category)
            const result = await getProductCategory.getCategory(id_category)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }

    static async findAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const result = await getAllProductsCategories.getAllCategories()
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }    
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetProductsCategoriesController}