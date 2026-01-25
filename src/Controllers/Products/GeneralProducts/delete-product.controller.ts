import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { DeleteProductDataService } from "../../../Services/Products/GeneralProducts/delete-product-data.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const service: DeleteProductDataService = new DeleteProductDataService(repository)

class DeleteProductsController
{
    static async deleteProductDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_product = Number(req.params.id_product) 
            const result = await service.deleteProductData(id_product)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}      
        }
    }
}
export {DeleteProductsController}