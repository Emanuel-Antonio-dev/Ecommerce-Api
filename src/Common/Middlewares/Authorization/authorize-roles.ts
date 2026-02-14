// middlewares/authorizeRoles.ts
import { Request, Response, NextFunction } from "express";
import { RequestWithCredentials } from "./authorization";
type UserType = "admin" | "client";

export function authorizeRoles(...allowedRoles: UserType[]) {
  return (req: RequestWithCredentials, res: Response, next: NextFunction) => {
    const userType = req.credentials?.user_type;

    if (!userType) {
      return res.status(401).json({ message: "Usuário não autenticado" });
    }

    if (!allowedRoles.includes(userType as UserType)) {
      return res.status(403).json({ message: "Acesso negado! Você não tem permissão para acessar este recurso" });
    }

    return next();
  };
}
