import { Response, Request } from "express";
import { UsersDeleteProfileService } from "../../Services/Users/delete-user-profile.service";
import { PrismaClient } from "../../../generated/prisma";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prisma)
const service: UsersDeleteProfileService = new UsersDeleteProfileService(prisma,repository, accountRepository)

class UsersDeleteProfileController
{
    static async deleteProfile(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {id_user} = req.params
            if (!id_user)
            {
                return res.json({success: false, statusCode: 400, message: "Informe todos os campos"})
            }
            const result = await service.deleteProfile(id_user)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
            } catch (error: any)
            {
                console.log(error)
                return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
            }
        }
}
export{UsersDeleteProfileController}