import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { GetProductDatasService } from "../../../Services/Products/GeneralProducts/get-product-data.service";
import { GetAllProductsDatasService } from "../../../Services/Products/GeneralProducts/get-all-products-datas.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const service: GetProductDatasService = new GetProductDatasService(repository)
const getAllProductsService: GetAllProductsDatasService = new GetAllProductsDatasService(repository)

class GetProductDatasController
{
    static async getProductDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_product = parseInt(req.params.id_product, 10) 
            if(!id_product)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe o produto"})
            }
            const result = await service.getProductDatas(id_product)
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