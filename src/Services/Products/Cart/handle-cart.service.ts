import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterCartsService } from "./register-carts.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";

const repository = new PrismaCartRepositories(prismaService);
const userRepository = new PrismaUsersRepositories(prismaService);
const cartService = new RegisterCartsService(prismaService, repository, userRepository);

async function handleCart(id_guest_cart: string | undefined, id_user: number) {
  if (!id_guest_cart && !id_user) {
    throw new HttpException(false, 400, "Informe todos os campos");
  }

  let userCart: any[] = [];

  if (id_guest_cart?.trim()) {
    const migratedCart = await cartService.migrateGuestCartToUser(
      id_guest_cart,
      id_user
    );

    userCart = migratedCart?.cart_items ?? [];
  } else {
    const existingCart = await prismaService.carts.findFirst({
      where: {
        id_user_fk: id_user,
        status: "active",
      },
      include: {
        cart_items: {
          omit:{id_variant_fk: true},
          include: {
            variant:{
              select:{
                id_variant: true,
                sku: true,
                color: true,
                size: true,
                product: {
                  select: {
                    id_product: true,
                    name: true,
                    price: true,
                    images: {
                      select: {
                        url: true,
                  },
                },
              },
            },
              }
            }
          },
        },
      },
    });

    userCart = existingCart?.cart_items ?? [];
  }

  return userCart;
}

export { handleCart };