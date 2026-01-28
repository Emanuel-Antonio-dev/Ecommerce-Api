import sanitize from "sanitize-html";
import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";

class EditProductBrandService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async editBrand(id_brand: number, datas: Partial<productBrandsDatas>)
    {
        try
        {
            if(!id_brand && !datas.name)
            {
                return {success: false, statusCode: 400, message: "Informe todos os dados da marca"}
            }
            if(!await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"},id_brand, undefined))
            {
                return {success: false, statusCode: 400, message: "Marca não encontrada"}
            }
            const productCategoryDatasToUpdate: Partial<{name: string, description: string}> = {}
            if(datas.name)
            {
                if(await this.repository.getProductBrandData({action:"GetOnlyBasicsDatas"}, undefined, datas.name))
                {
                    return {success: false, statusCode: 409, message: "Já existe uma marca com este nome"}
                }
                if(datas.name.length < 3)
                {
                    return {success: false, statusCode: 400, message:"Informe um nome válido para esta marca"}
                }
                productCategoryDatasToUpdate.name = sanitize(datas.name.trim(),{
                    allowedClasses:{},
                    allowedAttributes:{},
                    allowedTags:[]
                })
            }
            const brandUpdated = await this.repository.updateProductBrandDatas(id_brand, datas)
            if(!brandUpdated)
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
export {EditProductBrandService}