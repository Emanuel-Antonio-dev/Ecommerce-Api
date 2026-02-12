import "dotenv/config";
import { prismaService } from "../../lib/prisma.service";
import { PrismaAccountRepositories } from "../../Repositories/General/Accounts/Prisma/PrismaAccountsRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { PrismaContactsRepositories } from "../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { PrismaAddressesRepositories } from "../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { PrismaAdminRepositories } from "../../Repositories/Users/Admin/Prisma/PrismaAdminRepositories";
import { RegisterAccountService } from "../../Services/General/Accounts/register-account.service";
import { RegisterUserService } from "../../Services/Users/register-user.service";
import { RegisterContactService } from "../../Services/General/Contacts/register-contact.service";
import { RegisterAddressesService } from "../../Services/General/Address/register-address-service.service";

async function validateEnv() {
  const requiredEnvs = [
    "ADMIN_EMAIL",
    "ADMIN_PASSWORD",
    "ADMIN_FIRST_NAME",
    "ADMIN_LAST_NAME",
    "ADMIN_USERNAME",
    "ADMIN_PHONE_NUMBER"
  ];

  for (const env of requiredEnvs) {
    if (!process.env[env]) {
      throw new Error(`❌ Variável de ambiente ausente: ${env}`);
    }
  }
}

async function registerAdmin() {
  await validateEnv();

  const adminRepository = new PrismaAdminRepositories(prismaService);

  // Verifica se o admin já existe
  const existingAdmin = await prismaService.users.findFirst({where: {user_type: "admin"}});
  if (existingAdmin)
    {
    console.log("ℹ️ Admin já existe. Seed ignorado.");
    return;
  }

  const accountRepository = new PrismaAccountRepositories(prismaService);
  const userRepository = new PrismaUsersRepositories(prismaService);
  const contactRepository = new PrismaContactsRepositories(prismaService);
  const addressRepository = new PrismaAddressesRepositories(prismaService);

  const accountService = new RegisterAccountService(accountRepository);
  const contactService = new RegisterContactService(contactRepository);
  const addressService = new RegisterAddressesService(addressRepository);

  const userService = new RegisterUserService(
    accountService,
    userRepository,
    prismaService,
    contactService,
    addressService,
  );

  const result = await userService.register(
    {
      email: process.env.ADMIN_EMAIL as string,
      password: process.env.ADMIN_PASSWORD as string,
      provider:"Local"
    },
    {
      first_name: process.env.ADMIN_FIRST_NAME!,
      last_name: process.env.ADMIN_LAST_NAME!,
      user_type: "admin",
      username: process.env.ADMIN_USERNAME!
    }
  );

  if (!result.success) {
    throw new Error(`❌ Falha ao criar Admin: ${result.message}`);
  }

  console.log("✅ Admin criado com sucesso!");
}

registerAdmin()
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  })
  .finally(async () => {
    await prismaService.$disconnect();
  });

export { registerAdmin };
