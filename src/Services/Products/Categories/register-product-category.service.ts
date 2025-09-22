import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import { PrismaClient } from "../../../../generated/prisma";

class RegisterProductCategoryService
{
    constructor(private readonly repository: PrismaProductsCategories){}

    async register(datas: productsCategoriesDatas)
    {
        try
        {
            if(!datas.name || !datas.description)
            {
                return {success: false, statusCode: 400, message:"Preencha todos os campos"}
            }
            if(await this.repository.getCategoryData({action:"GetOnlyBasicsDatas"}, undefined, datas.name))
            {
                return {success: false, statusCode: 409, message:"Já existe uma categoria com este nome"}
            }
            const result = await this.repository.register(datas)
            if(!result)
            {
                return {success: false, statusCode: 400, message:"Ocorreu um erro ao cadastrar esta categoria"} 
            }
            return {success: true, statusCode: 201, message:"Categoria criada com sucesso", datas: result}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}             
        }
    }
}
export {RegisterProductCategoryService}