import { accountDatas } from "../../../../interfaces/General/Accounts/interface";
import { IAccountRepositories } from "../account-repositories";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";
import bcrypt from "bcrypt";
import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { Providers } from "../../../../../generated/prisma/client";
import crypto from "node:crypto";

class PrismaAccountRepositories implements IAccountRepositories
{
    constructor(private readonly prisma: PrismaClient){}
    async getDatas(mode: SearchDatasOptions, id_account?: string, email?: string): Promise<accountDatas | any> {
        
        const where = id_account ? {id_account} : {email};
        
        if(mode.action === "GetOnlyBasicsDatas")
        {
            return await this.prisma.accounts.findUnique({where: where, include:{user_details: true}});
        }
        else if(mode.action === "getAll" )
        {
            return await this.prisma.accounts.findUnique({where: where, include:{user_details: {include:{my_addresses: true, my_contacts: true}}}});
        }

        return null;
    }
    async register(datas: accountDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<accountDatas>
   {
        const client = tx ?? this.prisma
        const id_account = crypto.randomUUID()
        const hashedPassword = datas.password ? await bcrypt.hash(datas.password, 12) : id_account

        const provider: Providers = (() => {
            const p = datas.provider?.toLowerCase()
            if (p === "google") return Providers.Google
            if (p === "facebook") return Providers.Facebook
            return Providers.Local
        })()

        const result = await client.accounts.create({
            data: {
                id_account: id_account,
                email: datas.email,
                password: hashedPassword,
                provider,
                provider_id: datas.providerId || null
            }
        })
        return {
            id_account: result.id_account,
            email: result.email,
            password: result.password!,
            created_at: result.created_at,
            updated_at: result.updated_at,
            verified: result.verified,
            is_active: result.is_active,
            provider: result.provider,
            providerId: result.provider_id ?? undefined
        }
    }
    async updateAccount(id_account: string, datas: Partial<accountDatas>): Promise<any>
    {
        return await this.prisma.accounts.update({
            where:{id_account: id_account},
            data: {...datas}
        })
    }
    async deleteAccount(id_account: string, tx:Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.accounts.delete({where:{id_account: id_account}})
    }

}
export { PrismaAccountRepositories };