import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { RegisterCartsService } from "../../../Services/Products/Cart/register-carts.service";
import "dotenv/config";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService);
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService);
const service: RegisterCartsService = new RegisterCartsService(prismaService, repository, userRepository);

class RegisterCartController {
  static async register(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const { cartItems } = req.body;
      const id_user_fk = req.credentials?.sub;
      const id_guest_cart = req.cookies.id_guest_cart; // para guest, tenta pegar o id_guest_cart do cookie

      // Monta o cartDatas para service
      const cartDatas: cartDatas = id_user_fk
        ? { id_user_fk: Number(id_user_fk), status: "active" }
        : { status: "active", id_guest_cart }; // guest → service gera o id_guest_cart

      const cartItemsDatas: cartItemsDatas[] = Array.isArray(cartItems) ? cartItems : [];
      const result = await service.registerCart(cartDatas, cartItemsDatas);

      // Se for guest, salva o id_guest_cart em cookie
      if (result.id_guest_cart) {
        res.cookie("id_guest_cart", result.id_guest_cart, {
          httpOnly: true, // não acessível via JS
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax", // protege contra CSRF
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 dias
        });
      }

      return res.status(result.statusCode).json({success: result.success, statusCode: result.statusCode, message: result.message, datas: result.datas});
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      });
    }
  }
}

export { RegisterCartController };
