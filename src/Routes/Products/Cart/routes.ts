import { Request, Response, Router} from "express";
import { RegisterCartController } from "../../../Controllers/Products/Cart/register-cart.controller";
import { GetCartDatasController } from "../../../Controllers/Products/Cart/get-cart-item.controller";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { DeleteCartItemController } from "../../../Controllers/Products/Cart/delete-cart-item.controller";
import { DeleteAllCarItemsController } from "../../../Controllers/Products/Cart/delete-all-cart-items.controller";
import { EditCartItemsController } from "../../../Controllers/Products/Cart/edit-cart-items.controller";

const cartRoutes: Router = Router()

cartRoutes.route("/carts/guest").post((req: Request, res: Response) =>{RegisterCartController.register(req, res)})
cartRoutes.route("/carts").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) =>{RegisterCartController.register(req, res)})
cartRoutes.route("/carts/:id_user_fk").get(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) =>{GetCartDatasController.get(req, res)})
cartRoutes.route("/carts/items/:id_user_fk").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) =>{DeleteCartItemController.delete(req, res)})
cartRoutes.route("/carts/:id_cart/items").delete(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) => {DeleteAllCarItemsController.deleteAll(req, res)})
cartRoutes.route("/carts/items/:id_cart_item").put(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) =>{EditCartItemsController.edit(req, res)})

export {cartRoutes}