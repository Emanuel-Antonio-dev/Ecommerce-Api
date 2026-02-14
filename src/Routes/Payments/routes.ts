import { Router, Request, Response} from "express";
import { CreatePaymentIntentController } from "../../Controllers/Payments/create-stripe-payment-intent.controller";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";

const paymentRoutes = Router();
paymentRoutes.route("/payments/intent").post((req: Request, res: Response) =>{CreatePaymentIntentController.createPaymentIntent(req, res)})

export { paymentRoutes };
