import { IUsersRepositories } from "../users-repositories";
import { Prisma, PrismaClient } from "../../../../generated/prisma/client";
import { usersDatas } from "../../../interfaces/Users/interface";
import { nanoid } from "nanoid";

class PrismaUsersRepositories implements IUsersRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async register(datas: usersDatas, tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<usersDatas>
    {
        const client = tx ?? this.prisma
        return await client.users.create({
            data:{
                first_name: datas.first_name,
                last_name: datas.last_name,
                username: datas.username,
                user_type: datas.user_type,
                id_account_fk: datas.id_account_fk
            }
        })
    }
    async getUsersProfileDatas(id_user: number,user_type?: "admin" | "client"): Promise<any>
    {
        let targetUserType = user_type;
        if (!targetUserType && id_user)
        {
            const user = await this.prisma.users.findUnique({where: { id_user },select: { user_type: true }});
    if (!user) return null;
    targetUserType = user.user_type;
  }

  return await this.prisma.users.findUnique({
    where: { id_user },
    include: {
      account_details: {
        select: {
          id_account: true,
          email: true,
          is_active: true,
          verified: true,
          provider: true,
          providerId: true
        }
      },

      // 👇 Só inclui se for client
      my_contacts: targetUserType === "client"
        ? {
            select: { phone_number: true }
          }
        : false,

      my_addresses: targetUserType === "client"
        ? {
            select: {
              city: true,
              country: true,
              province: true,
              reference: true,
              street: true
            }
          }
        : false,

      my_cart: targetUserType === "client"
        ? {
            select: {
              id_cart: true,
              id_guest_cart: true,
              status: true,
              created_at: true,
              cart_items: {
                select: {
                  id_cart_item: true,
                  price: true,
                  quantity: true,
                  created_at: true,
                  product: {
                    select: {
                      name: true,
                      price: true,
                      images: { select: { url: true } }
                    }
                  }
                }
              }
            }
          }
        : false
    }
  });
}

    async updateUser(id_user: number, datas: Partial<usersDatas>, ): Promise<any>
    {
        return await this.prisma.users.update({where:{id_user: id_user}, data:{...datas}})
    }
    async deleteUserProfile(id_user: number,  tx: Omit<Prisma.TransactionClient, "$transaction">): Promise<any>
    {
        const client = tx ?? this.prisma
        return await client.users.delete({where:{id_user: id_user}})    
    }
}
export{PrismaUsersRepositories}