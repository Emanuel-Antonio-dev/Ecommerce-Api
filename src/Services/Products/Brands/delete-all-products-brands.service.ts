import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories"

class DeleteAllProductsBrandsService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async deleteProductsBrands()
    {
        try
        {
            if((await this.repository.getAllProductBrandsDatas()).length === 0)
            {
                return {success: false, statusCode: 404, message:"Não existem marcas para serem deletadas"}
            }
            const brandResult = await this.repository.deleteAllProductBrands()
            if(!brandResult)
            {
                return {success: false, statusCode: 500, message: "Ocorreu um erro ao deletar as marcas, tente novamente"}
            }
            return {success: true, statusCode: 200, message:"Marcas deletadas com sucesso"}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {DeleteAllProductsBrandsService}