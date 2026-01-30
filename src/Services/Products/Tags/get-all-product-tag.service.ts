import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories"
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories"

class GetAllProductTagsService
{
    constructor(
        private readonly repository: PrismaProductsTagsRepositories,
    ){}

    async getAllProductTagsService()
    {
        try
        {
            const result = await this.repository.getAllTags()
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem tasssgs"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductTagsService}