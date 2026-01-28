import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { GetProductsBrandDatasService } from "../../../Services/Products/Brands/get-product-brand.service";

const repository:  PrismaProductsBrands= new PrismaProductsBrands(prismaService)
const service: GetProductsBrandDatasService = new GetProductsBrandDatasService(repository)

class GetProductsCategoriesController
{
    static async get(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_brand = Number(req.params.id_brand)
            const result = await service.getBrand(id_brand)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetProductsCategoriesController}