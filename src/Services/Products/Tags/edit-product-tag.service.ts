import sanitize from "sanitize-html";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

class EditProductTagService
{
  constructor(private readonly repository: PrismaProductsTagsRepositories) {}
  
  async editTag(id_tag: number, tag: string)
  {
    try
    {
      if(!id_tag || tag)
      {
        return {success: false, statusCode: 400, messagae:"Informe todos os dados da tag"}
      }
      if (!tag || tag.trim().length < 3)
      {
        return {success: false,statusCode: 400,message: "A tag deve ter pelo menos 3 caracteres"};
      }
      const sanitizedTag = sanitize(tag.trim().toLowerCase(),
      {
        allowedTags: [],
        allowedAttributes: {},
      });
      const exists = await this.repository.getTagDatas({action:"GetOnlyBasicsDatas"},sanitizedTag);
      if (exists)
      {
        return {success: false,statusCode: 409,message: "Esta tag já existe",};
      }
      const updated = await this.repository.editTagDatas(id_tag, {tag: sanitizedTag});
      if(!updated)
      {
        return {success: false,statusCode: 500,message: "Ocorreu um erro ao atualizar os dados desta tag, tente novamente.",};
      }
      return {success: true,statusCode: 200, message:"Dados da tag atualizados com sucesso."};
    }
    catch(error: any)
    {
      console.log(error)
      return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
    }
  }
}

export { EditProductTagService };
