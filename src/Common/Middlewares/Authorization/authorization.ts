import { UsersTypes } from "../../../../generated/prisma/enums";
import { AuthorizationService } from "../../../Services/Auth/Authorization/authorization.service";
import { Request, Response, NextFunction } from "express";

// Extendendo Request para incluir credentials
export interface RequestWithCredentials extends Request {
    credentials?: {
        sub: number;
        user_type: string;
        // ✅ só populado para user_type === "admin". Tokens emitidos antes
        // desta mudança não terão este campo — tratado como "super_admin"
        // (ver isSuperAdmin), consistente com o valor por omissão no BD.
        admin_role?: string;
        // ✅ FIX: id da conta (Accounts.id_account), agora sempre presente no
        // payload do access token — usado pelos controllers de admin para
        // registrar quem executou uma ação sensível (promote/suspend/etc).
        account_id: string;
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
            sub: number,user_type: UsersTypes, admin_role?: string, account_id: string,
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

    // ✅ NOVO: gate para ações sensíveis (gestão de contas, dashboard
    // financeiro, exportações contáveis) que um admin "support" não deve
    // poder executar. Um admin "support" continua a passar em `isAdmin`
    // normalmente — só fica de fora do que exige `isSuperAdmin`.
    static isSuperAdmin(req: RequestWithCredentials, res: Response, next: NextFunction) {
        if (!req.credentials || req.credentials.user_type !== "admin") {
            return res.status(403).json({
                statusCode: 403,
                success: false,
                message: "Acesso negado! Você não tem permissão para acessar este recurso.",
                isAuth: false
            });
        }
        // tokens emitidos antes desta funcionalidade não têm admin_role —
        // tratado como super_admin, igual ao valor por omissão no BD
        const role = req.credentials.admin_role ?? "super_admin";
        if (role !== "super_admin") {
            return res.status(403).json({
                statusCode: 403,
                success: false,
                message: "Esta ação requer privilégios de administrador completo.",
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
