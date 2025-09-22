import { Request, Response } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { GetProductsCategoryDatasService } from "../../../Services/Products/Categories/get-product-category.service";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { GetAllProductsCategoriesService } from "../../../Services/Products/Categories/find-all-services-categories.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
const getProductCategory: GetProductsCategoryDatasService = new GetProductsCategoryDatasService(repository)
const getAllProductsCategories: GetAllProductsCategoriesService = new GetAllProductsCategoriesService(repository)

class GetProductsCategoriesController
{
    static async find(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_category = parseInt(req.params.id_category, 10)
            if(!id_category)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const result = await getProductCategory.getCategory(id_category)
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
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}    
        }
    }
}
export {GetProductsCategoriesController}