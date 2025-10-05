import { Request, Response } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { GetAllUsersService } from "../../../Services/Users/Admin/get-all-users.service";
import { GetAllOrdersService } from "../../../Services/Users/Admin/get-all-orders.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaAdminRepositories = new PrismaAdminRepositories(prisma)
const service: GetAllOrdersService = new GetAllOrdersService(repository)

class GetAllOrdersController
{
    static async getAllOrders(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const result = await service.getAllOrders()
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
export{GetAllOrdersController}