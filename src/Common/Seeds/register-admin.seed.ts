import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { prismaService } from "../../lib/prisma.service";
import { RegisterUserService } from "../../Services/Users/register-user.service";
import { RegisterAccountService } from "../../Services/General/Accounts/register-account.service";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { RegisterContactService } from "../../Services/General/Contacts/register-contact.service";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { RegisterAddressesService } from "../../Services/General/Address/register-address-service.service";
import "dotenv/config"; 

const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const contactRepository: PrismaContactsRepositories = new PrismaContactsRepositories(prismaService)
const addressRepository: PrismaAddressesRepositories = new PrismaAddressesRepositories(prismaService)
const contactService: RegisterContactService = new RegisterContactService(contactRepository)
const accountService: RegisterAccountService = new RegisterAccountService(accountRepository)
const addressService: RegisterAddressesService = new RegisterAddressesService(addressRepository)
const usersService: RegisterUserService = new RegisterUserService(
    accountService,
    userRepository,
    prismaService,
    contactService,
    addressService
)
 async function registerAdmin()
{
    const admin = await usersService.register({
        email: process.env.ADMIN_EMAIL as string,
        password: process.env.ADMIN_PASSWORD as string
    },{
        first_name: process.env.ADMIN_FIRST_NAME as string,
        last_name: process.env.ADMIN_LAST_NAME as string,
        user_type:"admin",
        username:"@SYSTEM_ADMIN"
    },
    [
        {
        phone_number: process.env.ADMIN_PHONE_NUMBER as string
        }
    ],
    [
        {
        city:"Luanda",
        street:"Luanda"
    }
    ]
)
    return admin
}
registerAdmin().then((result) =>{
    console.log(result)
}).catch((error: any) =>{
    console.log(error)
})
export{registerAdmin}