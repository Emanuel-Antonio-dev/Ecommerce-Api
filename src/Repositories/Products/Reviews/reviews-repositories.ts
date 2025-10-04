import { reviewsDatas } from "../../../interfaces/Products/Reviews/interface";

abstract class IReviewsRepositories
{
    abstract register(datas: reviewsDatas):Promise<any>
    abstract getAllProductReviews(id_product: number):Promise<any[]>
    abstract getReviewsByUserid(id_user: string):Promise<any>
}
export{IReviewsRepositories}