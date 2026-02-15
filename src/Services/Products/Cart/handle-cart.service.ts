import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { prismaService } from "../../../lib/prisma.service";
import { RegisterCartsService } from "./register-carts.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";


const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const cartService: RegisterCartsService = new RegisterCartsService(prismaService, repository, userRepository)

async function handleCart(id_guest_cart: string | undefined, id_user: number) {
  if(!id_guest_cart && !id_user)
  {
    throw new HttpException(false, 400 ,"Informe todos os campos")
  }
  let userCart = [];

  if (id_guest_cart && id_guest_cart.trim() !== "")
    {
        const migratedCart = await cartService.migrateGuestCartToUser(id_guest_cart, id_user);
      userCart = migratedCart?.cart_items || [];
    } 
    else
    {
      const existingCart = await prismaService.carts.findFirst({
        where: { id_user_fk: id_user, status: "active" },
        include: {cart_items: {select:{
          id_cart_item: true, 
          id_cart_fk: true,
          quantity: true,
          product:{
            select:{
              id_product: true,
              name: true,
              images: {select:{url: true}},
              price: true
          }
          },
          created_at: true,
        }} }
      });
      userCart = existingCart?.cart_items || [];
    }
    return userCart;
}

export {handleCart}