import { Router, Response, Request} from "express";
import { RegisterUsersController } from "../../../Controllers/Users/register-genral-user.controller";
import { UsersProfileController } from "../../../Controllers/Users/profile-users.controller";

const clientRoutes: Router = Router()

clientRoutes.route("/users/clients/register").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})

export {clientRoutes}