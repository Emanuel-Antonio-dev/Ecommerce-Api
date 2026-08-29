import { IGeneralProductsRepositories } from "../general-products-repositoires";
import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";
import { generalProductsDatas } from "../../../../interfaces/Products/GeneralProducts/interface";
import crypto from "node:crypto"
import slugify from "slugify";

class PrismaGeneralProductsRepositories implements IGeneralProductsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: generalProductsDatas, tx:Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        const year = new Date().getFullYear();
        return await client.products.create({
            data:{
                name: datas.name,
                additional_info: datas.additional_info,
                price: datas.price,
                reference_code: `RFP${year}-${crypto.randomInt(10000, 999999)}`,
                available: true,
                description: datas.description,
                is_featured: datas.is_featured,
                id_category_fk: datas.id_category_fk,
                id_brand_fk: datas.id_brand_fk,
                weight: datas.weight,
                slug: slugify(datas.name, { lower: true, strict: true }),
                views_count: 0,
                sales_count: 0
            }
        })
    }
    async getProductDatas(mode: SearchDatasOptions, id_product?: number, name?: string): Promise<any>
    {
        const where = id_product ? {id_product: id_product} : {name: name} 
        if(mode.action === "GetOnlyBasicsDatas")
        {
            if(id_product)
            {
            return await this.prisma.products.findFirst({where: where})
            }
        }
        return await this.prisma.products.findFirst({where: where, omit:{id_category_fk:true,id_brand_fk:true,},include:{images: {select:{url:true}}, 
            reviews: {select:{id_review: true,comment: true, rating: true,created_at: true,id_user_fk: true}}, 
            category: {select:{id_category: true,name: true, slug: true, description: true,created_at: true},
        },variants:{
            select:{
                id_variant: true,
                sku: true,
                color: true,
                size: true,
                stock: true,
            }
        },
        brand:{select:{
            id_brand: true,
            name: true,
        }}, 
        tags:{select:{tag:{select:{tag: true}}}}}
        })
    }
    async getAllProductsDatas(take?: number, skip?: number, is_featured?: boolean): Promise<any[]>
    {
        return await this.prisma.products.findMany({
            where: is_featured !== undefined ? { is_featured } : undefined,
            omit:{id_brand_fk: true, id_category_fk:true},include:{images: {select:{url:true}},
            reviews: {select:{id_review: true,comment: true, rating: true,created_at: true,id_user_fk: true}}, 
            category: {select:{id_category: true,name: true, slug: true, description: true,created_at: true}},
            variants:{
                select:{
                    id_variant: true,
                    sku: true,
                    color: true,
                    size: true,
                    stock: true,
                }
            },
            brand:{select:{
            id_brand: true,
            name: true,
        }}, 
        tags:{select:{tag:{select:{tag: true}}}}
    }, orderBy:{created_at:"desc"}, take, skip})    
    }
    async editProduct(id_product: number, datas: Partial<generalProductsDatas>): Promise<any>
    {
        return await this.prisma.products.update({where:{id_product: id_product}, data:{...datas}})    
    }
    async deleteProductDatas(id_product: number): Promise<any>
    {
        return await this.prisma.products.delete({where:{id_product: id_product}})
    }
    async deleteAllProductsDatas(): Promise<any>
    {
        return await this.prisma.products.deleteMany()    
    }
    async productAverage(id_product: number): Promise<any> {
        return await this.prisma.productsReviews.aggregate({
            where:{id_product_fk: id_product},
            _avg:{rating: true},
            _count: {rating: true}
        })
    }
    async countProducts(is_featured?: boolean): Promise<number> {
        return await this.prisma.products.count({
            where: is_featured !== undefined ? { is_featured } : undefined
        })
    }
}
export {PrismaGeneralProductsRepositories}