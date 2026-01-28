import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories"

class DeleteProductBrandService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async deleteProductBrand(id_brand: number)
    {
        try
        {
            if(!id_brand)
            {
                return {success: false, statusCode: 400, message: "Informe a marca."}
            }
            if(!await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"}, id_brand, undefined))
            {
                return {success: false, statusCode: 404, message: "Marca não encontrada"}
            }
            const brandResult = await this.repository.deleteProductBrandDatas(id_brand)
            if(!brandResult)
            {
                return {success: false, statusCode: 500, message: "Ocorreu um erro ao deletar os dados desta marca, tente novamente"}
            }
            return {success: true, statusCode: 200, message:"Marca deletada com sucesso"}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {DeleteProductBrandService}