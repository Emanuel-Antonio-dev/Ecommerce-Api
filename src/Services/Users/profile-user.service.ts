import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";

class UsersProfileService {
  constructor(private readonly repository: PrismaUsersRepositories) {}

  async profile(
    id_user: number,
    authUser: { sub: number; user_type: "admin" | "client" }
  ) {
    try {
      if (authUser.user_type === "client" && id_user !== authUser.sub) {
        throw new HttpException(false, 403, "Você não tem permissão para ver este usuário");
      }

      if (!id_user) {
        throw new HttpException(false, 400, "Informe o perfil.");
      }

      const userProfileResult = await this.repository.getUsersProfileDatas(id_user,);

      if (!userProfileResult) {
        throw new HttpException(false, 404, "Perfil não encontrado.");
      }

      // 🔽 Normalização do retorno por tipo de usuário
      const normalizedProfile = this.normalizeProfileByRole(userProfileResult);

      return { success: true, statusCode: 200, datas: normalizedProfile };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.log(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente." };
    }
  }

  private normalizeProfileByRole(profile: any) {
    if (profile.user_type === "admin") {
      const {
        my_cart,
        my_contacts,
        my_addresses,
        ...adminProfile
      } = profile;

      return adminProfile;
    }

    // client recebe tudo
    return profile;
  }
}

export{UsersProfileService}