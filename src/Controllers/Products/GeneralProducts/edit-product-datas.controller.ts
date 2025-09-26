import { Request, Response } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { EditProductDatasService } from "../../../Services/Products/GeneralProducts/edit-product-datas.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const categoryRepository: PrismaProductsCategories = new PrismaProductsCategories(prisma)
const service: EditProductDatasService = new EditProductDatasService(repository, categoryRepository)

class EditProductDatasController
{
    static async editProduct(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product = parseInt(req.params.id_product, 10)
            if(!id_product)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const productDatas: generalProductsDatas = {
                name: req.body.name,
                description: req.body.description,
                aditional_info: req.body.aditional_info,
                price: req.body.price,
                available: req.body.available,
                image_url: req.file?.path,
                stock: req.body.stock,
                id_category_fk: req.body.id_category_fk
            }
            if(
                !productDatas.name
                && !productDatas.description
                && !productDatas.aditional_info
                && !productDatas.available
                && !productDatas.image_url
                && !productDatas.stock
                && !productDatas.price
                && !productDatas.id_category_fk
            )
            {
                return res.status(400).json({success: false, statusCode: 400, messgae:"Informe pelo menos um campo para atualização"})
            }
            const result = await service.editProductDatas(id_product,productDatas)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export { EditProductDatasController}