import Stripe from "stripe";
import "dotenv/config";

const stripeConfig = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-10-29.clover"
});

export { stripeConfig };