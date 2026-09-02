import { JwtOperations } from "../../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";
import { PrismaAuthenticationsRepositories } from "../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

class RefreshTokenService
{
    constructor(private readonly repository: PrismaAuthenticationsRepositories){}
    async getNewAcessToken(refreshToken: string)
    {
        try
        {
            if (!refreshToken)
            {
                return {success: false, statusCode: 400, message:"Parâmetros de autenticação não fornecido"}
            }
            const storagedToken = await this.repository.findToken(refreshToken, "refreshToken")
            if (!storagedToken || !storagedToken.authentication_details || storagedToken.authentication_details?.used)
            {
              return {success: false, statusCode: 401, message:"Verificação de sessão inválida ou parâmetros de autenticação já utilizado"}
            }
            if(storagedToken.authentication_details.expireIn < new Date())
            {
                return { success: false,statusCode:401,message: "Sessão expirada." }
            }
            const decodedToken = JwtOperations.VerifyRefreshToken(refreshToken)
            if (!decodedToken)
            {
                return {success: false, statusCode: 401, message:"Sessão inválida"}
            }
            const newAccessToken = JwtOperations.GenerateAccessToken({sub: decodedToken.sub, user_type: decodedToken.user_type, admin_role: decodedToken.admin_role, account_id: decodedToken.account_id})
            
            await this.repository.updateToken(refreshToken, true)
            return {success: true, statusCode: 200, datas: {accessToken: newAccessToken}}
        } catch (error:any)
        {
            if (error.name === "TokenExpiredError") {
            return {
              statusCode: 401,
              success: false, 
              message: "Sua sessão está expirada. Faça login novamente." 
            }
          }
          if (error.name === "JsonWebTokenError") {
            return {
              statusCode: 401,
              success: false, 
              message: "Sessão inválida." 
            }
          }
          
          console.error('RefreshToken error:', error);
          return { 
              statusCode: 500,
            success: false, 
            message: "Ocorreu um erro, tente novamente." 
          }
        }
    }
}
export{RefreshTokenService}