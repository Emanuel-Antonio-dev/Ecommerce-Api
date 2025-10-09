import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import { RegisterProductReviewService } from "../../../Services/Products/Reviews/register-product-review.service";
import { reviewsDatas } from "../../../interfaces/Products/Reviews/interface";

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaProductReviewsRepositories = new PrismaProductReviewsRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const generalProductRepository: PrismaGeneralProductsRepositories = new PrismaGeneralProductsRepositories(prisma)
const service: RegisterProductReviewService = new RegisterProductReviewService(repository,userRepository,generalProductRepository)

class RegisterProductReviewController
{
    static async registerReview(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const reviewDatas: reviewsDatas ={
                comment: req.body.comment,
                rating: req.body.rating,
                id_product_fk: req.body.id_product_fk,
                id_user_fk: req.body.id_user_fk
            }
            if(!reviewDatas.comment
                || !reviewDatas.rating 
                || !reviewDatas.id_product_fk
                || !reviewDatas.id_user_fk)
            {
                return res.status(400).json({success: false, statusCode: 400, message: "Informe todos os campos"})
            }
            const result = await service.registerProductReview(reviewDatas)
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
export{RegisterProductReviewController}