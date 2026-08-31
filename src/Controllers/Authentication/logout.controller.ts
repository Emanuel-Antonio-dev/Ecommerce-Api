import { Response, Request } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

const authenticationRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
class LogoutController
{
    static async logout(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {refreshToken} = req.cookies
            if (!refreshToken)
            {
              return res.status(401).json({success: false, statusCode:401, message: "Ocorreu um erro ao terminar esta sessão."})
            }
            res.clearCookie("refreshToken")
            res.clearCookie("accessToken")
            await authenticationRepositories.deleteToken(refreshToken)
            return res.status(200).json({success: true, statusCode:200,message: "Sessão terminada com sucesso, volte sempre!"})
        } catch (error: any)
        {
          console.error('RefreshToken error:', error);
          return res.status(500).json({
            statusCode:500,
            success: false,
            message: "Ocorreu um erro, tente novamente." 
          });
        }
    }
}
export{LogoutController}