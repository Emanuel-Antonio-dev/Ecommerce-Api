import { Prisma} from "../../../../generated/prisma/client";
import { RegisterSeoKeywordsDatas,RegisterSeoSettingsDatas } from "../../../interfaces/Settings/interface";

abstract class ISeoSettingsRepositories
{
    abstract initSeoSettingsDatas(datas: Partial<RegisterSeoSettingsDatas>, tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract findSeoDatas(type?: "system", id_seo_settings?: string, seo_title?: string):Promise<any>
    abstract updateSeoDatas(id_seo_settings: string, datas: Partial<RegisterSeoSettingsDatas>):Promise<any>
    abstract registerSeoKeyWordsDatas(datas: RegisterSeoKeywordsDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>

}
export {ISeoSettingsRepositories}