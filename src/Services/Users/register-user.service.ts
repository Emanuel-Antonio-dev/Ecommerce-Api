import { RegisterAccountService } from "../General/Accounts/register-account.service"
import { RegisterContactService } from "../General/Contacts/register-contact.service"
import { PrismaClient} from "../../../generated/prisma"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"
import { accountDatas } from "../../interfaces/General/Accounts/interface"
import { contactsDatas } from "../../interfaces/General/Contacts/interface"
import { usersDatas } from "../../interfaces/Users/interface"
import { HttpException } from "../../Common/Middlewares/Filters/HttpException"
import { addressesDatas } from "../../interfaces/General/Adresses/interface"
import { RegisterAddressesService } from "../General/Address/register-address-service.service"
import sanitize from "sanitize-html"

class RegisterUserService
{
    constructor(
        private readonly accountService: RegisterAccountService,
        private readonly repository: PrismaUsersRepositories,
        private readonly prisma: PrismaClient,
        private readonly contactService: RegisterContactService,
        private readonly addressesService: RegisterAddressesService

    ){}
    async register(
        accountDatas: accountDatas,
        userDatas: Omit<usersDatas, "id_account_fk">,
        contactDatas: Omit<contactsDatas, "id_user_fk">[],
        addressesDatas: Omit<addressesDatas, "id_user_fk">[]
    )
    {
        try {
            const transaction = await this.prisma.$transaction(async(tx)=>{
            let datas
            const account = await this.accountService.register({email: accountDatas.email, password: accountDatas.password}, tx)
            if (!account.success || !account.datas?.id_account)
                {
                    throw new HttpException (account.success, account.statusCode, account.message ?? "")
                }
                const user = await this.repository.register({
                    first_name: sanitize(userDatas.first_name,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    ),
                    last_name: sanitize(userDatas.last_name,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    ),
                    user_type: userDatas.user_type,
                    id_account_fk: account.datas.id_account
                }, tx)
                if (!user || !user.id_user)
                    {
                        throw new HttpException(false, 500,"Ocorreu um erro ao criar esta contas.")
                    }
                    const contacts = []
                    for (const c of contactDatas)
                    {
                    const contact = await this.contactService.register({
                        phone_number: c.phone_number,
                        id_user_fk: user.id_user}, tx)    
                    if (!contact.success || !contact.datas)
                    {
                        throw new HttpException(false, contact.statusCode, contact.message ?? "")
                    }
                    contacts.push(contact.datas)
                }
                const addresses = []
                for(const address of addressesDatas)
                {
                    addresses.push(address)
                }
                const address = await this.addressesService.register({
                    city: sanitize(addresses[0].city,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    ),
                    street: sanitize(addresses[0].street,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    ),
                    id_user_fk: user.id_user
                }, tx)
                if(!address.success)
                {
                    throw new HttpException(false, address.statusCode, address.message ?? "")
                }
                if(userDatas.user_type === "client" && address.datas)
                {
                    datas = {
                    id_user: user.id_user,
                    id_account_fk: account.datas.id_account,
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email: account.datas.email,
                    phone_number: contacts,
                    address: addresses,
                    user_type: user.user_type,
                    created_at: user.created_at
                    }
                }
                datas = {
                id_user: user.id_user,
                id_account_fk: account.datas.id_account,
                first_name: user.first_name,
                last_name: user.last_name,
                email: account.datas.email,
                phone_number: contacts,
                address: addresses,
                user_type: user.user_type,
                created_at: user.created_at
                }
                return {
                    success: true,
                    statusCode: 201,
                    message:"Conta criada com sucesso!",
                    datas
                    }
                }, {timeout:30000})
                return transaction
            } catch (error: any)
            {
                if (error instanceof HttpException)
                    {
                        console.log(error)
                        return {success: false, statusCode: error.statusCode, message: error.message}
                    }
                    console.log(error)
                    return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
            }
        }
    }
        
export {RegisterUserService}