import { Request, Response } from "express";
import { PrismaClient } from "../../../generated/prisma";
import { PrismaAccountRepositories } from "../../Repositories/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaContactsRepositories } from "../../Repositories/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAddressesRepositories } from "../../Repositories/Adresses/Prisma/PrismaAdressesRepositories";
import { UsersEditProfileService } from "../../Services/Users/edit-user-profile.service";

const prisma: PrismaClient = new PrismaClient()

const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prisma)
const contactRepository: PrismaContactsRepositories = new PrismaContactsRepositories(prisma)
const addressRepository: PrismaAddressesRepositories = new PrismaAddressesRepositories(prisma)
const service: UsersEditProfileService = new UsersEditProfileService(
    prisma,
    userRepository,
    accountRepository,
    contactRepository,
    addressRepository
)
class UsersEditProfileController
{
    static async editProfile(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {id_user} = req.params
            if(!id_user)
            {
                return res.status(400).json({sucess: false, statusCode: 400, message:"Informe o usuário"})   
            }
                const accountDatas ={
                email: req.body.email,
                password: req.body.password,
                newPassword: req.body.newPassword
            }
            const userDatas = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
            }
            const contactDatas = {
                phone_number: req.body.phone_number
            }
            const addressDatas = {
                city: req.body,
                street: req.body
            }
            if (!accountDatas.email 
                && !accountDatas.password 
                && !accountDatas.newPassword
                && !userDatas.first_name
                && !userDatas.last_name
                && !contactDatas.phone_number
                && !addressDatas.city
                && !addressDatas.street
            )
            {
                return res.status(400).json({ success: false, statusCode: 400, message: "Informe pelo menos um campo para atualização" });
            }
            const result = await service.editProfile(id_user,userDatas,accountDatas,contactDatas, addressDatas)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
        }
    }
}
export{UsersEditProfileController}