import { Response, Request } from "express";
import { RegisterUserService } from "../../Services/Users/register-user.service";
import { RegisterAccountService } from "../../Services/General/Accounts/register-account.service";
import { RegisterContactService } from "../../Services/General/Contacts/register-contact.service";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaClient } from "@prisma/client";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { RegisterAddressesService } from "../../Services/General/Address/register-address-service.service";
import { accountDatas } from "../../interfaces/General/Accounts/interface";
import { usersDatas } from "../../interfaces/Users/interface";
import { contactsDatas } from "../../interfaces/General/Contacts/interface";
import { addressesDatas } from "../../interfaces/General/Adresses/interface";

const prisma: PrismaClient = new PrismaClient()
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const contactRepository: PrismaContactsRepositories = new PrismaContactsRepositories(prisma)
const addressRepository: PrismaAddressesRepositories = new PrismaAddressesRepositories(prisma)
const addressService: RegisterAddressesService = new RegisterAddressesService(addressRepository)
const accountService: RegisterAccountService = new RegisterAccountService(accountRepository)
const contactService: RegisterContactService = new RegisterContactService(contactRepository)

const userService: RegisterUserService = new RegisterUserService(
    accountService,
    userRepository,
    prisma,
    contactService,
    addressService
)

class RegisterUsersController
{
    static async register(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const accountDatas: accountDatas ={
                email: req.body.email,
                password: req.body.password
            }
            const userDatas: Omit<usersDatas, "id_account_fk"> = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                user_type: "client",
            }
            const contactDatas: Omit<contactsDatas, "id_user_fk">[] =
            
            Array.isArray(req.body.contacts) ? req.body.contacts.map((c: any)=>({
                phone_number: c.phone_number
            })):[{
                phone_number: req.body.phone_number
            }]
            const addressDatas: Omit<addressesDatas, "id_user_fk">[] =
            Array.isArray(req.body.addresses) ? req.body.addresses.map((a: any) =>({
                city: a.city,
                street: a.street
            })):[{
                city: req.body.city,
                street: req.body.street
            }]

            if (!accountDatas.email || !accountDatas.password || 
                !userDatas.first_name || !userDatas.last_name ||
                contactDatas.length === 0 ||
                addressDatas.length === 0
            )
            {
                return res.status(400).json({ success: false,statusCode: 400,message: "Por favor, preencha todos os campos!" });
            }
            const result = await userService.register(accountDatas, userDatas, contactDatas, addressDatas)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result); 
            }
                return res.status(result.statusCode).json(result); 
            } catch (error: any)
            {
                console.log(error)
                return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
            }
    }
}
export{RegisterUsersController}