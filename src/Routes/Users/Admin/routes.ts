import { Router, Response, Request} from "express";
import { GetAllUsersController } from "../../../Controllers/Users/Admin/get-all-users.controller";
import { GetAllOrdersController } from "../../../Controllers/Users/Admin/get-all-orders.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";

const adminRoutes: Router = Router()

adminRoutes.route("/admin/users").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{GetAllUsersController.getAll(req, res)})
adminRoutes.route("/admin/orders").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{GetAllOrdersController.getAll(req, res)})

export {adminRoutes}