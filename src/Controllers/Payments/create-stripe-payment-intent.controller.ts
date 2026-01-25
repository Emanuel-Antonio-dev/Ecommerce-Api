import { Request, Response } from "express";
import { PrismaOrdersRepositories } from "../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { CreateStripePaymentIntentService } from "../../Services/Products/Payments/create-intent.service";
import { prismaService } from "../../lib/prisma.service";

const productsOrderRepository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
class CreatePaymentIntentController
{
    private static service: CreateStripePaymentIntentService = new CreateStripePaymentIntentService(productsOrderRepository);
    
    static async createPaymentIntent(req: Request, res: Response):Promise<Response|any>
    {
        try
        {
            const {id_order, totalAmount } = req.body;
            if(!totalAmount || !id_order)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos."})
            }
            const paymentIntent = await this.service.paymentIntent({
                amount: totalAmount,
                metadata: {
                    id_order,
                },
                currency:"AOA"
            });
            return res.status(paymentIntent.statusCode).json(paymentIntent);
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})   
        }
    }
}
export { CreatePaymentIntentController };
