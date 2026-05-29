import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma/client";
import { prismaService } from "../../lib/prisma.service";
import { PrismaPaymentsRepositories } from "../../Repositories/Paymets/Prisma/prisma-services-payment";
import { RegisterPaymentService } from "../../Services/Payments/register-payment.service";
import { FindPaymentService } from "../../Services/Payments/find-pagment.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

const prisma = prismaService
const repository = new PrismaPaymentsRepositories(prisma);
const service = new FindPaymentService(repository);

class FindPaymentController {
  static async find(req: RequestWithCredentials, res: Response): Promise<Response>
  {
    try
    {
        const id_order = Number(req.params.id_order);
        const credentials = req.credentials;
        const result = await service.find(id_order, credentials);
        return res.status(result.statusCode).json(result);    
    } catch (error: any)
    {
        console.log(error)
        return res.status(500).json({success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente!"})
    }
  }
}

export { FindPaymentController };