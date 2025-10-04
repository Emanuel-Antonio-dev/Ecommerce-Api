import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

class GetProductDatasService
{
    constructor(
        private readonly repository: PrismaGeneralProductsRepositories
    ){}

    async getProductDatas(id_product: number)
    {
        try
        {
            if(!id_product)
            {
                throw new HttpException(false, 400, "Informe o produto")
            }
            if(!await this.repository.getProductDatas({action:"GetOnlyBasicsDatas"}, id_product, undefined))
            {
                throw new HttpException(false, 404, "Produto não encontrado")
            }
            const productResult = await this.repository.getProductDatas({action:"getAll"}, id_product, undefined)
            if(!productResult)
            {
                throw new HttpException(false, 500, "Ocorreu um erro ao carregar os dados deste produto, tente novamente")
            }
            const productAverage = await this.repository.productAverage(id_product)
            return {success: true, statusCode: 200, datas: {
                ...productResult,
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
export {GetProductDatasService}