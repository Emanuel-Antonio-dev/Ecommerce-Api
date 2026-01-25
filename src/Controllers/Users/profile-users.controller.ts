import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { UsersProfileService } from "../../Services/Users/profile-user.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";

const usersRepositories: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const userProfileService: UsersProfileService = new UsersProfileService(usersRepositories)

class UsersProfileController
{
    static async profile(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {id_user} = req.params
            const user_type = req.query.user_type as "admin" | "client" | undefined
            const userProfileResult = await userProfileService.profile(id_user as string, user_type)
            return res.status(userProfileResult.statusCode).json(userProfileResult)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {UsersProfileController}