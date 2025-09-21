import { IUsersRepositories } from "../users-repositories";
import { Prisma } from "../../../../generated/prisma";
import { PrismaClient } from "../../../../generated/prisma";
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
    async updateUser(id_user: string, datas: Partial<usersDatas>): Promise<any>
    {
        return await this.prisma.users.update({where:{id_user: id_user}, data:{...datas}})
    }
}
export{PrismaUsersRepositories}