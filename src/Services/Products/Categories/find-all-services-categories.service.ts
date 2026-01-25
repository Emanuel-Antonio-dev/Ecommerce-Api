import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"

class GetAllProductsCategoriesService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async getAllCategories()
    {
        try
        {
            const categoriesResult = await this.repository.getAllCategoriesDatas()
            if(categoriesResult.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem categorias"}
            }
            return {success: true, statusCode: 200, datas: categoriesResult}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductsCategoriesService}