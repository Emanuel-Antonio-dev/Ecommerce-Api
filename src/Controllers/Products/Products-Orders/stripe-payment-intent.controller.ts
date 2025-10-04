import { Request, Response } from "express";
import { stripeConfig } from "../../../Common/Utils/PaymentGatwayConfig/stripe.config";

class StripePaymentIntentControler
{
    static async paymentIntent(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {amount} = req.body
            if(!amount)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos"})
            }
            const paymentIntent = await stripeConfig.paymentIntents.create({
                amount: amount,
                currency:"AO",
                automatic_payment_methods: {
                    enabled: true
                }
            })
            if(!paymentIntent)
            {
                return res.status(500).json({success: false, statusCode: 500, message:"Ocorreu um erro ao processar este pagamento"})
            } 
            return res.status(200).json({success: true, statusCode: 200, message:"Pagamento processado com sucesso", secret: paymentIntent.client_secret})
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}   
        }
    }
}
export{StripePaymentIntentControler}