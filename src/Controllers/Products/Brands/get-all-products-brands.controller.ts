import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { GetAllProductsBrandsService } from "../../../Services/Products/Brands/get-all-products-brands.service";

const repository:  PrismaProductsBrands= new PrismaProductsBrands(prismaService)
const service: GetAllProductsBrandsService = new GetAllProductsBrandsService(repository)

class GetAllProductsBrandsController
{
    static async getAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const{limit, page} =req.query
            const result = await service.getAllBrands({page: Number(page) || 1,limit: Number(limit) || 50})
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetAllProductsBrandsController}