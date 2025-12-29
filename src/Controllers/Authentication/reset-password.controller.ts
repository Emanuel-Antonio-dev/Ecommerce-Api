import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { ResetPasswordService } from "../../Services/Auth/ResetPassword/reset-password.service"
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories"

const prisma: PrismaClient = new PrismaClient()
const acountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prisma)
const authenticationRepository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)
const resetPasswordService: ResetPasswordService = new ResetPasswordService(acountRepository, authenticationRepository)

class ResetPasswordController
{
    static async resetPassword(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {newPassword} = req.body
            const {authorization} = req.query as {authorization: string }

            if (!newPassword || !authorization)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe todos os campos."})
            }
            const resetPassword = await resetPasswordService.ResetPassword(newPassword, authorization)
            if (!resetPassword.success)
            {
                return res.status(resetPassword.statusCode).json(resetPassword)
            }
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