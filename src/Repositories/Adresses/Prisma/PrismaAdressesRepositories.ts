import { IAddressesRepositories } from "../adresses-repositories";
import { Prisma } from "../../../../generated/prisma";
import { PrismaClient } from "../../../../generated/prisma";
import { addressesdatas } from "../../../interfaces/Adresses/interface";
import { nanoid } from "nanoid";

class PrismaAddressesRepositories implements IAddressesRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: addressesdatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<addressesdatas>
    {
        const client = tx ?? this.prisma
        return await client.addresses.create({data:{
            id_address: nanoid(),
            street: datas.street,
            city: datas.city,
            id_user_fk: datas.id_user_fk
        }})
    }
    async getAddressByUserId(id_user: string): Promise<addressesdatas | any>
    {
        return await this.prisma.addresses.findFirst({where:{id_user_fk: id_user}})
    }
    async deleteAsddressByUserId(id_user: string): Promise<any>
    {
        return this.prisma.addresses.delete({where:{id_user_fk: id_user}})
    }
    async updateAddressByUserId(id_address: string, datas: Partial<any>): Promise<any>
    {
        return await this.prisma.addresses.update({where:{id_user_fk: id_address}, data:{...datas}})
    }

}
export {PrismaAddressesRepositories}