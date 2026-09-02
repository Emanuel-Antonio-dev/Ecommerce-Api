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
            ...datas
        }})
    }

    async getAllProductReviews(id_product: number): Promise<any[]>
    {
        return await this.prisma.productsReviews.findMany({where:{id_product_fk: id_product}, include:{product: true, user_details: true}})    
    }
    async getReviewsByUserid(id_user: number): Promise<any> {
        return await this.prisma.productsReviews.findFirst({where:{id_user_fk: id_user}})
    }

    async findById(id_review: number): Promise<any | null> {
        return await this.prisma.productsReviews.findUnique({where:{id_review}})
    }

    async delete(id_review: number): Promise<any> {
        return await this.prisma.productsReviews.delete({where:{id_review}})
    }
}
export{PrismaProductReviewsRepositories}