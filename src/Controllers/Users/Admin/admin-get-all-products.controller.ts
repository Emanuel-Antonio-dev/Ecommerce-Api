import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaAdminRepository } from "../../../Repositories/Users/Admin/Prisma/prisma-admin-repository";
import { AdminGetAllProductsService } from "../../../Services/Users/Admin/admin-get-all-products.service";

const repository = new PrismaAdminRepository(prismaService);
const service    = new AdminGetAllProductsService(repository);

class AdminGetAllProductsController {
  static async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const page  = req.query.page  ? Number(req.query.page)  : 1;
      const limit = req.query.limit ? Number(req.query.limit) : 50;

      const filters = {
        available:      req.query.available   !== undefined ? req.query.available   === "true" : undefined,
        is_featured:    req.query.is_featured  !== undefined ? req.query.is_featured === "true" : undefined,
        id_category_fk: req.query.id_category_fk ? Number(req.query.id_category_fk) : undefined,
        id_brand_fk:    req.query.id_brand_fk    ? Number(req.query.id_brand_fk)    : undefined,
        low_stock:      req.query.low_stock !== undefined ? req.query.low_stock === "true" : undefined,
      };

      const result = await service.execute(page, limit, filters);
      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" });
    }
  }
}

export { AdminGetAllProductsController };
