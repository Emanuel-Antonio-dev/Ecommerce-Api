import { nanoid } from "nanoid";
import { Prisma, PrismaClient } from "../../../../generated/prisma";
import { AuthenticationsRepositories } from "../Authentications-repositories";
import { AuthenticationDatas, TokenDatas } from "../../../interfaces/Shared/authentication.interface";

class PrismaAuthenticationsRepositories implements AuthenticationsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: AuthenticationDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return client.authentications.create({data:{
            id_authentication: nanoid(),
            used: datas.used,
            expireIn: new Date(datas.expireIn),
            type: datas.type,
            id_account_fk: datas.id_account_fk
        }})    
    }
    async registerToken(datas: TokenDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return client.tokens.create({
            data:{
                id_token: nanoid(),
                token: datas.token,
                token_type:datas.token_type,
                id_authentication: datas.id_authentication
            }
        })
    }
    async findToken(token: string, type_token: "refreshToken" | "resetPassword"): Promise<any> {
        return await this.prisma.tokens.findUnique({where:{token:token, token_type: type_token}, include:{authentication_details:{include:{account_details: true}}}})
    }
    async updateToken(token: string, isUsed: boolean): Promise<any> {
        return await this.prisma.tokens.update({where:{token: token}, data:{authentication_details:{update:{used:isUsed}}}})
    }
    async deleteToken(token: string): Promise<any> {
        return await this.prisma.tokens.delete({where:{token: token}})
    }
}
export{PrismaAuthenticationsRepositories}