import { PrismaClient } from "../../../../../generated/prisma";
import { IAdminRepositories } from "../admin-repositories";

class PrismaAdminRepositories implements IAdminRepositories
{
    constructor(private readonly prisma: PrismaClient){}

    async getAllUsers(): Promise<any[]>
    {
        return await this.prisma.users.findMany({
            include:{
                account_details:{select:{email: true, id_account: true}},
                my_addresses:{select:{city: true, street: true}},
                my_contacts: {select:{phone_number: true}}
            }, orderBy:{created_at:"desc"}})
    }
}
export {PrismaAdminRepositories}