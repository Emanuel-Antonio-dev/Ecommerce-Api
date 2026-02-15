import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { RegisterCartsService } from "../../../Services/Products/Cart/register-carts.service";
import "dotenv/config"
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const service: RegisterCartsService = new RegisterCartsService(prismaService, repository, userRepository)

class RegisterCartController {
  static async register(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
        const { id_guest_cart, cartItems } = req.body;
        const id_user_fk = req.credentials?.sub
        let cartDatas: cartDatas;
        if (id_user_fk)
        {
            cartDatas = {
                id_user_fk: Number(id_user_fk),
                status: "active",
            };
        }
        else
        {
            cartDatas = {
                id_guest_cart,
                status: "active",
            };
        }
        const cartItemsDatas: cartItemsDatas[] = Array.isArray(cartItems) ? cartItems : [];
        const result = await service.registerCart(cartDatas, cartItemsDatas);
        
        return res.status(result.statusCode).json({...result,...(cartDatas.id_guest_cart && { id_guest_cart: cartDatas.id_guest_cart })});
    }catch (error: any)
    {
        console.error(error);
        return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export{RegisterCartController}