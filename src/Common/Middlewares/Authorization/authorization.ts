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
            const tokenExtracted = req.headers.authorization;
            if (!tokenExtracted) {
                return res.status(401).json({ success: false, statusCode: 401, message: "Ocorreu um erro ao verificar este recurso" }); 
            }

            const token = tokenExtracted.split(' ')[1];
            if (!token) {
                return res.status(401).json({ success: false, statusCode: 401, message: "Verificação de autorização inválida, tente novamente." }); 
            }

            const verifiedToken = AuthorizationService.ValidateToken(token);
            if (!verifiedToken.success) {
                return res.status(verifiedToken.statusCode).json(verifiedToken);
            }

            // ✅ Guardando credentials diretamente no req
            req.credentials = verifiedToken.info as { sub: number; user_type: string; [key: string]: any }
            next();
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro, por favor tente novamente." }); 
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
