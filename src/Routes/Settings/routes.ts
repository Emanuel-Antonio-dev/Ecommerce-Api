import { Router, Response, Request, NextFunction} from "express";
import "dotenv/config"
import { limiterMiddleware } from "../../Common/Middlewares/Limiters/requests-limiter.config";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";
import { InitSeoSettingsController } from "../../Controllers/Settings/init-seo.controller";
import { FindSeoSettingsController } from "../../Controllers/Settings/find-seo.controller";
import { UpdateSeoSettingsController } from "../../Controllers/Settings/update-seo.controller";

//MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,
const settingsRoutes: Router = Router()
settingsRoutes.route("/settings/seo").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{InitSeoSettingsController.init(req, res)})
settingsRoutes.route("/settings/seo/:id_seo_setting").get((req: Request, res: Response) =>{FindSeoSettingsController.find(req, res)})
settingsRoutes.route("/settings/seo/:id_seo_setting").patch(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{UpdateSeoSettingsController.update(req, res)})

export{settingsRoutes}