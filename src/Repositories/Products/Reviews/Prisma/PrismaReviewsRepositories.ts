import { nanoid } from "nanoid";
import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { reviewsDatas } from "../../../../interfaces/Products/Reviews/interface";
import { IReviewsRepositories } from "../reviews-repositories";

class PrismaProductReviewsRepositories implements IReviewsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: reviewsDatas): Promise<any>
    {
        return await this.prisma.productsReviews.create({data:{
            id_review: nanoid(),
            ...datas
        }})
    }

    async getAllProductReviews(id_product: number): Promise<any[]>
    {
        return await this.prisma.productsReviews.findMany({where:{id_product_fk: id_product}, include:{product: true, user_details: true}})    
    }
    async getReviewsByUserid(id_user: string): Promise<any> {
        return await this.prisma.productsReviews.findFirst({where:{id_user_fk: id_user}})
    }
}
export{PrismaProductReviewsRepositories}