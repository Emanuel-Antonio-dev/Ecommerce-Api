import { accountDatas } from "../../../../interfaces/General/Accounts/interface";
import { IAccountRepositories } from "../account-repositories";
import { SearchDatasOptions } from "../../../../interfaces/Shared/search-datas-options.interface";
import {nanoid} from "nanoid";
import bcrypt from "bcrypt";
import { Prisma, PrismaClient } from "../../../../../generated/prisma";

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
        return await client.accounts.create({
            data:{
                id_account: nanoid(),
                email: datas.email,
                password: await bcrypt.hash(datas.password, 12),
                verified: false
            }
        })
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