import { Request, Response, Router} from "express";
import { RegisterCartController } from "../../../Controllers/Products/Cart/register-cart.controller";
import { GetCartDatasController } from "../../../Controllers/Products/Cart/get-cart-item.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { DeleteCartItemController } from "../../../Controllers/Products/Cart/delete-cart-item.controller";
import { DeleteAllCarItemsController } from "../../../Controllers/Products/Cart/delete-all-cart-items.controller";

const cartRoutes: Router = Router()

cartRoutes.route("/carts/register-cart-items").post((req: Request, res: Response) =>{RegisterCartController.register(req, res)})
cartRoutes.route("/carts/get-cart-item/:id_user_fk").get((req: Request, res: Response) =>{GetCartDatasController.getCartDatas(req, res)})
cartRoutes.route("/carts/delete-cart-item/:id_user_fk").delete((req: Request, res: Response) =>{DeleteCartItemController.deleteCartItem(req, res)})
cartRoutes.route("/carts/delete-all-cart-items/:id_cart").delete((req: Request, res: Response) => {DeleteAllCarItemsController.deleteAllCartItems(req, res)})

export {cartRoutes}