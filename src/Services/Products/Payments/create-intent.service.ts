import { stripeConfig } from "../../../Common/Utils/PaymentGatwayConfig/stripe.config";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { StripeIntentDatas } from "../../../interfaces/Payments/Interface";

class CreateStripePaymentIntentService
{
    constructor(private readonly productsOrderRepository: PrismaOrdersRepositories){}
    async paymentIntent(datas: StripeIntentDatas)
    {
        try
        {
            if(!datas.id_order)
            {
                return {success: false, statusCode: 400, message:"Informe o seu pedido."}
            }
            const existsOrder = await this.productsOrderRepository.getOrderItemsByOrder(Number(datas.id_order))
            if(!existsOrder)
            {
                return {success: false, statusCode: 404, message:"Pedido não encontrado."}
            }
            const id_user = existsOrder.order.user_details.id_user
            const paymentIntent = await stripeConfig.paymentIntents.create({
                amount: existsOrder.order.total_amount,
                currency: datas.currency || "aoa",
                automatic_payment_methods: {
                    enabled: true,
                },
                metadata: {
                    id_user: id_user.toString(),
                    id_order: datas.id_order.toString()
                },
                description: `Pagamento do pedido #${datas.id_order}`

            })
            if(!paymentIntent)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao processar este pagamento."}
            } 
            return {success: true, statusCode: 200, datas: {id_user: id_user, secret: paymentIntent.client_secret}}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}   
        }
    }
}
export {CreateStripePaymentIntentService}