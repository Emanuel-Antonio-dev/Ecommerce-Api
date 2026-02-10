import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

class DeleteProductTagService
{
  constructor(private readonly repository: PrismaProductsTagsRepositories) {}
  async deleteTag(id_tag: number)
  {
    try
    {
        if(!id_tag)
        {
            return {success: false,statusCode: 400,message: "Informe a tag não."};   
        }
        const exists = await this.repository.getTagDatas({action:"GetOnlyBasicsDatas"},undefined,id_tag);
        if (!exists)
        {
            return {success: false,statusCode: 404,message: "Tag não encontrada.",};
        }
        const result = await this.repository.deleteTag(id_tag);
        if(!result)
        {
            return {success: false,statusCode: 500,message: "Ocorreu um erro ao remover essa tag."};
        }
        return {success: true,statusCode: 200,message: "Tag removida com sucesso",};   
    } catch (error: any)
    {
        console.error("Erro no EliminarProductsTagsService:", error);
        return {success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente.",};    
    }
  }
}

export { DeleteProductTagService };
