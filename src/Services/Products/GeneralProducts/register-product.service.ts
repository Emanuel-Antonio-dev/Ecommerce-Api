import sanitize from "sanitize-html";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { prismaService } from "../../../lib/prisma.service";
import { cloudinary } from "../../../Common/Utils/Uploads/cloudinary-config";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface";
import { PrismaProductsImages } from "../../../Repositories/Products/GeneralProducts/Images/Prisma/PrismaImagesRepositories";
import { PrismaProductsCategories } from "../../../Repositories/Products/Categories/Prisma/PrismaProductsCategories";
import { PrismaProductsBrands } from "../../../Repositories/Products/Brands/Prisma/prisma-products-brands";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

class RegisterGeneralProductService {
  constructor(
    private readonly prisma: typeof prismaService,
    private readonly repository: PrismaGeneralProductsRepositories,
    private readonly imagesRepository: PrismaProductsImages,
    private readonly categoryRepository: PrismaProductsCategories,
    private readonly brandRepository: PrismaProductsBrands,
    private readonly tagRepository: PrismaProductsTagsRepositories
  ) {}

  async registerProducts(datas: generalProductsDatas) {
    try {
      if (
        !datas.name ||
        !datas.description ||
        !datas.additional_info ||
        !datas.price ||
        !datas.id_category_fk ||
        !datas.id_brand_fk ||
        !datas.image_url?.length ||
        !datas.id_tags?.length ||
        !datas.stock
      ) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const nameSanitized = sanitize(datas.name.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });
      const descriptionSanitized = sanitize(datas.description.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });
      const additionalInfoSanitized = sanitize(datas.additional_info.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });

      if (nameSanitized.length < 3) throw new HttpException(false, 400, "Nome do produto muito curto");
      if (additionalInfoSanitized.length < 20) throw new HttpException(false, 400, "Descrição do produto muito curta");
      if (datas.price <= 0) throw new HttpException(false, 400, "Preço deve ser maior que 0");

      const existsProduct = await this.repository.getProductDatas({ action: "GetOnlyBasicsDatas" }, undefined, nameSanitized);
      if (existsProduct) throw new HttpException(false, 409, "Produto já existe");

      const categoryExists = await this.categoryRepository.getCategoryData({ action: "GetOnlyBasicsDatas" }, datas.id_category_fk, undefined);
      if (!categoryExists) throw new HttpException(false, 404, "Categoria não existe");

      const brandExists = await this.brandRepository.getProductBrandData({ action: "GetOnlyBasicsDatas" }, datas.id_brand_fk, undefined);
      if (!brandExists) throw new HttpException(false, 404, "Marca não existe");

      const uniqueTagIds = [...new Set(datas.id_tags as number[])];
      const existingTags = await this.tagRepository.getTagDatas({action:"GetOnlyBasicsDatas"},undefined, uniqueTagIds);
      if (existingTags.length !== uniqueTagIds.length) throw new HttpException(false, 404, "Uma ou mais tags não existem");

      let uploadResult;
      try {
        uploadResult = await Promise.all(
          datas.image_url.map((path: string, idx: number) =>
            cloudinary.uploader.upload(path, {
              folder: "ProductsImages",
              public_id: `image-${Date.now()}_${idx}`,
              allowed_formats: ["jpg", "jpeg", "png", "webp"],
            })
          )
        );
      } catch (error) {
        console.error("Erro no upload para Cloudinary:", error);
        throw new HttpException(false, 400, "Falha ao enviar imagens");
      }

      const transactionResult = await this.prisma.$transaction(async (tx) => {
        const product = await this.repository.register(
          {
            name: nameSanitized,
            description: descriptionSanitized,
            additional_info: additionalInfoSanitized,
            id_category_fk: datas.id_category_fk,
            id_brand_fk: datas.id_brand_fk,
            price: datas.price,
            stock: datas.stock,
            id_tags: datas.id_tags
          },
          tx
        );
        if (!product) throw new HttpException(false, 500, "Erro ao criar produto");
        const tagsPerProductCreated = await Promise.all(
          uniqueTagIds.map((tagId) =>
            tx.tagsPerProducts.create({
              data: { id_product_fk: product.id_product, id_tag_fk: Number(tagId) },
            })
          )
        );
        const images = await this.imagesRepository.registerImages(
          { image_url: uploadResult.map((r) => r.secure_url), id_product_fk: product.id_product },
          tx
        );
        return { product, tagsPerProductCreated, images };
      },{timeout:45000});

      return {
        success: true,
        statusCode: 201,
        message: "Produto criado com sucesso",
        datas: {
          id_product: transactionResult.product.id_product,
          reference_code: transactionResult.product.reference_code,
          product_name: transactionResult.product.name,
          product_price: transactionResult.product.price,
          product_description: transactionResult.product.description,
          product_aditional_info: transactionResult.product.additional_info,
          id_product_category: datas.id_category_fk,
          id_product_brand: datas.id_brand_fk,
          id_tags: transactionResult.tagsPerProductCreated,
          images: transactionResult.images,
          available: transactionResult.product.available,
          stock: transactionResult.product.stock,
          created_at: transactionResult.product.created_at,
        },
      };
    } catch (error: any) {
      if (error instanceof HttpException) return { success: false, statusCode: error.statusCode, message: error.message };
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export{RegisterGeneralProductService}