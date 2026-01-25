import { Request, Response } from "express";
import { stripeConfig } from "../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { PrismaClient } from "@prisma/client";
import { EmailProvider } from "../../Common/Utils/Emails/email-sender";
import { SendEmail } from "../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../Services/Products/Products-Orders/set-products-orders-status.service";

const prisma = new PrismaClient()
const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const emailProvider: EmailProvider = new EmailProvider() 
const emailSender: SendEmail = new SendEmail(emailProvider)
const service = new SetOrdersStatusService (prisma,repository,userRepository,emailSender)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
export const createStripeWebhookController = (
  req: Request,
  res: Response
) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeConfig.webhooks.constructEvent(
      req.body,
      sig as string,
      endpointSecret
    );
  } catch (err: any) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  switch (event.type) {
    case "payment_intent.succeeded":
    let paymentIntent = event.data.object;

      console.log("Pagamento confirmado:", paymentIntent.metadata.id_order);
      service.setOrderStatus( paymentIntent.metadata.id_order,"completed", paymentIntent.metadata.id_user)
      .then((success)=>{
        return res.status(success.statusCode).json(success);
      }).catch((failure)=>{
        return res.status(failure.statusCode).json(failure);
      })
      break;

    case "payment_intent.payment_failed":
      paymentIntent = event.data.object;

      service.setOrderStatus( paymentIntent.metadata.id_order,"failed", paymentIntent.metadata.id_user)
      .then((success)=>{
        return res.status(success.statusCode).json(success);
      }).catch((failure)=>{
        return res.status(failure.statusCode).json(failure);
      })
      console.log("Pagamento falhou");
      break;
    
      case "payment_intent.canceled":
      paymentIntent = event.data.object;
      service.setOrderStatus( paymentIntent.metadata.id_order,"cancelled", paymentIntent.metadata.id_user)
      .then((success)=>{
        return res.status(success.statusCode).json(success);
      }).catch((failure)=>{
        return res.status(failure.statusCode).json(failure);
      })
      console.log("Pagamento cancelado");
      break;
  }

  return res.json({ received: true });
};
