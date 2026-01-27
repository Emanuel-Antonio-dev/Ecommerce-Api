import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { GetAllOrdersService } from "../../../Services/Users/Admin/get-all-orders.service";

const repository: PrismaAdminRepositories = new PrismaAdminRepositories(prismaService)
const service: GetAllOrdersService = new GetAllOrdersService(repository)

class GetAllOrdersController
{
    static async getAllOrders(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const result = await service.getAllOrders()
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}) 
        }
    }
}
export{GetAllOrdersController}