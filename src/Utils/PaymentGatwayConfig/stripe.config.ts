// stripeConfig.ts
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const stripeConfig = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2025-09-30.clover" // Use a versão mais recente disponível
});

export { stripeConfig };