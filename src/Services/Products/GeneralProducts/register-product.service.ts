import sanitize from "sanitize-html";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { prismaService } from "../../../lib/prisma.service";
import { cloudinary } from "../../../Common/Utils/Uploads/cloudinary-config";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";

class RegisterGeneralProductService
{
    constructor(
        private readonly prisma: typeof prismaService,
        private readonly repository: PrismaGeneralProductsRepositories,
        private readonly imagesRepository: PrismaProductsImages,
        private readonly categoryRepository: PrismaProductsCategories,
        private readonly brandRepository: PrismaProductsBrands
    ){}

    async registerProducts(datas: generalProductsDatas)
    {
        try
        {
            if(
                !datas.name
                || !datas.description 
                || !datas.additional_info
                || !datas.price
                || !datas.id_category_fk
                || !datas.id_brand_fk
                || !datas.image_url
                || !datas.stock
            )
            {
                throw new HttpException(false, 400, "Informe todos os campos")
            }
            const existsProduct = await this.repository.getProductDatas({action: "GetOnlyBasicsDatas"}, undefined, sanitize(datas.name, {
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }))
            if(existsProduct)
            {
                throw new HttpException(false, 409, "Já existe um produto com este nome");
            }
            if(datas.name.length < 3)
            {
                throw new HttpException(false, 400, "Informe o nome do produto com pelo menos 3 caracteres")
            }
            if (datas.additional_info.length < 20)
            {
                throw new HttpException(false, 400, "Informe uma descrição para este produto com pelo menos 20 caracteres");
            }
            if (datas.price <= 0) {
                throw new HttpException(false, 400, "O preço deve ser maior que 0");
            }
            if (!Array.isArray(datas.image_url) || datas.image_url.length === 0)
            {
                throw new HttpException(false, 400, "Informe pelo menos uma imagem");
            }
            if(!await this.categoryRepository.getCategoryData({action:"GetOnlyBasicsDatas"}, datas.id_category_fk, undefined))
            {
                throw new HttpException(false, 409, "A categoria selecionada não existe");
            }
            if(!await this.brandRepository.getProductBrandData({action:"GetOnlyBasicsDatas"}, datas.id_brand_fk, undefined))
            {
                throw new HttpException(false, 409, "A marca selecionada não existe");
            }
            let uploadResult
            try
            {
                uploadResult = await Promise.all(
                    datas.image_url.map(async(path: string, index: any)=>{
                        const result = await cloudinary.uploader.upload(path, {
                            folder: "ProductsImages",
                            public_id: `image-${Date.now()}_${index}`,
                            allowed_formats: ["jpg", "jpeg", "png", "webp"],
                        });
                        return result;
                    })
                )    
            } catch (error)
            {
                console.error("Erro no upload para o Cloudinary:", error);
                throw new HttpException( false, 400, "Falha ao enviar a imagem");
            }
            const transaction = await this.prisma.$transaction(async(tx)=>{
                const product = await this.repository.register(
                    {
                        name: sanitize(datas.name.trim(), {
                            allowedAttributes:{},
                            allowedClasses:{},
                            allowedTags:[]
                        }),
                        description: sanitize(datas.description.trim(),
                            {
                                allowedAttributes:{},
                                allowedClasses:{},
                                allowedTags:[]
                            }
                        ),
                        additional_info: sanitize(datas.additional_info.trim(),{
                            allowedAttributes:{},
                            allowedClasses:{},
                            allowedTags:[]
                        }),
                        id_category_fk: datas.id_category_fk,
                        id_brand_fk: datas.id_brand_fk,
                        price: datas.price
                    }, tx
                )
                if (!product)
                {
                    throw new HttpException(false, 500, "Ocorreu um erro ao criar este produto")
                }

                const images = await this.imagesRepository.registerImages({
                image_url: uploadResult.map((urls)=> urls.secure_url),
                id_product_fk: product.id_product
                }, tx);
                if (!images)
                {
                    throw new HttpException(false, 500, "Erro ao inserir imagem");
                }
                return {
                    success: true,
                    statusCode: 201,
                    message:"Produto criado com sucesso",
                    datas:{
                        id_product: product.id_product,
                        reference_code: product.reference_code,
                        product_name: product.name,
                        product_price: product.price,
                        product_description: product.description,
                        product_aditional_info: product.aditional_info,
                        id_product_category: datas.id_category_fk,
                        id_product_brand: datas.id_brand_fk,
                        images: images,
                        available: product.available,
                        stock: datas.stock,
                        created_at: product.created_at
                    }
                }
            }, {timeout: 30000})
            return {success: transaction.success, statusCode: transaction.statusCode, message: transaction.message, datas: transaction.datas}
        } catch (error: any) {
            if (error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
        }
}
export{RegisterGeneralProductService}