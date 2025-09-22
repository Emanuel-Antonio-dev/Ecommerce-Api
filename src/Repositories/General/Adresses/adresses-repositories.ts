import { Prisma } from "../../../generated/prisma";
import { addressesDatas } from "../../interfaces/Adresses/interface";

abstract class IAddressesRepositories
{
    abstract register(datas: addressesDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<addressesDatas | any>;
    abstract getAddressByUserId(id_user: string): Promise<addressesDatas | any>;
    abstract deleteAsddressByUserId(id_user: string): Promise<any>;
    abstract updateAddressByUserId(id_user: string, datas: Partial<addressesDatas>): Promise<any>;
}
export { IAddressesRepositories}