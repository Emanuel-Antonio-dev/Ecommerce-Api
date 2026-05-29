import { Request, Response } from "express";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { CreateStripePaymentIntentService } from "../../../Services/Products/Payments/create-intent.service";
import { prismaService } from "../../../lib/prisma.service";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";
import { PrismaPaymentsRepositories } from "../../../Repositories/Paymets/Prisma/prisma-services-payment";

const productsOrderRepository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService)
const prisma = prismaService
const paymentRepository = new PrismaPaymentsRepositories(prisma)
const service: CreateStripePaymentIntentService = new CreateStripePaymentIntentService(prisma,paymentRepository,productsOrderRepository);
class CreatePaymentIntentController
{
    
    static async createPaymentIntent(req: Request, res: Response):Promise<Response|any>
    {
        try
        {
            const {id_order} = req.body;
            if(!id_order)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos."})
            }
            const paymentIntent = await service.paymentIntent({id_order: id_order});
            return res.status(paymentIntent.statusCode).json(paymentIntent);
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})   
        }
    }
}
export { CreatePaymentIntentController };
