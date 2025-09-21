import { contactsDatas } from "../../interfaces/Contacts/interface";
import { Prisma } from "../../../generated/prisma";
import { accountDatas } from "../../interfaces/Accounts/interface";

abstract class IContactsRepositories
{
    abstract register(datas:contactsDatas, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<contactsDatas | any>
    abstract getContact(phone_number: string):Promise<accountDatas | any>
    abstract updateContact(id_contact: string, datas: Partial<accountDatas>):Promise<any>
}
export{IContactsRepositories}