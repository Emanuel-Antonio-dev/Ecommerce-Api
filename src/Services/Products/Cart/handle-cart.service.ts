import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaClient } from "../../../../generated/prisma";
import { RegisterCartsService } from "./register-carts.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";


const prisma: PrismaClient = new PrismaClient()
const repository: PrismaCartRepositories = new PrismaCartRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const cartService: RegisterCartsService = new RegisterCartsService(prisma, repository, userRepository)

async function handleCart(id_guest_cart: string | undefined, id_user: string) {
  let userCart = [];

  if (id_guest_cart && id_guest_cart.trim() !== "") {
    const migratedCart = await cartService.migrateGuestCartToUser(id_guest_cart, id_user);
    userCart = migratedCart?.cart_items || [];
  } else {
    const existingCart = await prisma.carts.findFirst({
      where: { id_user_fk: id_user, status: "active" },
      include: { cart_items: true },
    });
    userCart = existingCart?.cart_items || [];
  }

  return userCart;
}

export {handleCart}