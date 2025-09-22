import { Router, Response, Request, NextFunction} from "express";
import { SignInController } from "../../Controllers/Authentication/signin.controller";
import { RefreshTokenController } from "../../Controllers/Authentication/refreshToken.controller";
import { LogoutController } from "../../Controllers/Authentication/logout.controller";
import { ResetPasswordController } from "../../Controllers/Authentication/reset-password.controller";
import { UsersProfileController } from "../../Controllers/Users/profile-users.controller";
import { UsersEditProfileController } from "../../Controllers/Users/edit-users-profile.controller";
import { UsersDeleteProfileController } from "../../Controllers/Users/delete-users-profile.controller";

import dotenv from "dotenv"
import { RegisterUsersController } from "../../Controllers/Users/register-genral-user.controller";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";
dotenv.config()

const generalRoute: Router = Router()

//general authentications routes
generalRoute.route("/auth/local-signin").post((req: Request, res: Response) =>{SignInController.signIn(req, res)})
generalRoute.route("/auth/refreshToken").post((req: Request, res:Response) =>{RefreshTokenController.newAcessToken(req, res)})
generalRoute.route("/auth/request-new-password").post((req: Request, res: Response) =>{ResetPasswordController.request(req, res)})
generalRoute.route("/auth/reset-password").put((req: Request, res: Response) =>{ResetPasswordController.reset(req, res)})
generalRoute.route("/auth/logout").post((req: Request, res: Response) =>{LogoutController.logout(req, res)})

//general basics users routes
generalRoute.route("/auth/users/register").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})
generalRoute.route("/users/profile/:id_user").get(MiddlewareAuthorization.authorization, (req: Request, res: Response) =>{UsersProfileController.profile(req, res)})
generalRoute.route("/users/edit-profile/:id_user").patch(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersEditProfileController.editProfile(req, res)})
generalRoute.route("/users/delete-profile/:id_user").delete(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersDeleteProfileController.deleteProfile(req, res)})


export{generalRoute}