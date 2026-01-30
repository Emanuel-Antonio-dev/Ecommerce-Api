import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { GetProductsBrandDatasService } from "../../../Services/Products/Brands/get-product-brand.service";

const repository:  PrismaProductsBrands= new PrismaProductsBrands(prismaService)
const service: GetProductsBrandDatasService = new GetProductsBrandDatasService(repository)

class GetProductBrandController
{
    static async get(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const name = req.params.name
            const result = await service.getBrand(name as string)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetProductBrandController}