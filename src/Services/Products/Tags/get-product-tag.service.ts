import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

class GetProductTagsService
{
  constructor(private readonly repository: PrismaProductsTagsRepositories) {}
  async getProductTag(tag: string)
  {
    try
    {
      if (!tag)
      {
        return {success: false,statusCode: 400,message: "Informe a tag",};
      }
      const datas = await this.repository.getTagDatas({action:"getAll"},tag?.toLocaleLowerCase(), undefined);
      if(!datas)
      {
        return {success: false,statusCode: 404, message: "Esta tag não existe",};
      }
      return {success: true,statusCode: 200,datas,};  
    } catch (error: any)
    { 
        console.error("Erro no RegisterProductsTagsService:", error);
        return {success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente.",};
    }
  }
}

export { GetProductTagsService };
