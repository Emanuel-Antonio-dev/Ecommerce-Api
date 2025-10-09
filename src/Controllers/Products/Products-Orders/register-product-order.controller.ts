import { PrismaClient } from "@prisma/client";
import { RegisterProductOrderService } from "../../../Services/Products/Products-Orders/register-product-order.service";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";
import { Request, Response } from "express";

const prisma: PrismaClient = new PrismaClient();
const repository: PrismaOrdersRepositories = new PrismaOrdersRepositories(prisma);
const cartRepository: PrismaCartRepositories = new PrismaCartRepositories(prisma);
const service: RegisterProductOrderService = new RegisterProductOrderService(prisma, repository, cartRepository);

class RegisterProductOrderController
{
    static async registerProductOrder(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const orderDatas: productsOrdersDatas =
            {
                id_user_fk: req.body.id_user_fk,
                payment_method: "cash",
                status: "pending",
                total_amount: req.body.total_amount
            }
            if (!orderDatas.id_user_fk)
            {
                return res.status(400).json({ success: false, statusCode:400, message: "Informe todos o usuário" });
            }
            const result = await service.registerOrder(orderDatas);
            if (!result.success)
            {
                return res.status(result.statusCode).json(result);
            }
            return res.status(result.statusCode).json(result);
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}    
        }
    }
}
export { RegisterProductOrderController }