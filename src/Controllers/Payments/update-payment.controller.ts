import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";
import { prismaService } from "../../lib/prisma.service";
import { PrismaPaymentsRepositories } from "../../Repositories/Paymets/Prisma/prisma-services-payment";
import { RegisterPaymentService } from "../../Services/Payments/register-payment.service";
import { FindPaymentService } from "../../Services/Payments/find-pagment.service";
import { UpdatePaymentService } from "../../Services/Payments/update-payment-status.service";

const prisma = prismaService
const repository = new PrismaPaymentsRepositories(prisma);
const service = new UpdatePaymentService(prisma,repository);

class UpdatePaymentController {
  static async update(req: Request, res: Response): Promise<Response>
  {
    try
    {
        const id_payment = req.params.id_payment;
        const{status} = req.body
        const result = await service.updateStatus(id_payment as string, status);
        return res.status(result.statusCode).json(result);    
    } catch (error: any)
    {
        console.log(error)
        return res.status(500).json({success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente!"})
    }
  }
}

export { UpdatePaymentController };