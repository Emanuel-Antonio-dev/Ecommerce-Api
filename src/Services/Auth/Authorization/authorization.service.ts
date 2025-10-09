import { JwtOperations } from "../../../Utils/JwtOperations/operations";
import dotenv from "dotenv"
dotenv.config({quiet: true})

class AuthorizationService
{
    static ValidateToken(token: string)
    {
        try
        {
            const isValidToken = JwtOperations.VerifyToken(token)
            if (!isValidToken)
            {
                return { statusCode: 401, success: false, message: "Ocorreu um erro ao verificar este recurso." };
            }
            return {success: true, statusCode: 200, info: isValidToken}
        } catch (error: any)
        {
            console.error(error)
            if (error.name === "TokenExpiredError") {
                return {statusCode:401, success: false, message: "Sua sessão está expirada, faça login novamente" }
            }
            if (error.name === "JsonWebTokenError") {
                return {statusCode:401, success: false, message: "Ocorreu um erro ao verificar este recurso." }
            }
            return { statusCode: 400, success: false, message: "Ocorreu um erro, por favor tente novamente" };
        }
    }
}
export{AuthorizationService}