import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { GetAllProductsBrandsService } from "../../../Services/Products/Brands/get-all-products-brands.service";
import { GetAllTagsPerProductService } from "../../../Services/Products/Tags/get-all-tags-per-product.service";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

const repository: PrismaProductsTagsRepositories = new PrismaProductsTagsRepositories(prismaService)
const generalProductRepository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const service: GetAllTagsPerProductService = new GetAllTagsPerProductService(repository, generalProductRepository)

class GetAllTagsPerProductController
{
    static async getAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product_fk = Number(req.params.id_product_fk)
            const result = await service.getAllTagsPerProductService(id_product_fk)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetAllTagsPerProductController}