import { AuthenticationsTypes, Prisma } from "../../../generated/prisma";
import { AuthenticationDatas, TokenDatas } from "../../interfaces/Shared/authentication.interface";
abstract class AuthenticationsRepositories
{
    abstract register(datas: AuthenticationDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract registerToken(datas: TokenDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract findToken(token: string, type_token: "refreshToken" | "resetPassword"):Promise<any>
    abstract updateToken(token: string, isUsed: boolean):Promise<any>
    abstract deleteToken(token: string): Promise<any>

    
}
export{AuthenticationsRepositories}