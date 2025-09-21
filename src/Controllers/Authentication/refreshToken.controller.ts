import { Response, Request } from "express";
import { PrismaClient, Prisma} from "../../../generated/prisma";
import { JwtOperations } from "../../Common/Utils/JwtOperations/operations";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

const prisma: PrismaClient = new PrismaClient()
const authenticationRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)

class RefreshTokenController
{
    static async newAcessToken(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {refreshToken} = req.cookies
            if (!refreshToken)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Parâmetros de autenticação não fornecido"})
            }
            const storagedToken = await authenticationRepositories.findToken(refreshToken, "refreshToken")
            if (!storagedToken || !storagedToken.authentication_details || storagedToken.authentication_details?.used)
            {
              return res.status(401).json({success: false, statusCode: 401, message:"Verificação de sessão inválida ou parâmetros de autenticação já utilizado"})
            }
            if(storagedToken.authentication_details.expireIn < new Date())
            {
                return res.status(401).json({ success: false,statusCode:401,message: "Sessão expirada." });
            }
            const decodedToken = JwtOperations.VerifyToken(refreshToken)
            if (!decodedToken)
            {
                return res.status(401).json({success: false, statusCode: 401, message:"Sessão inválida"})
            }
            const newAccessToken = JwtOperations.GenerateToken({userClaims: decodedToken.userClaims, id_user: decodedToken.id_user}, "access")
            
            await authenticationRepositories.updateToken(refreshToken, true)
            return res.status(200).json({success: true, statusCode: 200, accessToken: newAccessToken})
        } catch (error:any)
        {
            if (error.name === "TokenExpiredError") {
            return res.status(401).json({
              statusCode: 401,
              success: false, 
              message: "Sua sessão está expirada. Faça login novamente." 
            });
          }
          if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
              statusCode: 401,
              success: false, 
              message: "Sessão inválida." 
            });
          }
          
          console.error('RefreshToken error:', error);
          return res.status(500).json({ 
              statusCode: 500,
            success: false, 
            message: "Ocorreu um erro, tente novamente." 
          });
        }
    }
}
export{RefreshTokenController}