import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

import { UsersProfileService } from "../../Services/Users/profile-user.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";

const prisma: PrismaClient = new PrismaClient()
const usersRepositories: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const userProfileService: UsersProfileService = new UsersProfileService(usersRepositories)

class UsersProfileController
{
    static async profile(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {id_user} = req.params
            if(!id_user)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const userProfileResult = await userProfileService.profile(id_user)
            if(!userProfileResult.success)
            {
                return res.status(userProfileResult.statusCode).json(userProfileResult)
            }
            return res.status(userProfileResult.statusCode).json(userProfileResult)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {UsersProfileController}