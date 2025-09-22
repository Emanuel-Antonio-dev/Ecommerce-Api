import { Router, Response, Request} from "express";
import { RegisterUsersController } from "../../../Controllers/Users/register-genral-user.controller";
import { UsersProfileController } from "../../../Controllers/Users/profile-users.controller";

const clientRoutes: Router = Router()

clientRoutes.route("/users/clients/register").post((req: Request, res: Response) =>{RegisterUsersController.register(req, res)})
clientRoutes.route("/users/clients/profile/:id_user").get((req: Request, res: Response) =>{UsersProfileController.profile(req, res)})

export {clientRoutes}