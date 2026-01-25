import { Prisma } from "../../../../generated/prisma/client";
import { addressesDatas } from "../../../interfaces/General/Adresses/interface";

abstract class IAddressesRepositories
{
    abstract register(datas: addressesDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<addressesDatas | any>;
    abstract getAddressByUserId(id_user: string): Promise<addressesDatas | any>;
    abstract deleteAsddressByUserId(id_address: string): Promise<any>;
    abstract updateAddressByUserId(id_address: string, datas: Partial<addressesDatas>): Promise<any>;
}
export { IAddressesRepositories}