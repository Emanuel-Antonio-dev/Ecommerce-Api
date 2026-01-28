import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import sanitize from "sanitize-html";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { cloudinary } from "../../../Common/Utils/Uploads/cloudinary-config";

class EditProductDatasService
{
    constructor(
        private readonly repository: PrismaGeneralProductsRepositories,
        private readonly categoryRepository: PrismaProductsCategories
    ){}
    
    async editProductDatas(id_product: number, datas: Partial<generalProductsDatas>)
    {
        try
        {
            if(!id_product)
            {
                throw new HttpException(false, 400, "Informe o produto")
            }
            const existsProduct = await this.repository.getProductDatas({action:"GetOnlyBasicsDatas"}, id_product, undefined)
            if(!existsProduct)
            {
                throw new HttpException(false, 404, "Produto não encontrado")
            }
            const productDatasToUpdate: Partial<generalProductsDatas> = {}
            if(datas.name)
            {
                if(await this.repository.getProductDatas({action:"GetOnlyBasicsDatas"}, undefined, datas.name))
                {
                    throw new HttpException(false, 409, "Já eiste um produto com este nome")
                }
                if(datas.name.length < 3)
                {
                    throw new HttpException(false, 400, "Informe um nome com pelo menos 3 caracteres")
                }
                productDatasToUpdate.name = sanitize(datas.name, {
                    allowedAttributes:{},
                    allowedClasses:{},
                    allowedTags:[]
                })
            }
            if(datas.description)
            {
                if(datas.description.length < 20)
                {
                    throw new HttpException(false, 400, "Informe uma descrição com pelo menos 20 caracteres")
                }
                productDatasToUpdate.description = sanitize(datas.description, {
                    allowedAttributes:{},
                    allowedClasses:{},
                    allowedTags:[]
                })
            }
            if(datas.additional_info)
            {
                if(datas.additional_info.length < 20)
                {
                    throw new HttpException(false, 400, "Informe uma descrição adicional com pelo menos 20 caracteres")
                }
                productDatasToUpdate.additional_info = sanitize(datas.additional_info, {
                    allowedAttributes:{},
                    allowedClasses:{},
                    allowedTags:[]
                })
            }
            if(datas.available)
            {
                productDatasToUpdate.available = datas.available
            }
            if(datas.price)
            {
                if(datas.price <= 0)
                {
                    throw new HttpException(false, 400, "O preço deve ser um inteiro (>= 0)");
                }
                productDatasToUpdate.price = datas.price
            }
            if(datas.id_category_fk)
            {
                if(await this.categoryRepository.getCategoryData({action:"GetOnlyBasicsDatas"},datas.id_category_fk), undefined)
                {
                    throw new HttpException(false, 409, "A categoria selecionada não existe");
                }
                productDatasToUpdate.id_category_fk = datas.id_category_fk
            }
            if(datas.id_brand_fk)
            {
                productDatasToUpdate.id_brand_fk = datas.id_brand_fk
            }
            if(datas.stock)
            {
                productDatasToUpdate.stock = datas.stock
            }
            if(datas.image_url)
            {
                try
                {
                    const updateCloudinaryImage = await cloudinary.uploader.upload(datas.image_url,
                        {
                            folder: "ProductcsImages",
                            public_id: `image-${Date.now()}`,
                            allowed_formats: ["jpg", "jpeg", "png", "webp"],
                        })
                        datas.image_url = updateCloudinaryImage.secure_url
                    } catch (error: any)
                    {
                        console.log(error)
                        throw new HttpException(false, 500, "Ocorreu um erro ao atualizar esta imagm")
                    }
                }
            if(Object.keys(productDatasToUpdate).length === 0)
            {
                throw new HttpException(false, 400, "Informe pelo menos um campo par atualização")
            }
            if(Object.keys(productDatasToUpdate).length > 0)
            {
                const product = await this.repository.editProduct(id_product, productDatasToUpdate)
                if(!product)
                {
                    throw new HttpException(false, 500, "Ocorreu um erro ao atualizar os dados deste produto")
                }
            }
            return {success: true, statusCode: 200, message: "Produto atualizado com sucesso"};
        } catch (error: any)
        {    
            if (error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{EditProductDatasService}