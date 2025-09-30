import { Request, Response, Router} from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";

import { RegisterProductOrderController } from "../../../Controllers/Products/Products-Orders/register-product-order.controller";

const producstOrders: Router = Router()

producstOrders.route("/orders/register-order").post((req: Request, res: Response) =>{RegisterProductOrderController.registerProductOrder(req, res)})

export {producstOrders}