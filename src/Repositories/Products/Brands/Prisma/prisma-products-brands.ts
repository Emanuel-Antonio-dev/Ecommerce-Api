import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { productBrandsDatas } from "../../../../interfaces/Products/Brands/interface";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";
import { IProductsBrandsRepositories } from "../products-brands-repositories";

class PrismaProductsBrands implements IProductsBrandsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: productBrandsDatas): Promise<any>
    {
        return await this.prisma.productBrands.create({data:{...datas}})
    }
    async getProductBrandData(mode: SearchDatasOptions,id_brand?: number, name?: string): Promise<any>
    {
        const where = id_brand ? {id_brand: id_brand} : {name: name}
        if(mode.action === "GetOnlyBasicsDatas")
        {
            return await this.prisma.productBrands.findFirst({where})
        }
        return await this.prisma.productBrands.findFirst({where, include:{product: true}})    
    }
    async getAllProductBrandsDatas(): Promise<any[]>
    {
        return await this.prisma.productBrands.findMany({include:{product: true }})    
    }
    async updateProductBrandDatas(id_brand: number, datas: Partial<productBrandsDatas>): Promise<any>
    {
        return await this.prisma.productBrands.update({where:{id_brand: id_brand}, data:{...datas}})    
    }
    async deleteProductBrandDatas(id_brand: number): Promise<any>
    {
        return await this.prisma.productBrands.delete({where:{id_brand: id_brand}})    
    }
    async deleteAllProductBrands(): Promise<any>
    {
        return await this.prisma.productBrands.deleteMany()    
    }
}
export{ PrismaProductsBrands}