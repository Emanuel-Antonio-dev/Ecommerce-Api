import { Response, Request } from "express";
import { prismaService } from "../../lib/prisma.service";
import { GetCurrentUserService } from "../../Services/Auth/Authentication/get-current-user.service";
import { JwtOperations } from "../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";

const getCurrentUserService = new GetCurrentUserService(prismaService);

class MeController {
  static async getCurrentUser(req: Request, res: Response): Promise<Response> {
    try {
      let credentials = (req as any).credentials;

      // Se não tiver credenciais válidas do middleware, tenta usar o refreshToken do cookie
      if (!credentials) {
        const refreshToken = req.cookies?.mulembe_refresh;

        if (!refreshToken) {
          return res.status(401).json({
            success: false,
            statusCode: 401,
            message: "Não autenticado.",
          });
        }

        // Valida o refreshToken e extrai as credenciais
        try {
          const decoded = JwtOperations.VerifyToken(refreshToken);
          credentials = {
            sub: decoded.sub,
            user_type: decoded.user_type,
            access_level: decoded.access_level,
          };
        } catch {
          return res.status(401).json({
            success: false,
            statusCode: 401,
            message: "Token expirado ou inválido.",
          });
        }
      }

      // Buscar dados completos do usuário
      const result = await getCurrentUserService.execute(credentials);

      if (!result.success) {
        return res.status(result.statusCode).json(result);
      }

      return res.status(200).json({
        success: true,
        statusCode: 200,
        user: result.user,
        accessToken: result.accessToken,
        message: "Usuário autenticado com sucesso.",
      });
    } catch (error: any) {
      console.error("Erro no MeController:", error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente.",
      });
    }
  }
}

export { MeController };
