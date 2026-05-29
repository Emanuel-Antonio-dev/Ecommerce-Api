import { PrismaClient } from "../../../../generated/prisma/client";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import sanitize from "sanitize-html";
import { productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";
import crypto from "node:crypto";

class RegisterProductOrderService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaOrdersRepositories,
    private readonly cartRepository: PrismaCartRepositories
  ) {}

  async registerOrder(datas: productsOrdersDatas) {
    try {
      const {
        id_user_fk,
        payment_method,
        shipping_street,
        shipping_city,
        shipping_province,
        shipping_country,
        shipping_phone_number
      } = datas;

      if (!id_user_fk || !payment_method) {
        throw new HttpException(false, 400, "Informe todos os campos obrigatórios.");
      }

      if (!shipping_street || !shipping_city || !shipping_province || !shipping_country) {
        throw new HttpException(false, 400, "Informe todos os campos do endereço de envio.");
      }

      return await this.prisma.$transaction(async (tx) => {

        // 🔥 buscar carrinho com VARIANTES
        const cart = await tx.carts.findFirst({
          where: {
            id_user_fk,
            status: "active"
          },
          include: {
            cart_items: {
              include: {
                variant: {
                  include: {
                    product: true
                  }
                }
              }
            }
          }
        });

        if (!cart) {
          throw new HttpException(false, 404, "Carrinho não encontrado ou já processado.");
        }

        if (cart.cart_items.length === 0) {
          throw new HttpException(false, 400, "Carrinho vazio.");
        }

        // 🔥 validar estoque por VARIANTE
        for (const item of cart.cart_items) {
          if (!item.variant) {
            throw new HttpException(false, 400, "Variante inválida no carrinho.");
          }

          if (item.variant.stock < item.quantity) {
            throw new HttpException(
              false,
              400,
              `Estoque insuficiente para ${item.variant.product.name}`
            );
          }
        }

        // 🔥 contacto
        const existingContact = await tx.contacts.findFirst({
          where: { id_user_fk }
        });

        if (!existingContact && !shipping_phone_number) {
          throw new HttpException(false, 400, "Informe um número de contacto para envio.");
        }

        if (!existingContact && shipping_phone_number) {
          await tx.contacts.create({
            data: {
              id_contact: crypto.randomUUID(),
              phone_number: sanitize(shipping_phone_number, {
                allowedTags: [],
                allowedAttributes: {},
                allowedClasses: {}
              }),
              id_user_fk
            }
          });
        }

        // 🔥 calcular total baseado em VARIANTE
        const totalAmount = cart.cart_items.reduce((sum, item) => {
          const price = Number(item.variant.price);
          return sum + price * item.quantity;
        }, 0);

        // 🔥 criar order
        const order = await this.repository.registerOrder(
          {
            id_user_fk,
            total_amount: totalAmount,
            status: "pending",
            payment_method,
            shipping_street: sanitize(shipping_street, {
              allowedTags: [],
              allowedAttributes: {},
              allowedClasses: {}
            }),
            shipping_city: sanitize(shipping_city, {
              allowedTags: [],
              allowedAttributes: {},
              allowedClasses: {}
            }),
            shipping_province: sanitize(shipping_province, {
              allowedTags: [],
              allowedAttributes: {},
              allowedClasses: {}
            }),
            shipping_country: sanitize(shipping_country, {
              allowedTags: [],
              allowedAttributes: {},
              allowedClasses: {}
            }),
            shipping_phone_number: sanitize(shipping_phone_number || "", {
              allowedTags: [],
              allowedAttributes: {},
              allowedClasses: {}
            })
          },
          tx
        );

        // 🔥 criar order items baseado em VARIANT
        for (const item of cart.cart_items) {
          await this.repository.registerOrderItems(
            {
              id_order_fk: order.id_order,

              id_variant_fk: item.variant.id_product_fk, // produto base

              quantity: item.quantity,

              price: item.variant.price,

              product_name: item.variant.product.name,
              product_price: item.variant.price
            },
            tx
          );

          // 🔥 diminuir stock da VARIANTE (NÃO do produto)
          await tx.productVariants.update({
            where: {
              id_variant: item.id_variant_fk!
            },
            data: {
              stock: {
                decrement: item.quantity
              }
            }
          });
        }

        // 🔥 atualizar carrinho
        await tx.carts.update({
          where: { id_cart: cart.id_cart },
          data: { status: "ordered" }
        });

        return {
          success: true,
          statusCode: 201,
          message: "O seu pedido foi processado com sucesso!",
          datas: { order }
        };
      });

    } catch (error: any) {
      if (error instanceof HttpException) {
        return {
          success: false,
          statusCode: error.statusCode,
          message: error.message
        };
      }

      console.error(error);
      return {
        success: false,
        statusCode: 500,
        message: "Ocorreu um erro interno, tente novamente!"
      };
    }
  }
}

export { RegisterProductOrderService };