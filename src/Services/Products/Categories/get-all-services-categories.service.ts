import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"

class GetAllProductsCategoriesService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async getAllCategories(page?: number, limit?: number)
    {
        try
        {
            const take = limit && limit > 0 ? limit : 50
            const currentPage = page && page > 0 ? page : 1
            const skip = (currentPage - 1) * take

            const categoriesResult = await this.repository.getAllCategoriesDatas(take, skip)
            if(categoriesResult.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem categorias"}
            }
            const totalProducts = await this.repository.countCategories()
            const totalPages = Math.ceil(totalProducts / take)

            return {
                success: true, 
                statusCode: 200,
                datas: categoriesResult,
                paginationDatas:{
                page: currentPage,
                    limit: take,
                    returned: categoriesResult.length,
                    totalItems: totalProducts,
                    totalPages
                }
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductsCategoriesService}