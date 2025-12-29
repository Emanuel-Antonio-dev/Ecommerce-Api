import { Router, Response, Request} from "express";
import dotenv from "dotenv"
import { SignInController } from "../../Controllers/Authentication/signin.controller";
import { RefreshTokenController } from "../../Controllers/Authentication/refreshToken.controller";
import { LogoutController } from "../../Controllers/Authentication/logout.controller";
import { RequestPasswordController } from "../../Controllers/Authentication/request-password.controller";
import { ResetPasswordController } from "../../Controllers/Authentication/reset-password.controller";
import { UsersProfileController } from "../../Controllers/Users/profile-users.controller";
import { UsersEditProfileController } from "../../Controllers/Users/edit-users-profile.controller";
import { UsersDeleteProfileController } from "../../Controllers/Users/delete-users-profile.controller";
import { RegisterUsersController } from "../../Controllers/Users/register-genral-user.controller";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";
import { limiterConfig } from "../../Common/Middlewares/Limiters/requests-limiter.config";
dotenv.config({quiet: true})

const generalRoute: Router = Router()

//general authentications routes 
generalRoute.route("/auth/local-signin").post(limiterConfig("Tente novamente dentro de 2 minutos"), (req: Request, res: Response) =>{SignInController.signIn(req, res)})
generalRoute.route("/auth/refreshToken").post((req: Request, res:Response) =>{RefreshTokenController.newAcessToken(req, res)})
generalRoute.route("/auth/password/request").post((req: Request, res: Response) =>{RequestPasswordController.requestPassword(req, res)})
generalRoute.route("/auth/password/reset").put((req: Request, res: Response) =>{ResetPasswordController.resetPassword(req, res)})
generalRoute.route("/auth/logout").post(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{LogoutController.logout(req, res)})

//general basics users routes
generalRoute.route("/auth/signup").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})
generalRoute.route("/users/:id_user").get(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersProfileController.profile(req, res)})
generalRoute.route("/users/:id_user").patch(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersEditProfileController.editProfile(req, res)})
generalRoute.route("/users/:id_user").delete(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersDeleteProfileController.deleteProfile(req, res)})


export{generalRoute}