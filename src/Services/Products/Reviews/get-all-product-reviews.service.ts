import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

class GetAllProductReviewsService
{
    constructor(
        private readonly repository: PrismaProductReviewsRepositories,
        private readonly productRepository: PrismaGeneralProductsRepositories
    ){}

    async getProductReview(id_product: number)
    {
        try
        {
            if(!id_product)
            {
                throw new HttpException(false, 400, "Informe todos o produto")
            }
            if(!await this.productRepository.getProductDatas({action:"GetOnlyBasicsDatas"}, id_product, undefined))
            {
                throw new HttpException(false, 404, "Este produto não existe")
            }
            const result = await this.repository.getAllProductReviews(id_product)
            if(result.length === 0)
            {
                throw new HttpException(true, 200, "Este produto ainda não foi avaliado")
            }
            const productAverage = await this.productRepository.productAverage(id_product)
            return {success: true, statusCode: 200, datas: {
                result,
                averageRating: productAverage._avg.rating ?? 0,
                totalReviews: productAverage._count.rating ?? 0
            }}
        } catch (error: any)
        {
            if (error instanceof HttpException)
                {
                    return {success: false, statusCode: error.statusCode, message: error.message}
                }
                console.log(error)
                return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}         
        }
    }
}
export{GetAllProductReviewsService}