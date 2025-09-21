import { Response, Request } from "express";
import { PrismaClient, Prisma} from "../../../generated/prisma";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

const prisma: PrismaClient = new PrismaClient()
const authenticationRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)

class LogoutController
{
    static async logout(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {refreshToken} = req.cookies
            if (!refreshToken)
            {
              return res.status(401).json({success: false, message: "Ocorreu um erro ao terminar esta sessão."})
            }
            res.clearCookie("refreshToken")
            await authenticationRepositories.deleteToken(refreshToken)
            return res.status(200).json({success: true, message: "Sessão terminada com sucesso, volte sempre!"})
        } catch (error: any)
        {
          console.error('RefreshToken error:', error);
          return res.status(500).json({ 
            success: false,
            message: "Ocorreu um erro, tente novamente." 
          });
        }
    }
}
export{LogoutController}