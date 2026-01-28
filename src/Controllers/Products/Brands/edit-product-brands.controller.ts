import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { EditProductBrandService } from "../../../Services/Products/Brands/edit-product-brand.service";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";

const repository: PrismaProductsBrands = new PrismaProductsBrands(prismaService)
const service: EditProductBrandService = new EditProductBrandService(repository)

class EditProductBrandController
{
    static async edit(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_brand = Number(req.params.id_brand)
            const productBrandDatas: Partial<productBrandsDatas> = {
                name: req.body.name
            }
            const result = await service.editBrand(id_brand, productBrandDatas)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {EditProductBrandController}