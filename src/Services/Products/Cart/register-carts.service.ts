import crypto from "node:crypto";
import { PrismaClient } from "../../../../generated/prisma/client";
import { cartDatas, cartItemsDatas } from "../../../interfaces/Products/Cart/interface";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";

class RegisterCartsService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaCartRepositories,
    private readonly userRepository: PrismaUsersRepositories
  ) {}

  async registerCart(datas: cartDatas, items: cartItemsDatas[]) {
    try {
      if (!datas.id_user_fk && (!Array.isArray(items) || items.length === 0)) {
        throw new HttpException(false, 400, "Carrinho guest precisa de itens para ser criado");
      }

      if (datas.id_user_fk) {
        const userExists = await this.userRepository.getUsersProfileDatas(datas.id_user_fk, "client");
        if (!userExists) {
          throw new HttpException(false, 404, "Não conseguimos encontrar este usuário");
        }
      }
      const result = await this.prisma.$transaction(async (tx) => {
        let cart: any = null;
        let isGuest = false;

        // ─────────────────────────────────────────────
        // 1️⃣ Resolve carrinho (user ou guest)
        // ─────────────────────────────────────────────
        if (datas.id_user_fk)
        {
          cart = await tx.carts.findUnique({
            where: { id_user_fk: datas.id_user_fk },
          });
          if (!cart) {
            cart = await this.repository.registerCart(
              { id_user_fk: datas.id_user_fk, status: "active" },
              tx
            );
          } else if (cart.status !== "active") {
            cart = await tx.carts.update({
              where: { id_cart: cart.id_cart },
              data: { status: "active" },
            });
          }
        }
        else {
          isGuest = true;

          if (datas.id_guest_cart)
          {
            cart = await tx.carts.findFirst({
              where: { id_guest_cart: datas.id_guest_cart, status: "active" },
            });
          }

          if (!cart) {
            const id_guest = datas.id_guest_cart ?? crypto.randomUUID();
            cart = await this.repository.registerCart(
              {
                id_guest_cart: id_guest,
                status: "active",
              },
              tx
            );
          }
        }

        // ─────────────────────────────────────────────
        // 2️⃣ Adiciona/atualiza itens
        // ─────────────────────────────────────────────
        for (const item of items) {
          if (!Number.isInteger(item.quantity) || item.quantity <= 0)
          {
            throw new HttpException(false, 400, "Quantidade deve ser um número inteiro positivo");
          }
          if (item.quantity > 100)
          {

            throw new HttpException(false, 400, "Quantidade máxima por item excedida");
          }
          const product = await tx.products.findFirst({
            where: { id_product: item.id_product_fk },
          });

          if (!product) {
            throw new HttpException(false, 404, "O Produto selecionado não existe");
          }

          if (!product.available || product.available_stock < item.quantity) {
            throw new HttpException(
              false,
              400,
              `O produto ${product.name} está sem estoque suficiente. Disponivel: ${product.available_stock}`
            );
          }

          const existingItem = await tx.cartItems.findFirst({
            where: {
              id_cart_fk: cart.id_cart,
              id_product_fk: item.id_product_fk,
            },
          });

          if (existingItem) {
            const newQuantity = existingItem.quantity + item.quantity;
            if (newQuantity > product.available_stock)
              {
                throw new HttpException(false,400,`Stock insuficiente para ${product.name}. Disponível: ${product.available_stock}`);}
                await tx.cartItems.update({where: { id_cart_item: existingItem.id_cart_item },data: { quantity: newQuantity },});
              }
              else {
                await this.repository.registerCartItems(
                  {
                id_cart_fk: cart.id_cart,
                id_product_fk: item.id_product_fk,
                quantity: item.quantity,
                price: product.price,
              },
              tx
            );
          }
        }

        const cartWithItems = await this.repository.getCartItems(cart.id_cart, undefined, tx);

        return {
          cart: cartWithItems,
          id_guest_cart: isGuest ? cart.id_guest_cart : null,
        };
      });

      return {
        success: true,
        statusCode: 201,
        message: "Carrinho criado/atualizado com sucesso.",
        datas: result.cart,
        ...(result.id_guest_cart && { id_guest_cart: result.id_guest_cart }),
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message,
        };
      }
      console.error(error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!",
      };
    }
  }

  // ─────────────────────────────────────────────
  // 🔁 MIGRAR CARRINHO GUEST → USER (no login)
  // ─────────────────────────────────────────────
  async migrateGuestCartToUser(id_guest_cart: string, id_user: number) {
    return this.prisma.$transaction(async (tx) => {
      const guestCart = await tx.carts.findFirst({
        where: { id_guest_cart: id_guest_cart, status: "active" },
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

      if (!guestCart) return null;

      let userCart = await tx.carts.findFirst({
        where: { id_user_fk: id_user },
        include: { cart_items: true },
      });

      if (!userCart) {
        userCart = await tx.carts.create({
          data: {
            id_user_fk: id_user,
            status: "active",
          },
          include: { cart_items: true },
        });
      }
      else if (userCart.status !== "active") {
        userCart = await tx.carts.update({
          where: { id_cart: userCart.id_cart },
          data: { status: "active" },
          include: { cart_items: true },
        });
      }

      for (const item of guestCart.cart_items) {
        const existingItem = await tx.cartItems.findFirst({
          where: {
            id_cart_fk: userCart.id_cart,
            id_product_fk: item.product.id_product,
          },
        });

        if (existingItem) {
          await tx.cartItems.update({
            where: { id_cart_item: existingItem.id_cart_item },
            data: { quantity: existingItem.quantity + item.quantity },
          });
        } else {
          await tx.cartItems.create({
            data: {
              id_cart_fk: userCart.id_cart,
              id_product_fk: item.product.id_product,
              quantity: item.quantity,
              price: item.product.price,
            },
          });
        }
      }

      await tx.carts.delete({ where: { id_cart: guestCart.id_cart } });

      return tx.carts.findFirst({
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
    });
  }
}

export { RegisterCartsService };
