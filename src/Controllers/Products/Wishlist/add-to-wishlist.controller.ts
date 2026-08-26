import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaWishlistRepository } from "../../../Repositories/Products/Wishlist/Prisma/prisma-wishlist-repository";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { AddToWishlistService } from "../../../Services/Products/Wishlist/add-to-wishlist.service";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaWishlistRepository(prismaService);
const productRepository = new PrismaGeneralProductsRepositories(prismaService);
const service = new AddToWishlistService(repository, productRepository);

class AddToWishlistController {
  static async add(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const id_user_fk = req.credentials?.sub;
      const { id_product_fk } = req.body;

      if (!id_user_fk) {
        return res.status(401).json({ success: false, statusCode: 401, message: "Usuário não autenticado" });
      }

      const result = await service.execute(Number(id_user_fk), Number(id_product_fk));

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AddToWishlistController };
