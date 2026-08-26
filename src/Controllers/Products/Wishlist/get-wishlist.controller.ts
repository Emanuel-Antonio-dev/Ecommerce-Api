import { Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaWishlistRepository } from "../../../Repositories/Products/Wishlist/Prisma/prisma-wishlist-repository";
import { GetWishlistService } from "../../../Services/Products/Wishlist/get-wishlist.service";
import { RequestWithCredentials } from "../../../Common/Middlewares/Authorization/authorization";

const repository = new PrismaWishlistRepository(prismaService);
const service = new GetWishlistService(repository);

class GetWishlistController {
  static async get(req: RequestWithCredentials, res: Response): Promise<Response> {
    try {
      const id_user_fk = req.credentials?.sub;
      const page = req.query.page ? Number(req.query.page) : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 10;

      if (!id_user_fk) {
        return res.status(401).json({ success: false, statusCode: 401, message: "Usuário não autorizado" });
      }
      const result = await service.execute(Number(id_user_fk), { page, limit });

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { GetWishlistController };
