import { Prisma } from "../../../generated/prisma/client";
import { OtpDatas } from "../../interfaces/Shared/authentication.interface";
import { AuthenticationDatas, TokenDatas } from "../../interfaces/Shared/authentication.interface";

abstract class AuthenticationsRepositories
{
    abstract initAuthenticationDatas(datas: AuthenticationDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract findAuthenticationDatas(id_authentication: string): Promise<any>
    abstract editAuthenticationDatas(id_authentication: string, used: boolean, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>

    abstract registerToken(datas: TokenDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract findToken(token: string, type_token: "refreshToken" | "resetPassword"):Promise<any>
    abstract updateToken(token: string, isUsed: boolean):Promise<any>
    abstract deleteToken(token: string): Promise<any>
    
    abstract registerOtpCode(datas: OtpDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    abstract findOtpCodeDatas(email?: string, phone_number?: string):Promise<any>
    abstract incrementOtpAttempts(id_two_factor_auth: string, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract lockOtpCode(id_two_factor_auth: string, tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract deleteOtpCodeDatas(id_two_factor_auth: string, tx: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract invalidateActiveAuthentications(params: { email?: string; phone_number?: string },tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    abstract findValidOtp(params: { email?: string; phone_number?: string }, tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>

}
export{AuthenticationsRepositories}