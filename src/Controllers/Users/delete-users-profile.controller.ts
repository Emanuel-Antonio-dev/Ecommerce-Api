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
    static async deleteProfile(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {id_user} = req.params
            const result = await service.deleteProfile(id_user as string)
            return res.status(result.statusCode).json(result)
            } catch (error: any)
            {
                console.log(error)
                return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
            }
        }
}
export{UsersDeleteProfileController}