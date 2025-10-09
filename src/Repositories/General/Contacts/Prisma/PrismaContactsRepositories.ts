import { IContactsRepositories } from "../contact-repositories";
import { Prisma } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { contactsDatas } from "../../../../interfaces/General/Contacts/interface";
import { nanoid } from "nanoid";

class PrismaContactsRepositories implements IContactsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: contactsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<contactsDatas>
    {
        const client = tx || this.prisma
        return await client.contacts.create({data:{
            id_contact: nanoid(),
            phone_number: datas.phone_number,
            id_user_fk:datas.id_user_fk
        }})
    }
    async getContact(phone_number: string): Promise<contactsDatas | any>
    {
        return await this.prisma.contacts.findFirst({where:{phone_number: phone_number}})
    }
    async updateContact(id_contact: string, datas: Partial<contactsDatas>): Promise<any>
    {
        return await this.prisma.contacts.update({where:{id_contact: id_contact}, data:{phone_number: datas.phone_number}})    
    }
}
export {PrismaContactsRepositories}