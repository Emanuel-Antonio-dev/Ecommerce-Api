import { RegisterAccountService } from "../Accounts/register-account.service"
import { RegisterContactService } from "../Contacts/register-contact.service"
import { PrismaClient} from "../../../generated/prisma"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"
import { accountDatas } from "../../interfaces/Accounts/interface"
import { contactsDatas } from "../../interfaces/Contacts/interface"
import { usersDatas } from "../../interfaces/Users/interface"
import { HttpException } from "../../Common/Middlewares/Filters/HttpException"
import { addressesDatas } from "../../interfaces/Adresses/interface"
import { RegisterAddressesService } from "../Address/register-address-service.service"

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
        contactDatas: Omit<contactsDatas, "id_user_fk">,
        addressesDatas: Omit<addressesDatas, "id_user_fk">
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
                    first_name: userDatas.first_name,
                    last_name: userDatas.last_name,
                    user_type: userDatas.user_type,
                    id_account_fk: account.datas.id_account
                }, tx)
                if (!user || !user.id_user)
                    {
                        throw new HttpException(false, 500,"Ocorreu um erro ao criar esta contas.")
                    }
                if (contactDatas.phone_number.length < 9)
                    {
                        throw new HttpException(false, 500, "Informe um contacto telefónico válido.")
                    }
                const contact = await this.contactService.register({
                    phone_number: contactDatas.phone_number,
                    id_user_fk: user.id_user}, tx)
                if (!contact.success || !contact)
                    {
                        throw new HttpException(false, contact.statusCode, contact.message ?? "")
                    }
                const address = await this.addressesService.register({
                    ...addressesDatas, id_user_fk: user.id_user
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
                    phone_number: contact.datas?.phone_number,
                    address: address.datas,
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
                phone_number: contact.datas?.phone_number,
                address: address.datas,
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
                        return {success: false, statusCode: error.statusCode, message: error.message}
                    }
                    console.log(error)
                    return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
            }
        }
    }
        
export {RegisterUserService}