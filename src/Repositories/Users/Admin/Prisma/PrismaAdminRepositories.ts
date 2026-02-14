import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { IAdminRepositories } from "../admin-repositories";

class PrismaAdminRepositories implements IAdminRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async getAllUsers(take?: number, skip?: number): Promise<any[]>
    {
        return await this.prisma.users.findMany({
            where:{user_type: "client"},
            omit:{id_account_fk: true, user_type: true},
            include:{
                account_details:{select:{email: true}},
                my_addresses:{select:{city: true, street: true, country: true, province: true, reference: true}},
                my_contacts: {select:{phone_number: true}},
                my_orders:{select:{
                    id_order: true,
                    payment_method: true,
                    shipping_city: true, 
                    shipping_country: true, 
                    shipping_phone_number: true, 
                    shipping_province: true, 
                    shipping_street: true, 
                    status:true, 
                    total_amount: true, 
                    created_at: true,
                    delivered_at: true, 
                    order_items:{
                        select:{
                            id_order_item: true,
                            price: true, 
                            quantity: true,
                            product:{
                                select:{
                                    name: true, 
                                    images:{
                                        select:{
                                            url:true
                                        }}}}}}}}
            }, orderBy:{created_at:"desc"}, take, skip})
    }
    async getAllOrders(take?: number, skip?: number): Promise<any[]> {
        return await this.prisma.orders.findMany({orderBy:{created_at:"desc"},omit:{id_user_fk: true},include:{
            user_details:{
                select:{
                    id_user: true,
                    first_name: true,
                    last_name: true,
                    username: true,
                    account_details:{select:{email: true}}
                }
            },
            order_items: {
                select:{
                    id_order_item: true,
                    quantity: true,
                    product:{
                        select:{
                            id_product: true,
                            reference_code: true,
                            name: true,
                            price: true,
                            is_featured: true, 
                            available_stock: true,
                            created_at: true,
                            images:{select:{url: true}}
                        }
                    }
                },take, skip}}})
    }
    async countOrders(): Promise<number> {
        return await this.prisma.orders.count()
    }
    async countUsers(): Promise<number> {
        return await this.prisma.users.count({where:{user_type:"client"}})
    }
}
export {PrismaAdminRepositories}