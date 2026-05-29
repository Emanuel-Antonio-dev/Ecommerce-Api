import crypto from "node:crypto"
import { Prisma, PrismaClient } from "../../../../generated/prisma/client";
import { OtpDatas } from "../../../interfaces/Shared/authentication.interface";
import { AuthenticationsRepositories } from "../Authentications-repositories";
import { AuthenticationDatas, TokenDatas } from "../../../interfaces/Shared/authentication.interface";

class PrismaAuthenticationsRepositories implements AuthenticationsRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async initAuthenticationDatas(datas: AuthenticationDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return client.authentications.create({data:{
            id_authentication: crypto.randomUUID(),
            used: datas.used,
            expire_in: new Date(datas.expireIn),
            type: datas.type,
            id_account_fk: datas.id_account_fk,
            temp_email: datas.temp_email,
            temp_phone_number: datas.temp_phone_number
        }})    
    }
    async findAuthenticationDatas(id_authentication: string): Promise<any>
    {
        return await this.prisma.authentications.findUnique({where:{id_authentication: id_authentication}, include:{two_factor_auth_details: true, account_details: true}})    
    }
    async editAuthenticationDatas(id_authentication: string, used: boolean, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.authentications.update({where:{id_authentication: id_authentication}, data:{used: used}})    
    }
    async registerToken(datas: TokenDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return client.tokens.create({
            data:{
                id_token: crypto.randomUUID(),
                token: datas.token,
                token_type:datas.token_type,
                id_authentication_fk: datas.id_authentication
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
    async registerOtpCode(datas: OtpDatas, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.twoFactorAuth.create({
            data:{
                id_two_factor_auth: crypto.randomUUID(),
                otp_code_hash: datas.otp_code,
                id_authentication_fk: datas.id_authentication_fk,
            }
        })
    }
        async findOtpCodeDatas(email?: string, phone_number?: string): Promise<any>
    {
        if(email)
        {
            return await this.prisma.twoFactorAuth.findFirst({where:{authentication_details:{temp_email: email,used: false, expire_in:{gt: new Date()}}}, include:{authentication_details:{include:{account_details: true}}}})
        }
        return await this.prisma.twoFactorAuth.findFirst({where:{authentication_details:{temp_phone_number: phone_number, used: false, expire_in:{gt: new Date()}}}, include:{authentication_details:{include:{account_details: true}}}})
    }
    async incrementOtpAttempts(id_two_factor_auth: string, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.twoFactorAuth.update({where:{id_two_factor_auth:id_two_factor_auth }, data:{
            attempts: {increment: 1}
        }})
    }
    async lockOtpCode(id_two_factor_auth: string, tx?: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma;
        return await client.twoFactorAuth.update({where:{id_two_factor_auth: id_two_factor_auth}, data:{locked: true}})    
    }
    async deleteOtpCodeDatas(id_two_factor_auth: string, tx?: Omit<Prisma.TransactionClient, "$transaction"> ): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.twoFactorAuth.delete({where:{id_two_factor_auth: id_two_factor_auth}})
    }
    async invalidateActiveAuthentications(params: { email?: string; phone_number?: string },tx?: Omit<Prisma.TransactionClient, "$transaction">):Promise<any>
    {
        const client = tx ?? this.prisma;
        
        const activeAuthentications = await client.authentications.findMany({where: {used: false,
            expire_in: {gt: new Date(),},OR: [params.email ? { temp_email: params.email } : undefined,params.phone_number ? { phone_number: params.phone_number } : undefined,].
            filter(Boolean) as any,},include: {two_factor_auth_details: true,},});
            if (!activeAuthentications.length)
                {
                    return;
                }
                for (const auth of activeAuthentications)
                {
                    await client.authentications.update({where: { id_authentication: auth.id_authentication },data: { used: true },
                });
                if (auth.two_factor_auth_details)
                {
                    await client.twoFactorAuth.delete({where: {id_two_factor_auth:auth.two_factor_auth_details.id_two_factor_auth,},
                });
            }
        }
    }
        async findValidOtp(params: { email?: string; phone_number?: string }):Promise<any> {
            return this.prisma.twoFactorAuth.findFirst({where: {locked: false,authentication_details: {used: false,expire_in: { gt: new Date() },
            OR: [params.email ? { temp_email: params.email } : undefined,params.phone_number ? { temp_phone_number: params.phone_number } : undefined,].filter(Boolean) as any,},
        },
        include: {authentication_details: true,},});}
}
export{PrismaAuthenticationsRepositories}