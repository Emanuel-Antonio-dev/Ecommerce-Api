import { IUsersRepositories } from "../users-repositories";
import { Prisma, PrismaClient} from "@prisma/client";
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
                id_user: nanoid(),
                first_name: datas.first_name,
                last_name: datas.last_name,
                user_type: datas.user_type,
                id_account_fk: datas.id_account_fk
            }
        })
    }
    async getUsersProfileDatas(id_user: string, user_type?: "admin" | "client"): Promise<any>
    {
        const where = id_user ? {id_user: id_user} : {user_type: user_type}
        return await this.prisma.users.findFirst({where: where, include:{account_details: true, my_contacts: true, my_addresses: true}})
    }
    async updateUser(id_user: string, datas: Partial<usersDatas>, ): Promise<any>
    {
        console.log(datas)
        return await this.prisma.users.update({where:{id_user: id_user}, data:{...datas}})
    }
    async deleteUserProfile(id_user: string,  tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.users.delete({where:{id_user: id_user}})    
    }
}
export{PrismaUsersRepositories}