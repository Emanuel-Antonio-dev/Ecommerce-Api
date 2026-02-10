import { Router, Request, Response } from "express";
import passport from "passport";
import "dotenv/config";

import { RegisterUsersController } from "../../Controllers/Users/register-genral-user.controller";
import { SignInController } from "../../Controllers/Authentication/signin.controller";
import { RefreshTokenController } from "../../Controllers/Authentication/refreshToken.controller";
import { LogoutController } from "../../Controllers/Authentication/logout.controller";
import { ValidateOtpCodeController } from "../../Controllers/Authentication/validate-otp-code.controller";
import { SendOtpCodeController } from "../../Controllers/Authentication/send-otp-code.controller";
import { MeController } from "../../Controllers/Authentication/me.controller";
import { limiterMiddleware } from "../../Common/Middlewares/Limiters/requests-limiter.config";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";
import { oauthRedirect } from "../../Common/Middlewares/Authorization/oauthRedirect";
import { RequestPasswordController } from "../../Controllers/Authentication/request-password.controller";
import { ResetPasswordController } from "../../Controllers/Authentication/reset-password.controller";
import { UsersProfileController } from "../../Controllers/Users/profile-users.controller";
import { UsersEditProfileController } from "../../Controllers/Users/edit-users-profile.controller";
import { UsersDeleteProfileController } from "../../Controllers/Users/delete-users-profile.controller";

const generalRoute = Router();
const FRONT_URL = process.env.REDIRECT_URI as string;

generalRoute.get("/health", (_req: Request, res: Response) => {
  return res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
});

generalRoute.get("/auth/me",MiddlewareAuthorization.authorization,(req, res) => MeController.getCurrentUser(req, res));
generalRoute.post("/auth/signup", (req, res) =>RegisterUsersController.register(req, res));
generalRoute.post("/auth/signin",limiterMiddleware("Por motivos de segurança, bloqueamos temporariamente a sua sessão. Tente novamente dentro de 2 minutos"),(req, res) => SignInController.signIn(req, res));
generalRoute.post("/auth/refreshToken", (req, res) =>RefreshTokenController.newAcessToken(req, res));
generalRoute.post("/auth/logout", (req, res) =>LogoutController.logout(req, res));
generalRoute.post("/auth/password/request", (req, res) =>RequestPasswordController.requestPassword(req, res));
generalRoute.put("/auth/password/reset", (req, res) =>ResetPasswordController.resetPassword(req, res));
generalRoute.post("/auth/otp/send", (req, res) =>SendOtpCodeController.send(req, res));
generalRoute.post("/auth/otp/verify-code",limiterMiddleware("Você excedeu o número de tentativas. Peça um novo código.", 2, 3),(req, res) => ValidateOtpCodeController.validate(req, res));
generalRoute.get("/auth/google/signin",passport.authenticate("google", { scope: ["profile", "email"] }));
generalRoute.get("/auth/google/callback",passport.authenticate("google", {session: false,failureRedirect: `${FRONT_URL}/login?error=google_oauth_failed`}),oauthRedirect);
generalRoute.get("/auth/facebook/signin",passport.authenticate("facebook", { scope: ["email"] }));
generalRoute.get("/auth/facebook/callback",passport.authenticate("facebook", {session: false,failureRedirect: `${FRONT_URL}/login?error=facebook_oauth_failed`}),oauthRedirect);

generalRoute.route("/users/:id_user").get(MiddlewareAuthorization.authorization,MiddlewareAuthorization.isAdmin, MiddlewareAuthorization.isClient,(req: Request, res: Response) =>{UsersProfileController.profile(req, res)})
generalRoute.route("/users/:id_user").patch(MiddlewareAuthorization.authorization,MiddlewareAuthorization.isAdmin, MiddlewareAuthorization.isClient,(req: Request, res: Response) =>{UsersEditProfileController.edit(req, res)})
generalRoute.route("/users/:id_user").delete(MiddlewareAuthorization.authorization,MiddlewareAuthorization.isAdmin, MiddlewareAuthorization.isClient,(req: Request, res: Response) =>{UsersDeleteProfileController.delete(req, res)})

export{generalRoute}