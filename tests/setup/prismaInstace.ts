import { PrismaClient } from "@prisma/client";

const prismaInstace: PrismaClient = new PrismaClient()

async function resetDatabase()
{
    await prismaInstace.$transaction([
        prismaInstace.accounts.deleteMany(),
        prismaInstace.users.deleteMany(),
        prismaInstace.contacts.deleteMany(),
        prismaInstace.addresses.deleteMany(),
        prismaInstace.authentications.deleteMany(),
        prismaInstace.tokens.deleteMany()
    ])
}
afterAll(async()=>{
    await prismaInstace.$disconnect()
})
export{prismaInstace, resetDatabase}