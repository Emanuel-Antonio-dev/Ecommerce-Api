import { Router, Response, Request} from "express";
import { GetAllUsersController } from "../../../Controllers/Users/Admin/get-all-users.controller";

const adminRoutes: Router = Router()

adminRoutes.route("/admin/get-all-users").get((req: Request, res: Response) =>{GetAllUsersController.getAll(req, res)})

export {adminRoutes}