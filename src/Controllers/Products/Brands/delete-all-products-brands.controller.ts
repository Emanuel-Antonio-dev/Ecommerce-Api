import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { DeleteAllProductsBrandsService } from "../../../Services/Products/Brands/delete-all-products-brands.service";

const repository: PrismaProductsBrands = new PrismaProductsBrands(prismaService)
const service: DeleteAllProductsBrandsService = new DeleteAllProductsBrandsService(repository)

class DeleteAllProductsBrandsController
{
    static async deleteAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const brandsDeleted = await service.deleteProductsBrands()
            return res.status(brandsDeleted.statusCode).json(brandsDeleted)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {DeleteAllProductsBrandsController}