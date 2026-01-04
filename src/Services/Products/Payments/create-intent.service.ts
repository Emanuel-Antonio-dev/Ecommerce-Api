import { stripeConfig } from "../../../Utils/PaymentGatwayConfig/stripe.config";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { StripeIntentDatas } from "interfaces/Payments/Interface";

class CreateStripePaymentIntentService
{
    constructor(private readonly productsOrderRepository: PrismaOrdersRepositories){}
    async paymentIntent(datas: StripeIntentDatas)
    {
        try
        {
            if(!datas.amount || !datas.order_id)
            {
                return {success: false, statusCode: 400, message:"Informe todos os campos."}
            }
            const existsOrder = await this.productsOrderRepository.getOrderItemsByOrder(datas.order_id)
            if(!existsOrder)
            {
                return {success: false, statusCode: 404, message:"Pedido não encontrado."}
            }
            const id_user = existsOrder.order.user_details.id_user
            const paymentIntent = await stripeConfig.paymentIntents.create({
                amount: datas.amount,
                currency: datas.currency || "AOA",
                automatic_payment_methods: {
                    enabled: true,
                },
                metadata: datas.metadata
            })
            if(!paymentIntent)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao processar este pagamento."}
            } 
            return {success: true, statusCode: 200, datas: {id_user: id_user, secret: paymentIntent.client_secret}}
        } catch (error: any)
        {
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}   
        }
    }
}
export {CreateStripePaymentIntentService}