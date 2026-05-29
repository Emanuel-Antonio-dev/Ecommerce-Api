import crypto from "node:crypto"
import sanitize from "sanitize-html"

import { RegisterAccountService } from "../General/Accounts/register-account.service"
import { RegisterContactService } from "../General/Contacts/register-contact.service"
import { RegisterAddressesService } from "../General/Address/register-address-service.service"

import { PrismaClient } from "../../../generated/prisma/client"
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories"

import { accountDatas } from "../../interfaces/General/Accounts/interface"
import { contactsDatas } from "../../interfaces/General/Contacts/interface"
import { usersDatas } from "../../interfaces/Users/interface"
import { addressesDatas } from "../../interfaces/General/Adresses/interface"

import { HttpException } from "../../Common/Middlewares/Filters/HttpException"

class RegisterUserService {
  constructor(
    private readonly accountService: RegisterAccountService,
    private readonly repository: PrismaUsersRepositories,
    private readonly prisma: PrismaClient,
    private readonly contactService: RegisterContactService,
    private readonly addressesService: RegisterAddressesService
  ) {}

  async register(
    accountDatas: accountDatas,
    userDatas: Omit<usersDatas, "id_account_fk">,
    contactDatas?: Omit<contactsDatas, "id_user_fk">[],
    addressesDatas?: Omit<addressesDatas, "id_user_fk">[]
  ) {
    try {
      /* ===============================
         1️⃣ Sanitização
      =============================== */

      const sanitizedUser = {
        first_name: sanitize(userDatas.first_name, {allowedAttributes: {},allowedClasses: {},allowedTags: [],}),
        last_name: sanitize(userDatas.last_name,{allowedAttributes: {},allowedClasses: {},allowedTags: [],}),
        username: sanitize(userDatas.username,{allowedAttributes: {},allowedClasses: {},allowedTags: [],}),
        user_type: userDatas.user_type ?? "client"
      }
      /* ===============================
         2️⃣ Validações básicas
      =============================== */

      if (!accountDatas.email) {
        throw new HttpException(false, 400, "Email é obrigatório.")
      }

      if (!sanitizedUser.first_name || !sanitizedUser.last_name || !sanitizedUser.username) {
        throw new HttpException(false, 400, "Informe todos os campos obrigatórios.")
      }

      if (sanitizedUser.first_name.length < 3) {
        throw new HttpException(false, 400, "O primeiro nome deve conter pelo menos 3 caracteres.")
      }

      if (sanitizedUser.last_name.length < 3) {
        throw new HttpException(false, 400, "O sobrenome deve conter pelo menos 3 caracteres.")
      }

      if (sanitizedUser.username.length < 3) {
        throw new HttpException(false, 400, "O nome de usuário deve conter pelo menos 3 caracteres.")
      }

      /* ===============================
         3️⃣ Provider Rules
      =============================== */

      let providerId = accountDatas.providerId

      if (accountDatas.provider === "Local") {
        if (!accountDatas.password) {
          throw new HttpException(false, 400, "Password é obrigatória para contas locais.")
        }

        // 🔥 Geração automática para Local
        providerId = crypto.randomUUID()
      } else {
        if (!providerId) {
          throw new HttpException(false, 400, "ProviderId é obrigatório para autenticação OAuth.")
        }
      }

      /* ===============================
         4️⃣ Username uniqueness
      =============================== */

      const existsUsername = await this.prisma.users.findUnique({
        where: { username: sanitizedUser.username }
      })

      if (existsUsername) {
        throw new HttpException(false, 409, "Este nome de usuário já está em uso.")
      }

      /* ===============================
         5️⃣ Transaction
      =============================== */

      const result = await this.prisma.$transaction(async (tx) => {

        // 🔹 Criar Account
        const account = await this.accountService.register(
          {
            email: accountDatas.email,
            password: accountDatas.provider === "Local" ? accountDatas.password : undefined,
            provider: accountDatas.provider,
            providerId: providerId!
          },
          tx
        )

        if (!account.success || !account.datas?.id_account) {
          throw new HttpException(false, account.statusCode, account.message ?? "")
        }

        // 🔹 Criar User
        const user = await this.repository.register(
          {
            ...sanitizedUser,
            id_account_fk: account.datas.id_account
          },
          tx
        )

        if (!user?.id_user) {
          throw new HttpException(false, 500, "Erro ao criar usuário.")
        }

        /* ===============================
           6️⃣ Contactos (opcional)
        =============================== */

        const createdContacts = []

        if (contactDatas?.length) {
          for (const c of contactDatas) {
            const contact = await this.contactService.register(
              {
                phone_number: c.phone_number,
                id_user_fk: user.id_user
              },
              tx
            )

            if (!contact.success || !contact.datas) {
              throw new HttpException(false, contact.statusCode, contact.message ?? "")
            }

            createdContacts.push(contact.datas)
          }
        }

        /* ===============================
           7️⃣ Endereços (opcional)
        =============================== */

        const createdAddresses = []

        if (addressesDatas?.length) {
          for (const addr of addressesDatas) {
            const address = await this.addressesService.register(
              {
                city: sanitize(addr.city, {
                            allowedAttributes: {},
                            allowedClasses: {},
                            allowedTags: [],
                }),
                street: sanitize(addr.street,{
                            allowedAttributes: {},
                            allowedClasses: {},
                            allowedTags: [],
                }
                ),
                id_user_fk: user.id_user,
                province: addr.province,
                reference: addr.reference,
                is_default: addr.is_default
              },
              tx
            )

            if (!address.success || !address.datas) {
              throw new HttpException(false, address.statusCode, address.message ?? "")
            }

            createdAddresses.push(address.datas)
          }
        }

        /* ===============================
           8️⃣ Return final
        =============================== */

        return {
          success: true,
          statusCode: 201,
          message: "Conta criada com sucesso!",
          datas: {
            id_user: user.id_user,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            email: account.datas.email,
            provider: accountDatas.provider,
            providerId,
            contacts: createdContacts,
            addresses: createdAddresses,
            user_type: user.user_type,
            created_at: user.created_at
          }
        }
      })

      return result

    } catch (error: any) {

      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        }
      }

      console.error(error)

      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente."
      }
    }
  }
}

export { RegisterUserService }
