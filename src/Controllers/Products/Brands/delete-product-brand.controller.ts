import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { DeleteProductBrandService } from "../../../Services/Products/Brands/delete-product-brand.service";

const repository:  PrismaProductsBrands= new PrismaProductsBrands(prismaService)
const service: DeleteProductBrandService = new DeleteProductBrandService(repository)

class DeleteProductBrandController
{
    static async delete(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_brand = Number(req.params.id_brand)
            const result = await service.deleteProductBrand(id_brand)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {DeleteProductBrandController}