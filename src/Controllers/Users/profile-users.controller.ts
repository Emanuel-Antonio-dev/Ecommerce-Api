import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { UsersProfileService } from "../../Services/Users/profile-user.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";
const usersRepositories: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const userProfileService: UsersProfileService = new UsersProfileService(usersRepositories)


class UsersProfileController
{
    static async profile(req: RequestWithCredentials, res: Response):Promise<Response | any>
    {
        try
        {
            const id_user = Number(req.params.id_user)
            const authUser = req.credentials
            
            if (!authUser)
            {
                return res.status(401).json({ success: false, statusCode:401,message: "Perfil autenticado" });
            }
            if (authUser.user_type === "client" && Number(id_user) !== authUser.sub) {
                return res.status(403).json({success: false, statusCode:403,message: "Você só pode acessar o seu próprio perfil"});
            }
            const userProfileResult = await userProfileService.profile(id_user, {sub: authUser.sub, user_type: authUser.user_type as "admin" | "client"})
            return res.status(userProfileResult.statusCode).json(userProfileResult)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {UsersProfileController}