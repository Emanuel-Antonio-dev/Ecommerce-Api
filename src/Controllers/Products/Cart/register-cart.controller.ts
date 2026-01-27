import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { RegisterCartsService } from "../../../Services/Products/Cart/register-carts.service";
import "dotenv/config"
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const service: RegisterCartsService = new RegisterCartsService(prismaService, repository, userRepository)

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
            const cartItems: cartItemsDatas[] = req.body.cartItems || []
            const result = await service.registerCart(cartDatas,cartItems)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error) 
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{RegisterCartController}