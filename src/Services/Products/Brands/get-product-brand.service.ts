import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories";

class GetProductsBrandDatasService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async getBrand(id_brand: number)
    {
        try
        {
            if(!id_brand)
            {
                return {success: false, statusCode: 400, message:"Informe a marca"}
            }
            if(!await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"},id_brand, undefined))
            {
                return {success: false, statusCode: 404, message:"Marca não encontrada"}
            }
            const result = await this.repository.getProductBrandData({action:"getAll"}, id_brand, undefined)
            if(!result)
            {
                return {success: false, statusCode: 500, message:"Ocorreu um erro ao retornar os dados desta marca, tente novamente"}
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetProductsBrandDatasService}