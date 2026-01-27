import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"

class DeleteProductCategoryService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async deleteServiceCategory(id_category: number)
    {
        try
        {
            if(!id_category)
            {
                return {success: false, statusCode: 400, message: "Informe a categoria."}
            }
            if(!await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"}, id_category, undefined))
            {
                return {success: false, statusCode: 404, message: "Categoria não encontrada"}
            }
            const categoryResult = await this.repository.deleteCategoryDatas(id_category)
            if(!categoryResult)
            {
                return {success: false, statusCode: 500, message: "Ocorreu um erro ao deletar os dados desta categoria, tente novamente"}
            }
            return {success: true, statusCode: 200, message:"Categoria deletada com sucesso"}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {DeleteProductCategoryService}