import { Request, Response } from "express"

import { RegisterUserService } from "../../Services/Users/register-user.service"
import { RegisterAccountService } from "../../Services/General/Accounts/register-account.service"
import { RegisterContactService } from "../../Services/General/Contacts/register-contact.service"
import { RegisterAddressesService } from "../../Services/General/Address/register-address-service.service"

import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories"
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories"

import { prismaService } from "../../lib/prisma.service"
import { accountDatas } from "../../interfaces/General/Accounts/interface"
import { usersDatas } from "../../interfaces/Users/interface"
import { contactsDatas } from "../../interfaces/General/Contacts/interface"
import { addressesDatas } from "../../interfaces/General/Adresses/interface"

/* ===========================
   Inicialização de Services
=========================== */
const accountRepository = new PrismaAccountRepositories(prismaService)
const userRepository = new PrismaUsersRepositories(prismaService)
const contactRepository = new PrismaContactsRepositories(prismaService)
const addressRepository = new PrismaAddressesRepositories(prismaService)

const accountService = new RegisterAccountService(accountRepository)
const contactService = new RegisterContactService(contactRepository)
const addressService = new RegisterAddressesService(addressRepository)

const userService = new RegisterUserService(
  accountService,
  userRepository,
  prismaService,
  contactService,
  addressService
)

/* ===========================
   Controller
=========================== */
class RegisterUsersController {
  static async register(req: Request, res: Response): Promise<Response> {
    try {
      // 🔹 Account data
      const account: accountDatas = {
        email: req.body.email,
        password: req.body.password,         // Opcional para OAuth
        provider: req.body.provider || "Local",
        providerId: req.body.providerId      // Opcional: será gerado para Local
      }

      // 🔹 User data
      const user: Omit<usersDatas, "id_account_fk"> = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        user_type: "client"
      }

      // 🔹 Contacts (opcional)
      const contacts: Omit<contactsDatas, "id_user_fk">[] = Array.isArray(req.body.contacts)
        ? req.body.contacts.map((c: any) => ({ phone_number: c.phone_number }))
        : req.body.phone_number
        ? [{ phone_number: req.body.phone_number }]
        : []

      // 🔹 Addresses (opcional)
      const addresses: Omit<addressesDatas, "id_user_fk">[] = Array.isArray(req.body.addresses)
        ? req.body.addresses.map((a: any) => ({ city: a.city, street: a.street }))
        : req.body.city && req.body.street
        ? [{ city: req.body.city, street: req.body.street }]
        : []

      // 🔹 Chamar Service
      const result = await userService.register(account, user, contacts.length ? contacts : undefined, addresses.length ? addresses : undefined)

      return res.status(result.statusCode).json(result)

    } catch (error: any) {
      console.error(error)
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente."
      })
    }
  }
}

export { RegisterUsersController }
