import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { EditProductDatasService } from "../../../Services/Products/GeneralProducts/edit-product-datas.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const categoryRepository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const brandRepository: PrismaProductsBrands = new PrismaProductsBrands(prismaService)
const service: EditProductDatasService = new EditProductDatasService(repository, categoryRepository, brandRepository)

class EditProductDatasController
{
    static async edit(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product = Number(req.params.id_product)
            const productDatas: Partial<generalProductsDatas> = {
                name: req.body.name,
                description: req.body.description,
                additional_info: req.body.aditional_info,
                price: Number(req.body.price),
                available: Boolean(req.body.available),
                image_url: req.file?.path,
                available_stock: Number(req.body.available_stock),
                id_brand_fk: Number(req.body.id_brand_fk),
                id_category_fk: Number(req.body.id_category_fk),
                weight: parseFloat(req.body.weight),
                is_featured: Boolean(req.body.is_featured)
            }
            const result = await service.editProductDatas(id_product,productDatas)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export { EditProductDatasController}