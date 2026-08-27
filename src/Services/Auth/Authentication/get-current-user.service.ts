import { PrismaClient } from "../../../../generated/prisma/client";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { JwtOperations } from "../../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";
import { Prisma } from "../../../../generated/prisma/client";

interface UserCredentials {
  sub: number;
  user_type: "admin" | "client";
  account_id: string;
}

class GetCurrentUserService {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(credentials: UserCredentials) {
    try {
      const { sub, user_type, account_id } = credentials;

      if (!sub || !user_type) {
        throw new HttpException(false, 401, "Credenciais inválidas.");
      }
      
      const include: Prisma.UsersInclude = user_type === "client" ? {
        account_details: {
          select: {
            email: true,
          },
        },
        my_addresses: {
          select: {
            street: true,
            city: true,
            country: true,
            is_default: true,
            province: true,
          },
        },
        my_contacts: {
          select: {
            phone_number: true,
            is_default: true,
          },
        },
        my_cart: {
          select: {
            cart_items: true,
          },
        },
        my_orders: {
          select: {
            order_items: true,
          },
          take: 5,
          orderBy: {
            created_at: Prisma.SortOrder.desc,
          },
        },
        my_reviews: {
          select: {
            rating: true,
            comment: true,
            created_at: true,
          },
        },
      }
    : {
        account_details: {
          select: {
            email: true,
          },
        },
      };

      const user = await this.prisma.users.findUnique({where: { id_user: sub }, include});

      if (!user) {
        throw new HttpException(false, 404, "Usuário não encontrado.");
      }

      if (user.user_type !== user_type) {
        throw new HttpException(false, 403, "Tipo de usuário inválido.");
      }

      if (user.account_details.is_active === false) {
        throw new HttpException(false, 403, "Conta bloqueada.");
      }

      // 🔐 Geração de novo accessToken
      const newAccessToken = JwtOperations.GenerateAccessToken({sub: user.id_user,user_type: user.user_type, account_id: user.id_account_fk});
      if(user.user_type === "admin")
      {
        return {
          success: true,
          statusCode: 200,
          accessToken: newAccessToken,
          user: {
            id_user: user.id_user,
            email: user.account_details.email,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
            user_type: user.user_type,
            created_at: user.created_at,
            updated_at: user.updated_at,
        },
      };
      }
      return {
        success: true,
        statusCode: 200,
        accessToken: newAccessToken,
        user: {
          id_user: user.id_user,
          email: user.account_details.email,
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          user_type: user.user_type,
          my_contacts: user.my_contacts,
          my_addresses: user.my_addresses,
          my_cart: user.my_cart,
          my_orders: user.my_orders,
          my_reviews: user.my_reviews,
          created_at: user.created_at,
          updated_at: user.updated_at,
        },
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message,
        };
      }

      console.error("Erro no GetCurrentUserService:", error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      };
    }
  }
}

export { GetCurrentUserService };
