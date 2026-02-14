import { Response, Request } from "express";
import { UsersDeleteProfileService } from "../../Services/Users/delete-user-profile.service";
import { prismaService } from "../../lib/prisma.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const repository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const service: UsersDeleteProfileService = new UsersDeleteProfileService(prismaService,repository, accountRepository)

class UsersDeleteProfileController
{
    static async delete(req: RequestWithCredentials, res: Response):Promise<Response | any>
    {
        try
        {
            const id_user = Number(req.params.id_user)
            const authUser = req.credentials;
            if (!authUser)
            {
                return res.status(401).json({success: false, statusCode:401, message: "Perfil não autenticado." });
            }
            if (authUser.user_type === "client" && id_user !== authUser.sub)
            {
                return res.status(403).json({success: false, statusCode:403,message: "Você só pode deletar o seu próprio perfil"});
            }
            const result = await service.deleteProfile(id_user,{sub: authUser.sub, user_type: authUser.user_type as "admin" | "client"})
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
        }
        }
}
export{UsersDeleteProfileController}