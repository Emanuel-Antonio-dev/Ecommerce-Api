import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import { GetAllProductReviewsService } from "../../../Services/Products/Reviews/get-all-product-reviews.service";

const repository: PrismaProductReviewsRepositories = new PrismaProductReviewsRepositories(prismaService)
const generalProductRepository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const service: GetAllProductReviewsService = new GetAllProductReviewsService(repository,generalProductRepository)

class GetAllProductReviewsController
{
    static async get(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product_fk = Number(req.params.id_product_fk)
            const result = await service.getProductReview(id_product_fk)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{GetAllProductReviewsController}