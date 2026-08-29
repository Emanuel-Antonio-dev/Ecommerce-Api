import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { cacheService } from "../../../lib/cache.service";

class DeleteProductDataService
{
    constructor(private readonly repository: PrismaGeneralProductsRepositories){}

    async deleteProductData(id_product: number)
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
            const productDataResult = await this.repository.deleteProductDatas(id_product)
            if(!productDataResult)
            {
                throw new HttpException(false, 500, "Ocorreu um erro ao deletar os dados desta produto, tente novamente")
            }
            cacheService.invalidateProducts();
            return {success: true, statusCode: 200, message:"Produto deletado com sucesso"}
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
export {DeleteProductDataService}