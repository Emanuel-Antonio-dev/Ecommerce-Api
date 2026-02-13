import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories"
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories"

class GetAllProductTagsService
{
    constructor(
        private readonly repository: PrismaProductsTagsRepositories,
    ){}

    async getAllProductTagsService(page?: number, limit?: number)
    {
        try
        {
            const take = limit && limit > 0 ? limit : 50
            const currentPage = page && page > 0 ? page : 1
            const skip = (currentPage - 1) * take

            const result = await this.repository.getAllTags(take, skip)
            if(result.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem tasssgs"}
            }
            const totalProducts = await this.repository.countTags()
            const totalPages = Math.ceil(totalProducts / take)
            return {
                success: true,
                statusCode: 200,
                datas: result,
                paginationDatas: {
                    page: currentPage,
                    limit: take,
                    returned: result.length,
                    totalItems: totalProducts,
                    totalPages
                },
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductTagsService}