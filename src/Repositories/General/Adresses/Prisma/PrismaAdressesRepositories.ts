import { IAddressesRepositories } from "../adresses-repositories";
import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { addressesDatas } from "../../../../interfaces/General/Adresses/interface";
import crypto from "node:crypto";

class PrismaAddressesRepositories implements IAddressesRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: addressesDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<addressesDatas |any>
    {
        const client = tx ?? this.prisma
        return await client.addresses.create({data:{
            id_address: crypto.randomUUID(),
            street: datas.street,
            city: datas.city,
            province: datas.province,
            reference: datas.reference,
            is_default: false,
            id_user_fk: datas.id_user_fk
        }})
    }
    async getAddressByUserId(id_user: number): Promise<addressesDatas | any>
    {
        return await this.prisma.addresses.findFirst({where:{id_user_fk: id_user}})
    }
    async deleteAsddressByUserId(id_address: string): Promise<any>
    {
        return this.prisma.addresses.delete({where:{id_address: id_address}})
    }
    async updateAddressByUserId(id_address: string, datas: Partial<addressesDatas>): Promise<any>
    {
        console.log(id_address, datas)
        return await this.prisma.addresses.update({where:{id_address: id_address}, data:{...datas}})
    }

}
export {PrismaAddressesRepositories}