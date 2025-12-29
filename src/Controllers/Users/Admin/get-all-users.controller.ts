import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaAdminRepositories } from "../../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { GetAllUsersService } from "../../../Services/Users/Admin/get-all-users.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaAdminRepositories = new PrismaAdminRepositories(prisma)
const service: GetAllUsersService = new GetAllUsersService(repository)

class GetAllUsersController
{
     static async getAllUsers(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const result = await service.getAllUsers()
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
export{GetAllUsersController}