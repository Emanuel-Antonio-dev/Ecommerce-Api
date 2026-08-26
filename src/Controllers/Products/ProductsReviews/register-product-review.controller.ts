import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import { RegisterProductReviewService } from "../../../Services/Products/Reviews/register-product-review.service";
import { reviewsDatas } from "../../../interfaces/Products/Reviews/interface";
import { RequestWithCredentials } from "../../../interfaces/Shared/authentication.interface";

const repository: PrismaProductReviewsRepositories = new PrismaProductReviewsRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const generalProductRepository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prismaService)
const service: RegisterProductReviewService = new RegisterProductReviewService(repository,userRepository,generalProductRepository)

class RegisterProductReviewController
{
    static async register(req: RequestWithCredentials, res: Response):Promise<Response | any>
    {
        try
        {
            const reviewDatas: reviewsDatas ={
                comment: req.body.comment,
                rating: req.body.rating,
                id_product_fk: req.body.id_product_fk,
                id_user_fk: Number(req.credentials?.sub)
            }
            const result = await service.registerProductReview(reviewDatas)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{RegisterProductReviewController}