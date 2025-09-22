import { accountDatas } from "../../interfaces/Accounts/interface";
import { Prisma } from "@prisma/client";
import { SearchDatasOptions } from "../../interfaces/Shared/search-datas-options.interface";

abstract class IAccountRepositories
{
    abstract register(datas: accountDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<accountDatas>;
    abstract getDatas(mode: SearchDatasOptions, id_account?: string, email?: string): Promise<accountDatas>;
    abstract updateAccount(id_account: string, datas: Partial<accountDatas>, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>;
    abstract deleteAccount(id_account: string): Promise<any>;
}
export { IAccountRepositories };