import { Request, Response, Router} from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { SetProductsOrdersStatusController } from "../../../Controllers/Products/Products-Orders/set-products-orders-status.controller";
import { RegisterProductOrderController } from "../../../Controllers/Products/Products-Orders/register-product-order.controller";

const producstOrders: Router = Router()

producstOrders.route("/orders").post(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isClient, (req: Request, res: Response) =>{RegisterProductOrderController.register(req, res)})
producstOrders.route("/orders/status/:id_order").put(MiddlewareAuthorization.authorization, MiddlewareAuthorization.isAdmin,(req: Request, res: Response) =>{SetProductsOrdersStatusController.set(req, res)})

export {producstOrders}