import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { EditProductDatasService } from "../../../Services/Products/GeneralProducts/edit-product-datas.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const categoryRepository: PrismaProductsCategories = new PrismaProductsCategories(prismaService)
const service: EditProductDatasService = new EditProductDatasService(repository, categoryRepository)

class EditProductDatasController
{
    static async editProduct(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product = Number(req.params.id_product)
            const productDatas: generalProductsDatas = {
                name: req.body.name,
                description: req.body.description,
                additional_info: req.body.aditional_info,
                price: req.body.price,
                available: req.body.available,
                image_url: req.file?.path,
                stock: req.body.stock,
                id_brand_fk: req.body.id_brand_fk,
                id_category_fk: req.body.id_category_fk
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