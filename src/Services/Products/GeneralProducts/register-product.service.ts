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
import { RegisterProductVariantService } from "../Variants/register-product-variant.service";
import { ProductVariantDatas } from "../../../interfaces/Products/Variants/interface";
import { cacheService } from "../../../lib/cache.service";

class RegisterGeneralProductService {
  constructor(
    private readonly prisma: typeof prismaService,
    private readonly repository: PrismaGeneralProductsRepositories,
    private readonly imagesRepository: PrismaProductsImages,
    private readonly categoryRepository: PrismaProductsCategories,
    private readonly brandRepository: PrismaProductsBrands,
    private readonly tagRepository: PrismaProductsTagsRepositories,
    private readonly variantsService: RegisterProductVariantService
  ) {}

  async registerProducts(datas: generalProductsDatas & Partial<ProductVariantDatas>) {
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
        !datas.is_featured ||
        !datas.weight
      ) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const nameSanitized = sanitize(datas.name.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });
      const descriptionSanitized = sanitize(datas.description.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });
      const additionalInfoSanitized = sanitize(datas.additional_info.trim(), { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] });

      if (nameSanitized.length < 3) throw new HttpException(false, 400, "O nome do produto muito curto");
      if (additionalInfoSanitized.length < 20) throw new HttpException(false, 400, "A descrição do produto muito curta");
      if (datas.price <= 0) throw new HttpException(false, 400, "O preço do produto deve ser maior que 0");
      if (datas.weight <= 0) throw new HttpException(false, 400, "O peso do produto deve ser maior que 0");
      if (datas.size && datas.size.length > 20) throw new HttpException(false, 400, "O tamanho do produto é muito longo, máximo de 20 caracteres");
      if (datas.color && datas.color.length > 30) throw new HttpException(false, 400, "A cor do produto é muito longa, máximo de 30 caracteres");
      if (datas.stock && datas.stock < 0) throw new HttpException(false, 400, "O estoque do produto deve ser um valor positivo");

      // limite de imagens por produto
      if (datas.image_url.length > 10) {
        throw new HttpException(false, 400, "Máximo de 10 imagens por produto");
      }

      const existsProduct = await this.repository.getProductDatas({ action: "GetOnlyBasicsDatas" }, undefined, nameSanitized);
      if (existsProduct) throw new HttpException(false, 409, "Este produto já existe");

      const categoryExists = await this.categoryRepository.getCategoryData({ action: "GetOnlyBasicsDatas" }, datas.id_category_fk, undefined);
      if (!categoryExists) throw new HttpException(false, 404, "A categoria selecionada não existe");

      const brandExists = await this.brandRepository.getProductBrandData({ action: "GetOnlyBasicsDatas" }, datas.id_brand_fk, undefined);
      if (!brandExists) throw new HttpException(false, 404, "A marca selecionada não existe");

      const uniqueTagIds = [...new Set(datas.id_tags as number[])];
      const existingTags = await this.tagRepository.getTagDatas({ action: "GetOnlyBasicsDatas" }, undefined, uniqueTagIds);
      if (existingTags.length !== uniqueTagIds.length) throw new HttpException(false, 404, "Uma ou mais tags não existem");

      // ── upload para Cloudinary ──────────────────────────────────────
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

      // ── monta payload de imagens com is_main e display_order ────────
      // a primeira imagem (índice 0) é sempre a principal
      const imagesPayload = uploadResult.map((result, idx) => ({
        url: result.secure_url,
        is_main: idx === 0,       // primeira imagem → imagem principal
        display_order: idx,       // ordem respeitada pela posição no array enviado
      }));

      // ── transação ───────────────────────────────────────────────────
      const transactionResult = await this.prisma.$transaction(async (tx) => {
        const product = await this.repository.register(
          {
            name: nameSanitized,
            description: descriptionSanitized,
            additional_info: additionalInfoSanitized,
            id_category_fk: datas.id_category_fk,
            id_brand_fk: datas.id_brand_fk,
            price: datas.price,
            is_featured: datas.is_featured,
            available_stock: datas.available_stock,
            id_tags: datas.id_tags,
            weight: datas.weight
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

        // passa is_main e display_order para o repository
        const images = await this.imagesRepository.registerImages(
          {
            images: imagesPayload,
            id_product_fk: product.id_product,
          },
          tx
        );

        const variants = await this.variantsService.execute(
          {
            id_product_fk: product.id_product,
            sku: `SKU-${Date.now()}`,
            stock: datas.available_stock || 0,
            price: datas.price,
            color: sanitize(datas.color!, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] }),
            size: datas.size
          },
          tx
        );

        if (!variants.success) {
          throw new HttpException(false, variants.statusCode, variants.message);
        }

        return { product, tagsPerProductCreated, images };
      }, { timeout: 45000 });

      // ✅ invalida listas de produtos (a nova lista/produto em destaque pode
      // ter mudado o resultado de qualquer página cacheada)
      cacheService.invalidateProducts();

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
          is_featured: datas.is_featured,
          id_tags: transactionResult.tagsPerProductCreated.map((ids) => ({
            id_tag: ids.id_tag_fk
          })),
          product_images: transactionResult.images.map((img: any) => ({
            url: img.url,
            is_main: img.is_main,
            display_order: img.display_order,
          })),
          product_available: transactionResult.product.available,
          product_weight: transactionResult.product.weight,
          product_color: transactionResult.product.color,
          product_size: transactionResult.product.size,
          product_stock: transactionResult.product.stock,
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

export { RegisterGeneralProductService };