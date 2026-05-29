import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";
import { prismaService } from "../../lib/prisma.service";
import { PrismaPaymentsRepositories } from "../../Repositories/Paymets/Prisma/prisma-services-payment";
import { CheckPaymentOrderPaidService } from "../../Services/Payments/check-payment-order-paid.service";

const prisma = prismaService
const repository = new PrismaPaymentsRepositories(prisma);
const service = new CheckPaymentOrderPaidService(prisma,repository);

class CheckPaymentController {
  static async check(req: Request, res: Response): Promise<Response>
  {
    try
    {
      const id_order = Number(req.params.id_order);
      const result = await service.check(id_order);
      return res.status(result.statusCode).json(result);    
    } catch (error: any)
    {
      console.log(error)
      return res.status(500).json({success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente!"})
    }
  }
}

export { CheckPaymentController };