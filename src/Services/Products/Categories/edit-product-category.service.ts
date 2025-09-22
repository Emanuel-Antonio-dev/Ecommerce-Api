import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";

class EditProductCategoryService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async editCategory(id_category: number, datas: Partial<productsCategoriesDatas>)
    {
        try
        {
            if(!id_category)
            {
                return {success: false, statusCode: 400, message: "Informe a categoria"}
            }
            if(!await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"},id_category, undefined))
            {
                return {success: false, statusCode: 400, message: "Categoria não encontrada"}
            }
            const productCategoryDatasToUpdate: Partial<{name: string, description: string}> = {}
            if(datas.name)
            {
                if(await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"}, undefined, datas.name))
                {
                    return {success: false, statusCode: 409, message: "Já existe uma categoria com este nome"}
                }
                if(datas.name.length < 3)
                {
                    return {success: false, statusCode: 400, message:"Informe um nome válido para esta categoria"}
                }
                productCategoryDatasToUpdate.name = datas.name
            }
            if(datas.description)
            {
                productCategoryDatasToUpdate.description = datas.description
            }
            if(Object.keys(productCategoryDatasToUpdate).length === 0)
            {
                return {success: false, statusCode: 400, message: "Informe pelo menos um campo para atualizar"}
            }
            const categoryUpdated = await this.repository.updateCategoryDatas(id_category, datas)
            if(!categoryUpdated)
            {
                return {success: false, statusCode: 400, message: "Ocorreu um erro ao editar estes dados, tente novamente"}
            }
            return {success: true, statusCode: 200, message: "Dados atualizados com sucesso"}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {EditProductCategoryService}