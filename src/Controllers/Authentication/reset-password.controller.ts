import { Request, Response } from "express"
import { prismaService } from "../../lib/prisma.service"
import { ResetPasswordService } from "../../Services/Auth/ResetPassword/reset-password.service"
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories"

const acountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const authenticationRepository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const resetPasswordService: ResetPasswordService = new ResetPasswordService(acountRepository, authenticationRepository)

class ResetPasswordController
{
    static async resetPassword(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {newPassword} = req.body
            const {authorization} = req.query as {authorization: string }
            const resetPassword = await resetPasswordService.ResetPassword(newPassword, authorization)
            return res.status(resetPassword.statusCode).json(resetPassword)
        }
        catch(error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500,  message: "Estamos tentando resolver este problema, tente novamente"})
        }
    }
}
export {ResetPasswordController}