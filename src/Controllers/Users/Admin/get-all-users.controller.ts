import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { GetAllUsersService } from "../../../Services/Users/Admin/get-all-users.service";

const repository: PrismaAdminRepositories = new PrismaAdminRepositories(prismaService)
const service: GetAllUsersService = new GetAllUsersService(repository)

class GetAllUsersController
{
     static async getAllUsers(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const result = await service.getAllUsers()
            return res.status(result.statusCode).json(result)
                
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}    
        }
    }
}
export{GetAllUsersController}