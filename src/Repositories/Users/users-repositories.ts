import { Prisma } from "../../../generated/prisma/client";
import { usersDatas } from "../../interfaces/Users/interface";
abstract class IUsersRepositories
{
    abstract register(datas: usersDatas, tx:Omit<Prisma.TransactionClient, "$transaction">): Promise<usersDatas | any>
    abstract updateUser(id_user: number, datas: Partial<usersDatas>, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract getUsersProfileDatas(id_user: number, user_type?: "admin" | "client"):Promise<any>
    abstract deleteUserProfile(id_user: number,  tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
}
export {IUsersRepositories}