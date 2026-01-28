import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterProductOrderService } from "../../../Services/Products/Products-Orders/register-product-order.service";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";

const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prismaService);
const cartRepository: PrismaCartRepositories = new PrismaCartRepositories(prismaService);
const service: RegisterProductOrderService = new RegisterProductOrderService(prismaService, repository, cartRepository);

class RegisterProductOrderController
{
    static async register(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const orderDatas: productsOrdersDatas =
            {
                id_user_fk: req.body.id_user_fk,
                payment_method: req.body.payment_method || "cash",
                status: "pending",
                total_amount: req.body.total_amount
            }
            const result = await service.registerOrder(orderDatas);
            return res.status(result.statusCode).json(result);
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})   
        }
    }
}
export { RegisterProductOrderController }