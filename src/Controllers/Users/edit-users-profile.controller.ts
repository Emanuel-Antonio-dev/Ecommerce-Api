import { Request, Response } from "express";
import { prismaService } from "../../lib/prisma.service";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { UsersEditProfileService } from "../../Services/Users/edit-user-profile.service";
import { RequestWithCredentials } from "../../Common/Middlewares/Authorization/authorization";

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

class UsersEditProfileController {
  static async edit(req: RequestWithCredentials, res: Response): Promise<Response | any> {
    try {
      const id_user = Number(req.params.id_user);
      const authUser = req.credentials;

      if (!authUser) {
        return res.status(401).json({ success: false, statusCode:418,message: "Perfil não autenticado." });
      }

      // ❌ Client não pode editar perfil de outro usuário
      if (authUser.user_type === "client" && id_user !== authUser.sub)
    {
        return res.status(403).json({success: false, statusCode:403,message: "Você só pode editar o seu próprio perfil"});
      }

      const accountDatas = {
        email: req.body.email,
        password: req.body.password,
        newPassword: req.body.newPassword
      };

      const userDatas = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
      };

      const contactDatas = {
        phone_number: req.body.phone_number
      };

      const addressDatas = {
        city: req.body.city,
        street: req.body.street,
        province: req.body.province,
        country: req.body.country,
        reference: req.body.reference,
        is_default: req.body.is_default

      };

      const result = await service.editProfile(
        id_user,
        userDatas,
        accountDatas,
        contactDatas,
        addressDatas,
        {sub: authUser.sub, user_type: authUser.user_type as "admin" | "client"}
      );

      return res.status(result.statusCode).json(result);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Ocorreu um erro interno, tente novamente"
      });
    }
  }
}

export{UsersEditProfileController}