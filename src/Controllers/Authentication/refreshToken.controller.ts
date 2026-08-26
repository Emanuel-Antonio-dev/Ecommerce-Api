import { Response, Request } from "express";
import { prismaService } from "../../lib/prisma.service";
import { JwtOperations } from "../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
const authenticationRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prismaService)
const REFRESH_TOKEN_TTL = 7 * 24 * 60 * 60 * 1000

class RefreshTokenController
{
    static async newAcessToken(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const { refreshToken } = req.cookies
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
            const decodedToken = JwtOperations.VerifyRefreshToken(refreshToken)
            if (!decodedToken)
            {
              return res.status(401).json({success: false, statusCode: 401, message:"Sessão inválida"})
            }
            const { iat, exp, ...userClaims } = decodedToken

            const newAccessToken = JwtOperations.GenerateAccessToken({sub: Number(userClaims.sub), user_type: userClaims.user_type})
            const newRefreshToken = JwtOperations.GenerateRefreshToken(userClaims)

            const accountId = storagedToken.authentication_details.id_account_fk || storagedToken.authentication_details.account_details?.id_account
            if(!accountId)
            {
              return res.status(401).json({success: false, statusCode: 401, message:"Sessão inválida"})
            }

            await prismaService.$transaction(async (tx) => {
              await tx.authentications.delete({ 
                where: { id_authentication: storagedToken.authentication_details.id_authentication } 
              })
              //await tx.tokens.delete({ where: { token: refreshToken } })

              const newAuth = await authenticationRepositories.initAuthenticationDatas({
                type: "by_token",
                used: false,
                expireIn: new Date(Date.now() + REFRESH_TOKEN_TTL),
                id_account_fk: accountId,
                context: "refresh_token"
              }, tx)

              await authenticationRepositories.registerToken({
                token: newRefreshToken,
                token_type: "refreshToken",
                id_authentication: newAuth.id_authentication
              }, tx)
            }, {timeout: 10000})

            const isProduction = process.env.NODE_ENV === "production"
            const cookieOptions: any = {
              httpOnly: true,
              secure: isProduction,
              maxAge: REFRESH_TOKEN_TTL,
              path: "/"
            }
            if (isProduction) {
              cookieOptions.sameSite = "none"
            }
            
            res.cookie("refreshToken", newRefreshToken, cookieOptions)
            res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: isProduction,
                sameSite: isProduction ? "none" : "lax",
                maxAge: 15 * 60 * 1000
             }
            )

            return res.status(200).json({success: true, statusCode: 200})
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