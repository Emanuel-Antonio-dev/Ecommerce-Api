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
        return await this.prisma.productBrands.findFirst({where, include:{product: {select:{name: true, images:{select:{url: true}}}}}})    
    }
    async getAllProductBrandsDatas(take: number, skip: number): Promise<any[]>
    {
        return await this.prisma.productBrands.findMany({include:{product: {select:{id_product: true,name: true, images:{select:{url: true}}}} }, take, skip})    
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
    async countBrands(): Promise<number> {
        return await this.prisma.productBrands.count()
    }
}
export{ PrismaProductsBrands}