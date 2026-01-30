import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories"
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories"

class GetAllTagsPerProductService
{
    constructor(
        private readonly repository: PrismaProductsTagsRepositories,
        private readonly productRepository: PrismaGeneralProductsRepositories
    ){}

    async getAllTagsPerProductService(id_product: number)
    {
        try
        {
            if(!await this.productRepository.getProductDatas({action:"GetOnlyBasicsDatas"}, id_product, undefined))
            {
                return {success: true, statusCode: 404, message: "Este produto não existe."}
            }
            const result = await this.repository.getAllTagsPerProduct(id_product)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem tags"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllTagsPerProductService}