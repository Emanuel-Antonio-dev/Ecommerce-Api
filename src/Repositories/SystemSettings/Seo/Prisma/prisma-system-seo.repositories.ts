import { ISeoSettingsRepositories } from "../ISystem-Seo-repositories";
import { PrismaClient } from "../../../../../generated/prisma/client";
import { RegisterSeoSettingsDatas, RegisterSeoKeywordsDatas } from "../../../../interfaces/Settings/interface";
import { Prisma } from "../../../../../generated/prisma/client";
import crypto from "node:crypto"

class PrismaSeoSettingsRepositories implements ISeoSettingsRepositories
{
    constructor(private readonly prisma: PrismaClient){}
    async initSeoSettingsDatas(datas: Partial<RegisterSeoSettingsDatas>, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.seoSettings.create({
            data:{
                id_seo_setting:crypto.randomUUID(),
                seo_title: datas.seo_title!,
                seo_description: datas.seo_description!,
                canonical_url: datas.canonical_url,
                og_title: datas.og_title,
                og_description: datas.og_description,
                og_image: datas.og_image,
                seo_type: datas.seo_type!
            }
        })    
    }
    async registerSeoKeyWordsDatas(datas: RegisterSeoKeywordsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    {
        const client = tx ?? this.prisma
        const keywords = Array.isArray(datas.keywords) ? datas.keywords : [datas.keywords]
        for(const keyword of keywords)
        {
            return await client.seoKeywords.create({
                data:{
                    id_seo_keyword: crypto.randomUUID(),
                    keyword: keyword,
                    id_seo_setting_fk: datas.id_seo_setting_fk,
                }
            })
        }  
    }
    async findSeoDatas(type: "system", id_seo_settings?: string, seo_title?: string): Promise<any>
    {
        if(id_seo_settings)
        {
            return await this.prisma.seoSettings.findFirst({where:{id_seo_setting: id_seo_settings}, include:{keywords_details: {select:{keyword:true}}}})
        }
        return await this.prisma.seoSettings.findFirst({where:{seo_title: seo_title}, include:{keywords_details: true}})
    }
    async updateSeoDatas(id_seo_settings: string, datas: Partial<RegisterSeoSettingsDatas>): Promise<any>
    {
        return await this.prisma.seoSettings.update({where:{id_seo_setting: id_seo_settings}, data:{...datas}})
    }
}
export {PrismaSeoSettingsRepositories}