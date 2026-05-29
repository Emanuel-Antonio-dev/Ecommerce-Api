import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";
import { PrismaWishlistRepository } from "../../../Repositories/Products/Wishlist/Prisma/prisma-wishlist-repository";
import { RemoveFromWishlistService } from "../../../Services/Products/Wishlist/remove-from-wishlist.service";

const repository = new PrismaWishlistRepository(prismaService);
const service = new RemoveFromWishlistService(repository);

class RemoveFromWishlistController {
  static async remove(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const id_user_fk = req.credentials?.sub;
      const { id_product_fk } = req.params;

      if (!id_user_fk) {
        return res.status(401).json({ success: false, statusCode: 401, message: "Não autorizado" });
      }

      const result = await service.execute(Number(id_user_fk), Number(id_product_fk));

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { RemoveFromWishlistController };
