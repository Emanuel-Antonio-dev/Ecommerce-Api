import { Router, Request, Response} from "express";
import { CreatePaymentIntentController } from "../../Controllers/Payments/create-stripe-payment-intent.controller";

const paymentRoutes = Router();
paymentRoutes.route("/payments/create-intent").post((req: Request, res: Response) =>{CreatePaymentIntentController.createPaymentIntent(req, res)})

export { paymentRoutes };
