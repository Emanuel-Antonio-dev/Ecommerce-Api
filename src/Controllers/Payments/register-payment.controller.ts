import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";
import { prismaService } from "../../lib/prisma.service";
import { PrismaPaymentsRepositories } from "../../Repositories/Paymets/Prisma/prisma-services-payment";
import { RegisterPaymentService } from "../../Services/Payments/register-payment.service";

const prisma = prismaService
const repository = new PrismaPaymentsRepositories(prisma);
const service = new RegisterPaymentService(prisma, repository);

class RegisterPaymentController {
  static async register(req: Request, res: Response): Promise<Response>
  {
    try
    {
        const {
            id_order_fk,
            provider,
            currency,
            provider_reference,
            metadata
          } = req.body;
      
          const result = await service.register({
            id_order_fk,
            provider,
            currency,
            provider_reference,
            metadata,
            payment_status:"pending",
          });
      
          return res.status(result.statusCode).json(result);    
    } catch (error: any)
    {
        console.log(error)
        return res.status(500).json({success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente!"})
    }
  }
}

export { RegisterPaymentController };