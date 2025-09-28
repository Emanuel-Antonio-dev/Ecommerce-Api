import { Request, Response, Router} from "express";
import { RegisterCartController } from "../../../Controllers/Products/Cart/register-cart.controller";
import { GetCartDatasController } from "../../../Controllers/Products/Cart/get-cart-datas.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";

const cartRoutes: Router = Router()

cartRoutes.route("/carts/register-cart").post((req: Request, res: Response) =>{RegisterCartController.register(req, res)})
cartRoutes.route("/carts/get-cart-datas/:id_user_fk").get((req: Request, res: Response) =>{GetCartDatasController.getCartDatas(req, res)})

export {cartRoutes}