import { Router, Response, Request} from "express";
import "dotenv/config"
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
import { limiterMiddleware } from "../../Common/Middlewares/Limiters/requests-limiter.config";
import { SendOtpCodeController } from "../../Controllers/Authentication/send-otp-code.controller";
import { ValidateOtpCodeController } from "../../Controllers/Authentication/validate-otp-code.controller";
import passport from "passport";

const generalRoute: Router = Router()

generalRoute.route("/health").get((req: Request, res: Response) =>{
    return res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  });
})
generalRoute.route("/auth/signup").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})
generalRoute.route("/auth/signin").post(limiterMiddleware("Tente novamente dentro de 2 minutos"), (req: Request, res: Response) =>{SignInController.signIn(req, res)})
generalRoute.route("/auth/refreshToken").post((req: Request, res:Response) =>{RefreshTokenController.newAcessToken(req, res)})
generalRoute.route("/auth/password/request").post((req: Request, res: Response) =>{RequestPasswordController.requestPassword(req, res)})
generalRoute.route("/auth/password/reset").put((req: Request, res: Response) =>{ResetPasswordController.resetPassword(req, res)})
generalRoute.route("/auth/logout").post((req: Request, res: Response) =>{LogoutController.logout(req, res)})
generalRoute.route("/auth/otp/send").post((req: Request, res: Response) =>{SendOtpCodeController.send(req, res)})
generalRoute.route("/auth/otp/verify-code").post(limiterMiddleware("Você excedeu o número de tentativas. Peça um novo código.",2,2),(req: Request, res: Response) =>{ValidateOtpCodeController.validate(req, res)})
generalRoute.route("/auth/google/signin").get(passport.authenticate("google", {scope:["profile", "email"]}))
generalRoute.route("/auth/google/callback").get(passport.authenticate("google", {session: false, failureFlash:"/auth/login"}),
    (req: Request, res: Response) => {
        const data = req.user as any
        const FRONT_URL = process.env.REDIRECT_URI as string
        if (data.newUser)
        {
            return res.redirect(`${FRONT_URL}/signup?session_datas=${data.token}`)
        }
        const isProduction = process.env.NODE_ENV === "production"
        res.cookie("refreshToken", data.refreshToken, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            maxAge: 7*24*60*60*1000,
            path: "/"
        })
            res.cookie("refreshToken",data.refreshToken,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
            maxAge: 7*24*60*60*1000
        })
        return res.redirect(`${FRONT_URL}/perfil?token=${data.accessToken}`)
    })

generalRoute.route("/users/:id_user").get(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersProfileController.profile(req, res)})
generalRoute.route("/users/:id_user").patch(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersEditProfileController.editProfile(req, res)})
generalRoute.route("/users/:id_user").delete(MiddlewareAuthorization.authorization,(req: Request, res: Response) =>{UsersDeleteProfileController.deleteProfile(req, res)})

export{generalRoute}