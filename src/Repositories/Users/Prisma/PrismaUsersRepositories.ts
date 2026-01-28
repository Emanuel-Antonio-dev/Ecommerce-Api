import { IUsersRepositories } from "../users-repositories";
import { Prisma, PrismaClient } from "../../../../generated/prisma/client";
import { usersDatas } from "../../../interfaces/Users/interface";
import { nanoid } from "nanoid";

class PrismaUsersRepositories implements IUsersRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: usersDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<usersDatas>
    {
        const client = tx ?? this.prisma
        return await client.users.create({
            data:{
                first_name: datas.first_name,
                last_name: datas.last_name,
                username: datas.username,
                user_type: datas.user_type,
                id_account_fk: datas.id_account_fk
            }
        })
    }
    async getUsersProfileDatas(id_user: number, user_type?: "admin" | "client"): Promise<any>
    {
        const where = id_user ? {id_user: id_user} : {user_type: user_type}
        return await this.prisma.users.findFirst({where: where, include:{account_details: true, my_contacts: true, my_addresses: true}})
    }
    async updateUser(id_user: number, datas: Partial<usersDatas>, ): Promise<any>
    {
        return await this.prisma.users.update({where:{id_user: id_user}, data:{...datas}})
    }
    async deleteUserProfile(id_user: number,  tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.users.delete({where:{id_user: id_user}})    
    }
}
export{PrismaUsersRepositories}