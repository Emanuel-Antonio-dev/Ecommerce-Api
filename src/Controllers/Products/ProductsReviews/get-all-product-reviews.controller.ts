import { Request, Response } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import { GetAllProductReviewsService } from "../../../Services/Products/Reviews/get-all-product-reviews.service";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductReviewsRepositories = new PrismaProductReviewsRepositories(prisma)
const generalProductRepository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const service: GetAllProductReviewsService = new GetAllProductReviewsService(repository,generalProductRepository)

class GetAllProductReviewsController
{
    static async getReviews(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_product_fk = parseInt(req.params.id_product_fk, 10)
            if(!id_product_fk)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe o produto"})
            }
            const result = await service.getProductReview(id_product_fk)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{GetAllProductReviewsController}