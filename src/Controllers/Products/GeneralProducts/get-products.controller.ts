import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { GetProductDatasService } from "../../../Services/Products/GeneralProducts/get-product-data.service";
import { GetAllProductsDatasService } from "../../../Services/Products/GeneralProducts/get-all-products-datas.service";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const service: GetProductDatasService = new GetProductDatasService(repository)
const getAllProductsService: GetAllProductsDatasService = new GetAllProductsDatasService(repository)

class GetProductDatasController
{
    static async getProductDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_product = Number(req.params.id_product)
            const result = await service.getProductDatas(id_product)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}      
        }
    }
        static async getAllProductsDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const result = await getAllProductsService.getAll()
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
export {GetProductDatasController}