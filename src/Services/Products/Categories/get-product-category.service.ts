import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";

class GetProductsCategoryDatasService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async getCategory(id_category: number)
    {
        try
        {
            if(!id_category)
            {
                return {success: false, statusCode: 400, message:"Informe a categoria"}
            }
            if(!await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"},id_category, undefined))
            {
                return {success: false, statusCode: 404, message:"Categoria não encontrada"}
            }
            const result = await this.repository.getCategoryData({action:"getAll"}, id_category, undefined)
            if(!result)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao encontrar esta categoria, tente novamente"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetProductsCategoryDatasService}