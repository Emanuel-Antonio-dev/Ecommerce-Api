import { Prisma } from "../../../generated/prisma";
import { addressesdatas } from "../../interfaces/Adresses/interface";

abstract class IAddressesRepositories
{
    abstract register(datas: addressesdatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<addressesdatas | any>;
    abstract getAddressByUserId(id_user: string): Promise<addressesdatas | any>;
    abstract deleteAsddressByUserId(id_user: string): Promise<any>;
    abstract updateAddressByUserId(id_user: string, datas: Partial<any>): Promise<any>;
}
export { IAddressesRepositories}