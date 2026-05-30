import { AuthorizationService } from "../../../Services/Auth/Authorization/authorization.service";
import { Request, Response, NextFunction } from "express";

// Extendendo Request para incluir credentials
export interface RequestWithCredentials extends Request {
    credentials?: {
        sub: number;
        user_type: string;
        [key: string]: any;
    }
}

class MiddlewareAuthorization {

    static authorization(req: RequestWithCredentials, res: Response, next: NextFunction) {
        try {
            const bearerToken = req.headers.authorization?.startsWith("Bearer ") ? req.headers.authorization.replace("Bearer ", "") : null
      // 2. Extrai token do Cookie
      const cookieToken = req.cookies?.accessToken

      // 3. Prioriza Authorization (mobile/desktop)
      // e usa Cookie para web
      const token = bearerToken || cookieToken

      if (!token) {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Recurso de verificação de acesso não encontrado."
        })
      }
      const verifiedToken = AuthorizationService.ValidateToken(token)
      if (!verifiedToken.success)
        {
            return res.status(verifiedToken.statusCode).json(verifiedToken)
        }
        req.credentials = verifiedToken.info as {
            sub: number,user_type: string,[key: string]: any
        }
        return next()
    } catch (error) {
      console.error(error)

      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno ao validar a autorização."
      })
    }
  }
    static isAdmin(req: RequestWithCredentials, res: Response, next: NextFunction) {
        if (!req.credentials || req.credentials.user_type !== "admin") {
            return res.status(403).json({ 
                statusCode: 403, 
                success: false, 
                message: "Acesso negado! Você não tem permissão para acessar este recurso.",
                isAuth: false
            });
        }
        next();
    }

    static isClient(req: RequestWithCredentials, res: Response, next: NextFunction) {
        if (!req.credentials || req.credentials.user_type !== "client") {
            return res.status(403).json({ 
                statusCode: 403, 
                success: false, 
                message: "Acesso negado! Você não tem permissão para acessar este recurso.",
                isAuth: false
            });
        }
        next();
    }

}

export { MiddlewareAuthorization };
