import { Prisma } from "../../../generated/prisma";
import { usersDatas } from "../../interfaces/Users/interface";
abstract class IUsersRepositories
{
    abstract register(datas: usersDatas, tx:Omit<Prisma.TransactionClient, "$transaction">): Promise<usersDatas | any>
    abstract updateUser(id_user: string, datas: Partial<usersDatas>): Promise<any>
}
export {IUsersRepositories}