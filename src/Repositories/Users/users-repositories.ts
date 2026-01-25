import { Prisma } from "../../../generated/prisma/client";
import { usersDatas } from "../../interfaces/Users/interface";
abstract class IUsersRepositories
{
    abstract register(datas: usersDatas, tx:Omit<Prisma.TransactionClient, "$transaction">): Promise<usersDatas | any>
    abstract updateUser(id_user: string, datas: Partial<usersDatas>, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract getUsersProfileDatas(id_user: string, user_type?: "admin" | "client"):Promise<any>
    abstract deleteUserProfile(id_user: string,  tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
}
export {IUsersRepositories}