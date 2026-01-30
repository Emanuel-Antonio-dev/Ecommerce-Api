import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { ProductsTagsDatas } from "../../../interfaces/Products/Tags/interface";
import sanitize from "sanitize-html";

class RegisterProductsTagsService {
  constructor(private readonly repository: PrismaProductsTagsRepositories) {}

  async register(datas: ProductsTagsDatas[] | ProductsTagsDatas) {
    try {
      const tagsArray: ProductsTagsDatas[] = Array.isArray(datas) ? datas : [datas];
      if (tagsArray.length === 0)
      {
        return {success: false,statusCode: 400,message: "Informe pelo menos uma tag.",};
      }
      const normalizedTags: string[] = [];
      tagsArray.forEach((t:ProductsTagsDatas)=>
        {
          if (!t.tag) return;
          const processTag = (str: any) => {
          if (typeof str === "string") {
            const sanitized = sanitize(str.trim(), {
              allowedTags: [],
              allowedAttributes: {},
            });
            if (sanitized) normalizedTags.push(sanitized.toLowerCase());
          }
        };
        if (Array.isArray(t.tag)) {
          t.tag.forEach(str => processTag(str));
        } else {
          processTag(t.tag);
        }
        });
        const uniqueTags = [...new Set(normalizedTags)];
        if (uniqueTags.length !== normalizedTags.length)
        {
          return {success: false,statusCode: 400,message: "Existem tags duplicadas na lista.",};
        }
        for (const tag of uniqueTags)
        {
          if (!tag || tag.length < 3)
          {
            return {success: false,statusCode: 400,message: "Cada tag deve ter pelo menos 3 caracteres.",};
          }
        }
        const existingTags:ProductsTagsDatas[] = await this.repository.getTagDatas({action:"GetOnlyBasicsDatas"},uniqueTags, undefined);
        if (existingTags.length > 0)
        {
          const existingNames = existingTags.map(t => t.tag).join(", ");
          return {success: false,statusCode: 409,message: `As seguintes tags já existem: ${existingNames}`,};
        }
        const createdTags = await this.repository.register({ tag: uniqueTags });
        return {success: true,statusCode: 201,datas: createdTags,};
      } catch (error: any)
      {
        console.error("Erro no RegisterProductsTagsService:", error);
        return {success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente.",};
    }
  }
}

export { RegisterProductsTagsService };
