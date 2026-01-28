import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { UsersEditProfileService } from "../../Services/Users/edit-user-profile.service";


const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories( prismaService)
const accountRepository: PrismaAccountRepositories = new PrismaAccountRepositories(prismaService)
const contactRepository: PrismaContactsRepositories = new PrismaContactsRepositories(prismaService)
const addressRepository: PrismaAddressesRepositories = new PrismaAddressesRepositories(prismaService)
const service: UsersEditProfileService = new UsersEditProfileService(
    prismaService,
    userRepository,
    accountRepository,
    contactRepository,
    addressRepository
)
class UsersEditProfileController
{
    static async edit(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_user = Number(req.params.id_user)
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
                city: req.body.city,
                street: req.body.street
            }
            const result = await service.editProfile(id_user,userDatas,accountDatas,contactDatas, addressDatas)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})
        }
    }
}
export{UsersEditProfileController}