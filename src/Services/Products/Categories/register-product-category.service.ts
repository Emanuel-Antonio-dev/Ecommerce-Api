import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import slugify from "slugify";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { cacheService } from "../../../lib/cache.service";

import sanitize from "sanitize-html";

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
            const slugFormatted = slugify(datas.name, {lower: true,strict: true,trim: true});
            if (!slugFormatted)
            {
                throw new HttpException(false, 400, "Não foi possível gerar o slug");
            }
            const alreadyExistsCategory = await this.repository.getCategoryData({ action: "GetOnlyBasicsDatas" }, undefined, datas.name, undefined);
            if (alreadyExistsCategory)
            {
                throw new HttpException(false, 409, "Esta categoria já existe");
            }
            const alreadyExistsSlug = await this.repository.getCategoryData({ action: "GetOnlyBasicsDatas" },undefined,undefined,slugFormatted);
            if (alreadyExistsSlug)
            {
                throw new HttpException(false, 409, "Este slug já está em uso");
            }
            const categoryResult = await this.repository.register({
                name: sanitize(datas.name, {
                    allowedTags: [],
                    allowedAttributes: {},
                }),
                slug: sanitize(slugFormatted, {
                    allowedTags: [],
                    allowedAttributes: {},
                }),
                description: sanitize(datas.description, {
                    allowedTags: [],
                    allowedAttributes: {},
                }),
            });

            if (!categoryResult)
            {
                throw new HttpException(false,500,"Ocorreu um erro ao criar esta categoria, tente novamente");
            }
            cacheService.invalidateCategories();
            return {success: true, statusCode: 201, message:"Categoria criada com sucesso", datas: categoryResult}
        } catch (error: any)
        {
            if (error instanceof HttpException) return { success: false, statusCode: error.statusCode, message: error.message };
            
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}             
        }
    }
}
export {RegisterProductCategoryService}