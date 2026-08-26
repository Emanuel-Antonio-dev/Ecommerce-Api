import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { UsersProfileService } from "../../Services/Users/profile-user.service";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";
import { isValidUserType } from "../../Common/Utils/helpers";
const usersRepositories: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService);
const userProfileService: UsersProfileService = new UsersProfileService(usersRepositories);

class UsersProfileController {
  static async profile(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const authUser = req.credentials;

      if (!authUser) {
        return res.status(401).json({ success: false, statusCode: 401, message: "Usuário não autenticado" });
      }

      if (!isValidUserType(authUser.user_type)) {
        return res.status(403).json({ success: false, statusCode: 403, message: "Tipo de utilizador inválido" });
      }

      const rawId = req.params.id_user;
      if (!/^\d+$/.test(rawId as string)) {
        return res.status(400).json({ success: false, statusCode: 400, message: "Identificador de utilizador inválido" });
      }
      const id_user = Number(rawId);

      if (authUser.user_type === "client" && id_user !== authUser.sub) {
        return res.status(403).json({ success: false, statusCode: 403, message: "Você só pode acessar o seu próprio perfil" });
      }

      const userProfileResult = await userProfileService.profile(id_user, {
        sub: authUser.sub,
        user_type: authUser.user_type,
      });

      return res.status(userProfileResult.statusCode).json(userProfileResult);
    } catch (error: any) {
      console.error({
        message: "Erro em UsersProfileController.profile",
        error: error?.message,
        stack: process.env.NODE_ENV === "production" ? undefined : error?.stack,
      });
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { UsersProfileController };