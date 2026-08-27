import { Router, Request, Response} from "express";
import { CreatePaymentIntentController } from "../../Controllers/Payments/PaymentByStripe/create-stripe-payment-intent.controller";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";

const paymentRoutes = Router();
// ✅ FIX: rota estava totalmente aberta (sem autenticação nem checagem de dono do pedido).
paymentRoutes.route("/payments/intent").post(
  MiddlewareAuthorization.authorization,
  (req: Request, res: Response) =>{CreatePaymentIntentController.createPaymentIntent(req, res)}
)

export { paymentRoutes };
