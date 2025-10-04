import { reviewsDatas } from "../../../interfaces/Products/Reviews/interface";
import { PrismaProductReviewsRepositories } from "../../../Repositories/Products/Reviews/Prisma/PrismaReviewsRepositories";
import sanitize from "sanitize-html";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class RegisterProductReviewService
{
    constructor(
        private readonly repository: PrismaProductReviewsRepositories,
        private readonly userRepository: PrismaUsersRepositories,
        private readonly productRepository: PrismaGeneralProductsRepositories
    ){}

    async registerProductReview(datas: reviewsDatas)
    {
        try
        {
            if(!datas.comment || !datas.rating || !datas.id_product_fk || !datas.id_user_fk)
            {
                throw new HttpException(false, 400, "Informe todos os campos")
            }
            if(!await this.userRepository.getUsersProfileDatas(datas.id_user_fk))
            {
                throw new HttpException(false, 404, "Este usuário não existe")
            }
            if(!await this.productRepository.getProductDatas({action:"GetOnlyBasicsDatas"}, datas.id_product_fk, undefined))
            {
                throw new HttpException(false, 404, "Este produto não existe")
            }
            if(await this.repository.getReviewsByUserid(datas.id_user_fk))
            {
                throw new HttpException(false, 409, "Você já avaliou este produto.");
            }
            if(datas.rating < 1 || datas.rating > 5)
            {
                throw new HttpException(false, 400, "O rating deve ser entre 1 e 5.")
            }
            const result = await this.repository.register({
                ...datas,
                comment: sanitize(datas.comment, {
                    allowedAttributes:{},
                    allowedClasses:{},
                    allowedTags:[]
                }),
            })
            if(!result)
            {
                throw new HttpException(false, 500, "Ocorreu um erro, tente novamente")
            }
            return {success: true, statusCode: 201, message:"A sua avaliação foi registrada com sucesso", datas: result}
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
export{RegisterProductReviewService}