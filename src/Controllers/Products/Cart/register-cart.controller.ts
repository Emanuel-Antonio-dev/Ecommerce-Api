import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { RegisterCartsService } from "../../../Services/Products/Cart/register-carts.service";
import dotenv from "dotenv"
import { getErrorsDetails } from "../../../Common/Middlewares/Observability/get-errors";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
dotenv.config()

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaCartRepositories = new PrismaCartRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const service: RegisterCartsService = new RegisterCartsService(prisma, repository, userRepository)

class RegisterCartController
{
    static async register(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const cartDatas: cartDatas={
                id_user_fk: req.body.id_user_fk,
                id_guest_cart: req.body.id_guest_cart,
                status: "active"
            }
            if(!cartDatas.id_user_fk && !cartDatas.id_guest_cart)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os dados"})
            }
            const cartItems: cartItemsDatas[] = req.body.cartItems || []
            if (!Array.isArray(cartItems) || cartItems.length === 0) {
                return res.status(400).json({
                    success: false,
                    statusCode: 400,
                    message: "É necessário informar pelo menos um item no carrinho.",
                });
            }
            const result = await service.registerCart(cartDatas,cartItems)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            process.env.NODE_ENV === "dev" ? console.log(error) : getErrorsDetails(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{RegisterCartController}