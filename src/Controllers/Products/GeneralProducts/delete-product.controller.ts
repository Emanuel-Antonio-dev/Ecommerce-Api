import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { DeleteProductDataService } from "../../../Services/Products/GeneralProducts/delete-product-data.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const service: DeleteProductDataService = new DeleteProductDataService(repository)

class DeleteProductsController
{
    static async deleteProductDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_product = parseInt(req.params.id_product, 10) 
            if(!id_product)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe o produto"})
            }
            const result = await service.deleteProductData(id_product)
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
export {DeleteProductsController}