import { Request, Response } from "express";
import { stripeConfig } from "../../Utils/PaymentGatwayConfig/stripe.config";

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
      const paymentIntent = event.data.object;

      console.log("Pagamento confirmado:", paymentIntent.metadata.id_order);

      // 👉 Aqui:
      // atualizar order.status = "completed"
      break;

    case "payment_intent.payment_failed":
      console.log("Pagamento falhou");
      break;
  }

  return res.json({ received: true });
};
