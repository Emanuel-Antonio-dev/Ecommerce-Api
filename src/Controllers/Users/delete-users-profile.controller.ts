import { Response, Request } from "express";
import { UsersDeleteProfileService } from "../../Services/Users/delete-user-profile.service";
import { prismaService } from "../../lib/prisma.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";

const repository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const service: UsersDeleteProfileService = new UsersDeleteProfileService(prismaService,repository, accountRepository)

class UsersDeleteProfileController
{
    static async delete(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_user = Number(req.params.id_user)
            const result = await service.deleteProfile(id_user)
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