import { EmailValidator } from "../../Common/Validators/email-validator";
import * as bcrypt from 'bcrypt';
import { PasswordValidator } from "../../Common/Validators/password-validator";
import { PrismaClient } from "@prisma/client";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories"; 
import { usersDatas } from "../../interfaces/Users/interface";
import { accountDatas } from "../../interfaces/General/Accounts/interface";
import { contactsDatas } from "../../interfaces/General/Contacts/interface";
import { addressesDatas } from "../../interfaces/General/Adresses/interface";
import sanitize from "sanitize-html";

class UsersEditProfileService
{
    constructor(
        private readonly prisma: PrismaClient,
        private readonly userRepository: PrismaUsersRepositories,
        private readonly accountRepository: PrismaAccountRepositories,
        private readonly contactRepository: PrismaContactsRepositories,
        private readonly addressRepository: PrismaAddressesRepositories
    ){}
    async editProfile(
        id_user: string, 
        userDatas:Partial<usersDatas>,
        accountDatas: Partial<accountDatas>,
        contactDatas: Partial<contactsDatas>,
        addressDatas: Partial<addressesDatas>
    )
    {
        try
        {
            const existsUser = await this.userRepository.getUsersProfileDatas(id_user)
            if(!existsUser)
                {
                    throw new HttpException(false, 404, "Perfil não encontrado.")
                }
                const usersDatasToUpdate: Partial<{first_name: string, last_name: string, }> = {}
                const accountDatasToUpdate: Partial<{email: string, password: string}> = {}
                const contactDatasToUpdate: Partial<{phone_number: string}> = {}
                const addressDatasToUpdate: Partial<{city: string, street: string}> = {}

                if (userDatas.first_name)
                {
                    usersDatasToUpdate.first_name = sanitize(userDatas.first_name,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    )
                }
                if (userDatas.last_name)
                {
                    usersDatasToUpdate.last_name = sanitize(userDatas.last_name,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    )
                }
                if (accountDatas.email)
                {
                    if(!EmailValidator.isValidEmail(accountDatas.email))
                    {
                        throw new HttpException(false, 400, "Informe um e-mail válido")
                    }
                    const alreadyExistsEmail = await this.accountRepository.getDatas({action:"GetOnlyBasicsDatas"}, undefined, accountDatas.email)
                    if(alreadyExistsEmail)
                    {
                        throw new HttpException(false, 409, "Este e-mail já está em uso")
                    }
                    accountDatasToUpdate.email = accountDatas.email
                }
                if (accountDatas.password)
                {
                    if(!accountDatas.newPassword)
                    {
                        throw new HttpException(false, 400, "Informe a sua nova senha")
                    }
                    const searchPassword = await this.accountRepository.getDatas({action:"GetOnlyBasicsDatas"},existsUser.user_details.account_details.email)
                    const passwordMatch = await bcrypt.compare(accountDatas.password, searchPassword.password)
                    if (!passwordMatch)
                    {
                        throw new HttpException(false, 400, "A sua senha atual está incorrecta.")
                    }
                    if(!PasswordValidator.IsValidPassword(accountDatas.newPassword))
                    {
                        throw new HttpException(false, 400, "A sua nova senha deve ter pelo menos 8 caracteres, conter uma letra maiúscula, um número e um caractere especial.")
                    }
                    const passwordHashed = await bcrypt.hash(accountDatas.newPassword, 12)
                    accountDatasToUpdate.password = passwordHashed
                }
                if(contactDatas.phone_number)
                {
                    if(contactDatas.phone_number.length < 9)
                    {
                        throw new HttpException(false, 400, "Informe um contacto telefónico válido.")
                    }
                    if(await this.contactRepository.getContact(contactDatas.phone_number))
                    {
                        throw new HttpException(false, 409, "Este contacto telefónico já está em uso.")
                    }
                    contactDatasToUpdate.phone_number = contactDatas.phone_number
                }
                if(addressDatas.city)
                {
                    addressDatasToUpdate.city = sanitize(addressDatas.city,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    )
                }
                if(addressDatas.street)
                {
                    addressDatasToUpdate.street = sanitize(addressDatas.street,
                        {
                            allowedTags: [],
                            allowedAttributes: {},
                            allowedClasses: {}
                        }
                    )
                }
                if(
                    Object.keys(accountDatasToUpdate).length === 0 
                    && Object.keys(usersDatasToUpdate).length === 0 
                    && Object.keys(contactDatasToUpdate).length === 0 
                    && Object.keys(addressDatasToUpdate).length === 0)
                    {
                        throw new HttpException(false, 400, "Informe pelo menos um campo para atualização")
                    }
                if(Object.keys(accountDatasToUpdate).length > 0)
                {
                    const accountUpdated = await this.accountRepository.updateAccount(existsUser.id_account_fk, accountDatasToUpdate)
                    if(!accountUpdated)
                    {
                        throw new HttpException(false, 500, "Ocorreu um erro ao atualizar os dados da sua conta.")
                    }
                }
                if (Object.keys(usersDatasToUpdate).length > 0)
                {
                    const userUpdated = await this.userRepository.updateUser(id_user, usersDatasToUpdate)
                    if (!userUpdated)
                    {
                        throw new HttpException(false, 500, "Ocorreu um erro ao atualizar os seus dados.")
                    }
                }
                if (Object.keys(contactDatasToUpdate).length > 0)
                {
                    const contactUpdated = await this.contactRepository.updateContact(existsUser.my_contacts[0].id_contact,contactDatasToUpdate)
                    if (!contactUpdated)
                    {
                        throw new HttpException(false, 500, "Ocorreu um erro ao atualizar o seu contacto telefónico.")
                    }
                }
                if (Object.keys(addressDatasToUpdate).length > 0)
                {
                    const addressUpdated = await this.addressRepository.updateAddressByUserId(existsUser.my_addresses[0].id_address, addressDatasToUpdate)
                    if(!addressUpdated)
                    {
                        throw new HttpException(false, 500, "Ocorreu um erro ao atualizar o seu contacto endereço.")
                    }
                }
                return {success: true, statusCode: 200, message:"Dados atualizados com sucesso."}

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
export{UsersEditProfileService}