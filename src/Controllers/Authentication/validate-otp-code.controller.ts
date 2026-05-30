import { Request, Response } from "express"
import { prismaService } from "../../lib/prisma.service"
import { ValidateOtpCodeService } from "../../Services/Auth/Authentication/2FA/validate-otp-code.service"
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories"

const repository: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const service: ValidateOtpCodeService = new ValidateOtpCodeService(repository,prismaService)

class ValidateOtpCodeController
{
    static async validate(req:Request, res: Response): Promise<Response>
    {
        try
        {
            const {otp_code, email, phone_number} = req.body
            const result = await service.validateOtpCode(otp_code, email, phone_number)
            return res.status(result.statusCode).json(result)
        }
        catch(error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, message: "Estamos tentando resolver este problema, tente novamente"})
        }
    }
}
export {ValidateOtpCodeController}