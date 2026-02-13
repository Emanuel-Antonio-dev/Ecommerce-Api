import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";
import sanitize from "sanitize-html";

class RegisterProductBrandService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async register(datas: productBrandsDatas)
    {
        try
        {
            if(!datas.name)
            {
                return {success: false, statusCode: 400, message:"informe o nome da marca"}
            }
            if(await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"}, undefined, datas.name))
            {
                return {success: false, statusCode: 409, message:"Já existe uma marca com este nome"}
            }
            const result = await this.repository.register({
                name: sanitize(datas.name.trim().toLowerCase(),
            {
                allowedClasses: {},
                allowedAttributes:{},
                allowedTags:[]
            })
            })
            if(!result)
            {
                return {success: false, statusCode: 400, message:"Ocorreu um erro ao cadastrar esta marca"} 
            }
            return {success: true, statusCode: 201, message:"Marca cadastrada com sucesso", datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}             
        }
    }
}
export {RegisterProductBrandService}