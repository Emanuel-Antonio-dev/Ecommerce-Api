import { Router, Response, Request, NextFunction} from "express";
import { RegisterUsersController } from "../../Controllers/Users/register-genral-user.controller";
import { SignInController } from "../../Controllers/Authentication/signin.controller";
import { RefreshTokenController } from "../../Controllers/Authentication/refreshToken.controller";
import { LogoutController } from "../../Controllers/Authentication/logout.controller";
import { ResetPasswordController } from "../../Controllers/Authentication/reset-password.controller";

import dotenv from "dotenv"
dotenv.config()

const generalRoute: Router = Router()

generalRoute.route("/auth/signup").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})
generalRoute.route("/auth/local-signin").post((req: Request, res: Response) =>{SignInController.signIn(req, res)})
generalRoute.route("/auth/refreshToken").post((req: Request, res:Response) =>{RefreshTokenController.newAcessToken(req, res)})
generalRoute.route("/auth/request-new-password").post((req: Request, res: Response) =>{ResetPasswordController.request(req, res)})
generalRoute.route("/auth/reset-password").put((req: Request, res: Response) =>{ResetPasswordController.reset(req, res)})
generalRoute.route("/auth/logout").post((req: Request, res: Response) =>{LogoutController.logout(req, res)})

export{generalRoute}