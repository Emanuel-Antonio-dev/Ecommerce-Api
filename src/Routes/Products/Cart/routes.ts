import { Request, Response, Router} from "express";
import { RegisterCartController } from "../../../Controllers/Products/Cart/register-cart.controller";
import { GetCartDatasController } from "../../../Controllers/Products/Cart/get-cart-item.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { DeleteCartItemController } from "../../../Controllers/Products/Cart/delete-cart-item.controller";
import { DeleteAllCarItemsController } from "../../../Controllers/Products/Cart/delete-all-cart-items.controller";
import { EditCartItemsController } from "../../../Controllers/Products/Cart/edit-cart-items.controller";

const cartRoutes: Router = Router()

cartRoutes.route("/carts/register-cart-items").post((req: Request, res: Response) =>{RegisterCartController.register(req, res)})
cartRoutes.route("/carts/get-cart-items/:id_user_fk").get((req: Request, res: Response) =>{GetCartDatasController.getCartDatas(req, res)})
cartRoutes.route("/carts/delete-cart-items/:id_user_fk").delete((req: Request, res: Response) =>{DeleteCartItemController.deleteCartItem(req, res)})
cartRoutes.route("/carts/delete-all-cart-items/:id_cart").delete((req: Request, res: Response) => {DeleteAllCarItemsController.deleteAllCartItems(req, res)})
cartRoutes.route("/carts/edit-cart-items/:id_user_fk").put((req: Request, res: Response) =>{EditCartItemsController.editCartItems(req, res)})
export {cartRoutes}