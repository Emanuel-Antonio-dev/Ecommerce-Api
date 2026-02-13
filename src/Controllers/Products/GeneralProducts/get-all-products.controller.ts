import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { GetAllProductsDatasService } from "../../../Services/Products/GeneralProducts/get-all-products-datas.service";

const repository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const getAllProductsService: GetAllProductsDatasService = new GetAllProductsDatasService(repository)

class GetAllProductDatasController
{
    static async getAll(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const{limit, page} = req.query
            const result = await getAllProductsService.getAll(Number(page), Number(limit))
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetAllProductDatasController}