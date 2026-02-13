import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { GetAllUsersService } from "../../../Services/Users/Admin/get-all-users.service";

const repository: PrismaAdminRepositories = new PrismaAdminRepositories(prismaService)
const service: GetAllUsersService = new GetAllUsersService(repository)

class GetAllUsersController
{
     static async getAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {page, limit} = req.query
            const result = await service.getAllUsers(Number(page), Number(limit))
            return res.status(result.statusCode).json(result)
                
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})  
        }
    }
}
export{GetAllUsersController}