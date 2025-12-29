import { Response, Request } from "express";
import { PrismaClient} from "@prisma/client";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
import { RefreshTokenService } from "../../Services/Auth/Authentication/refreshToken.service";

const prisma: PrismaClient = new PrismaClient()
const authenticationRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)
const service: RefreshTokenService = new RefreshTokenService(authenticationRepositories)
class RefreshTokenController
{
    static async newAcessToken(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
          const {refreshToken} = req.cookies
          const result = await service.getNewAcessToken(refreshToken)
          if(!result.success)
          {
            return res.status(result.statusCode).json(result)
          }
          return res.status(result.statusCode).json(result)
        } catch (error:any)
        { 
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