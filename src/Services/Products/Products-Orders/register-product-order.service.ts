import { PrismaClient } from "../../../../generated/prisma/client";
import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import sanitize from "sanitize-html";
import { productsOrdersDatas } from "../../../interfaces/Products/Products-Orders/interface";
import crypto from "node:crypto"

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
        // Buscar carrinho ativo
        const cart = await tx.carts.findFirst({
          where: { id_user_fk, status: "active" },
          include: { cart_items: { include: { product: true } } }
        });

        if (!cart) throw new HttpException(false, 404, "Carrinho não encontrado ou já processado.");

        // Validar estoque
        for (const item of cart.cart_items) {
          if (!item.product.available || item.product.available_stock < item.quantity) {
            throw new HttpException(false, 400, `Produto ${item.product.name} está sem estoque suficiente.`);
          }
        }

        // Validar/registrar contacto se necessário
        const existingContact = await tx.contacts.findFirst({ where: { id_user_fk } });
        if (!existingContact && !shipping_phone_number) {
          throw new HttpException(false, 400, "Informe um número de contacto para envio.");
        }

        if (!existingContact && shipping_phone_number) {
          await tx.contacts.create({
            data: {
                id_contact: crypto.randomUUID(),
              phone_number: sanitize(shipping_phone_number,{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
              }),
              id_user_fk
            }
          });
        }

        // Criar pedido
        const order = await this.repository.registerOrder(
          {
            id_user_fk,
            total_amount: cart.cart_items.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0),
            status: "pending",
            payment_method,
            shipping_street: sanitize(shipping_street, {
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }),
            shipping_city: sanitize(shipping_city,{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }),
            shipping_province: sanitize(shipping_province,{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }),
            shipping_country: sanitize(shipping_country,{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }),
            shipping_phone_number: sanitize(shipping_phone_number,{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            })
          },
          tx
        );

        // Registrar itens do pedido e atualizar estoque
        for (const item of cart.cart_items) {
          await this.repository.registerOrderItems(
            {
              id_order_fk: order.id_order,
              id_product_fk: item.id_product_fk,
              quantity: item.quantity,
              price: item.price
            },
            tx
          );

          await tx.products.update({
            where: { id_product: item.id_product_fk },
            data: { available_stock: { decrement: item.quantity } }
          });
        }

        // Atualizar status do carrinho
        await tx.carts.update({ where: { id_cart: cart.id_cart }, data: { status: "ordered" } });

        return {
          success: true,
          statusCode: 201,
          message: "O seu pedido foi processado com sucesso!",
          datas: { order }
        };
      });
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { RegisterProductOrderService };
