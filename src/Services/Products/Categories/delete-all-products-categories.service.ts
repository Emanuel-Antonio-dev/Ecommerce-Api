import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories"

class DeleteAllProductsCategories
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async deleteAllServiceCategories()
    {
        try
        {
            if((await this.repository.getAllCategoriesDatas()).length === 0)
            {
                return {success: false, statusCode: 404, message:"Não existem categorias para serem deletadas"}
            }
            const categoryResult = await this.repository.deleteAllCategories()
            if(!categoryResult)
            {
                return {success: false, statusCode: 500, message: "Ocorreu um erro ao deletar as categorias, tente novamente"}
            }
            return {success: true, statusCode: 200, message:"Categorias deletadas com sucesso"}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {DeleteAllProductsCategories}