import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { RegisterProductBrandService } from "../../../Services/Products/Brands/register-product-brands.service";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";

const repository:  PrismaProductsBrands= new PrismaProductsBrands(prismaService)
const service: RegisterProductBrandService = new RegisterProductBrandService(repository)

class RegisterProductBrandController
{
    static async register(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const productBrandDatas: productBrandsDatas = {
                name: req.body.name
            }
            const result = await service.register(productBrandDatas)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {RegisterProductBrandController}