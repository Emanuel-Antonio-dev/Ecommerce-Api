import { Router, Response, Request} from "express";
import { GetAllUsersController } from "../../../Controllers/Users/Admin/get-all-users.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";

const adminRoutes: Router = Router()

adminRoutes.route("/admin/get-all-users").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{GetAllUsersController.getAll(req, res)})

export {adminRoutes}