import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { productsCategoriesDatas } from "../../../../interfaces/Products/Categories/interface";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";
import { IProductsCategories } from "../products-categories-repositories";

class PrismaProductsCategories implements IProductsCategories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: productsCategoriesDatas): Promise<any>
    {
        return await this.prisma.productsCategories.create({data:{...datas}})
    }
    async getCategoryData(mode: SearchDatasOptions,id_category?: number, name?: string): Promise<any>
    {
        const where = id_category ? {id_category: id_category} : {name: name}
        if(mode.action === "GetOnlyBasicsDatas")
        {
            return await this.prisma.productsCategories.findFirst({where})
        }
        return await this.prisma.productsCategories.findFirst({where, include:{product:true}})    
    }
    async getAllCategoriesDatas(): Promise<any[]>
    {
        return await this.prisma.productsCategories.findMany({include:{product: true }})    
    }
    async updateCategoryDatas(id_category: number, datas: Partial<productsCategoriesDatas>): Promise<any>
    {
        return await this.prisma.productsCategories.update({where:{id_category: id_category}, data:{...datas}})    
    }
    async deleteCategoryDatas(id_category: number): Promise<any>
    {
        return await this.prisma.productsCategories.delete({where:{id_category: id_category}})    
    }
    async deleteAllCategories(): Promise<any>
    {
        return await this.prisma.productsCategories.deleteMany()    
    }
}
export{ PrismaProductsCategories}