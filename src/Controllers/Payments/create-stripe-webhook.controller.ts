import { Request, Response } from "express";
import { stripeConfig } from "../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { prismaService } from "../../lib/prisma.service";
import { EmailProvider } from "../../Common/Utils/Emails/email-sender";
import { SendEmail } from "../../Common/Utils/Emails/send-email";
import { PrismaOrdersRepositories } from "../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { SetOrdersStatusService } from "../../Services/Products/Products-Orders/set-products-orders-status.service";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const emailProvider: EmailProvider = new EmailProvider() 
const emailSender: SendEmail = new SendEmail(emailProvider)
const service = new SetOrdersStatusService (prismaService,repository,userRepository,emailSender)

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;
export const createStripeWebhookController = async (req: Request, res: Response) => {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripeConfig.webhooks.constructEvent(
      req.body,
      sig as string,
      endpointSecret
    );
  } catch (err: any) {
    console.error("❌ Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as any;

        await service.setOrderStatus(
          Number(paymentIntent.metadata.id_order),
          "completed",
          Number(paymentIntent.metadata.id_user)
        );

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as any;

        await service.setOrderStatus(
          Number(paymentIntent.metadata.id_order),
          "failed",
          Number(paymentIntent.metadata.id_user)
        );

        break;
      }

      case "payment_intent.canceled": {
        const paymentIntent = event.data.object as any;

        await service.setOrderStatus(
          Number(paymentIntent.metadata.id_order),
          "cancelled",
          Number(paymentIntent.metadata.id_user)
        );

        break;
      }

      default:
        console.log(`Evento ignorado: ${event.type}`);
    }

    return res.json({ received: true });
  } catch (error) {
    console.error("❌ Erro ao processar webhook:", error);
    return res.status(500).json({ received: false });
  }
};
