import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { ProductsTagsDatas } from "../../../../interfaces/Products/Tags/interface";
import { IProductsTagsRepositories } from "../tags-repositories";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";

class PrismaProductsTagsRepositories implements IProductsTagsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: ProductsTagsDatas): Promise<any>
    {
        const tagsCreated = [];
        for (const tag of datas.tag)
        {
            const created = await this.prisma.productTags.create({data: {tag: tag,},
        });
        tagsCreated.push(created);
    }
        return tagsCreated;
    }
    async getTagDatas(mode: SearchDatasOptions,tag?: string | string[], id_tag?: number | number[]): Promise<any> {
        if(mode.action === "GetOnlyBasicsDatas")
        {
            if (Array.isArray(tag)) {
            return this.prisma.productTags.findMany({
                where: { tag: { in: tag } },
            });
        }
        if (Array.isArray(id_tag)) {
            return this.prisma.productTags.findMany({
                where: { id_tag: { in: id_tag } },
            });
        }
        if (tag) {
            return this.prisma.productTags.findFirst({ where: { tag } });
        }
        if (id_tag) { 
            return this.prisma.productTags.findFirst({ where: { id_tag } });
        }
        return null;
        }
        if (Array.isArray(tag)) {
            return this.prisma.productTags.findMany({
                where: { tag: { in: tag } }, include:{product: true}
            });
        }
        if (Array.isArray(id_tag)) {
            return this.prisma.productTags.findMany({
                where: { id_tag: { in: id_tag } },include:{product: true}
            });
        }
        if (tag) {
            return this.prisma.productTags.findFirst({ where: { tag }, include:{product: true}});
        }
        if (id_tag) { 
            return this.prisma.productTags.findFirst({ where: { id_tag }, include:{product: true}});
        }
        return null;

    }
    async deleteTag(id_tag: number): Promise<any>
    {
        return await this.prisma.productTags.delete({where:{id_tag: id_tag}})    
    }
    async editTagDatas(id_tag: number, datas: Partial<ProductsTagsDatas>): Promise<any>
    {
        return await this.prisma.productTags.update({where:{id_tag: id_tag}, data:{...datas}})    
    }
    async getAllTagsPerProduct(id_product: number): Promise<any[]> {
        return await this.prisma.tagsPerProducts.findMany({where:{id_product_fk: id_product}, include:{product:true, tag:{select:{tag: true}}}})
    }
    async getAllTags(): Promise<any[]>
    {
        return await this.prisma.productTags.findMany({include:{product:true}})
    }
}
export{PrismaProductsTagsRepositories}