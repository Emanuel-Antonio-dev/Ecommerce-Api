import { Request, Response, Router} from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { SetProductsOrdersStatusController } from "../../../Controllers/Products/Products-Orders/set-products-orders-status.controller";
import { RegisterProductOrderController } from "../../../Controllers/Products/Products-Orders/register-product-order.controller";

const producstOrders: Router = Router()

producstOrders.route("/orders/register-order").post((req: Request, res: Response) =>{RegisterProductOrderController.registerProductOrder(req, res)})
producstOrders.route("/orders/set-order-status/:id_order").put((req: Request, res: Response) =>{SetProductsOrdersStatusController.setStatus(req, res)})

export {producstOrders}