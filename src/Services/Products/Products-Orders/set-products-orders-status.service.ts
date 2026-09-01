import { PrismaOrdersRepositories } from "../../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaClient } from "../../../../generated/prisma/client";
import { SendEmail } from "../../../Common/Utils/Emails/send-email";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { ProcessOrderFulfillmentService } from "./process-order-fulfillment.service";

type OrderTransitionStatus = "confirmed" | "completed" | "cancelled" | "failed";

// ── máquina de estados do pedido ─────────────────────────────────────────
// pending  → confirmed (pagamento aprovado) → completed (envio entregue)
// pending  → failed    (pagamento recusado)
// pending  → cancelled (pedido cancelado antes do pagamento)
// confirmed → cancelled (pedido pago mas cancelado depois — ex: reembolso)
//
// "confirmed" ≠ "completed": confirmed é só "o pagamento foi aprovado";
// completed é "o cliente já recebeu o produto" (disparado quando o envio
// chega a "delivered" — ver UpdateShipmentStatusService).
// ✅ tipado como string[] (não OrderStatus[]) propositalmente: o cliente
// Prisma gerado neste ambiente ainda não conhece o valor "confirmed" do
// enum (schema.prisma foi atualizado, mas rodar `npx prisma generate` não é
// possível neste sandbox — ver README). Isto não afeta a validação em
// runtime, só evita depender do enum desatualizado no tipo.
const ALLOWED_FROM: Record<OrderTransitionStatus, string[]> = {
  confirmed: ["pending"],
  failed: ["pending"],
  cancelled: ["pending", "confirmed"],
  completed: ["confirmed"],
};

class SetOrdersStatusService {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly repository: PrismaOrdersRepositories,
    private readonly userRepository: PrismaUsersRepositories,
    private readonly emailProvider: SendEmail,
    // opcional: o webhook/admin endpoint injeta este service para que o
    // fulfillment seja disparado automaticamente quando o pagamento é
    // confirmado. Sem ele, a transição de status ainda funciona
    // normalmente — só não dispara o envio automático (útil em testes).
    private readonly fulfillmentService?: ProcessOrderFulfillmentService
  ) {}

  async setOrderStatus(id_order: number, status: OrderTransitionStatus) {
    try {
      if (!id_order) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      if (!Object.keys(ALLOWED_FROM).includes(status)) {
        throw new HttpException(false, 400, "Status inválido");
      }

      const order = await this.prisma.orders.findFirst({ where: { id_order } });

      if (!order) {
        throw new HttpException(false, 404, "Pedido não encontrado");
      }

      // ✅ máquina de estados explícita — cada status só é alcançável a
      // partir de estados específicos. Isto substitui o guard único
      // "só a partir de pending" de antes, que impedia por exemplo marcar
      // um pedido confirmado como "completed" quando o envio é entregue.
      const allowedFrom = ALLOWED_FROM[status];
      if (!allowedFrom.includes(order.status)) {
        throw new HttpException(
          false,
          400,
          `Transição inválida: "${order.status}" → "${status}". Só é permitido a partir de: ${allowedFrom.join(", ")}`
        );
      }

      const userDatas = await this.userRepository.getUsersProfileDatas(order.id_user_fk, "client");

      // ── transação curta e focada: só o essencial no BD (mudar o status,
      // e — quando cancelado — devolver o stock reservado). Nada de I/O
      // externo (email, fulfillment) aqui dentro, propositalmente: um envio
      // que falhe (ex: transportadora fora do ar) não pode reverter o
      // pagamento já commitado.
      const orderResume = await this.prisma.$transaction(async (tx) => {
        await this.repository.setOrderStatus(id_order, status, tx);

        if (status === "cancelled") {
          const orderItems = await tx.orderItems.findMany({
            where: { id_order_fk: id_order },
          });

          await Promise.all(
            orderItems.map((item) =>
              tx.productVariants.update({
                where: { id_variant: item.id_variant_fk },
                data: { stock: { increment: item.quantity } },
              })
            )
          );
        }

        return await this.repository.getOrderItemsByOrder(order.id_order, tx);
      });

      // switch explícito: cada status tem o seu próprio bloco isolado, sem
      // qualquer possibilidade de "cair" (fallthrough) para o bloco errado.
      switch (status) {
        case "confirmed": {
          await this.emailProvider.sendEmail(
            userDatas.account_details.email,
            "Compra confirmada",
            "<h1>O seu pagamento foi aprovado</h1>"
          );

          // fulfillment é um passo desacoplado, DEPOIS do commit acima. Se
          // falhar, o pedido continua correctamente "confirmed" — só o
          // envio fica pendente (ver ProcessOrderFulfillmentService).
          let fulfillment: { success: boolean; message: string } | undefined;
          if (this.fulfillmentService) {
            fulfillment = await this.fulfillmentService.process(id_order);
          }

          return {
            success: true,
            statusCode: 200,
            message: fulfillment?.success
              ? "Pagamento confirmado e envio processado."
              : "Pagamento confirmado com sucesso.",
            datas: orderResume,
            fulfillment: fulfillment
              ? { success: fulfillment.success, message: fulfillment.message }
              : undefined,
          };
        }

        case "completed": {
          await this.emailProvider.sendEmail(
            userDatas.account_details.email,
            "Pedido entregue",
            "<h1>O seu pedido foi entregue. Obrigado pela compra!</h1>"
          );

          return {
            success: true,
            statusCode: 200,
            message: "Pedido concluído com sucesso.",
            datas: orderResume,
          };
        }

        case "failed": {
          await this.emailProvider.sendEmail(
            userDatas.account_details.email,
            "Pagamento falhou",
            "<h1>O pagamento do seu pedido falhou</h1>"
          );

          return {
            success: true,
            statusCode: 200,
            message: "Pagamento falhou.",
            datas: orderResume,
          };
        }

        case "cancelled": {
          await this.emailProvider.sendEmail(
            userDatas.account_details.email,
            "Pedido cancelado",
            "<h1>O seu pedido foi cancelado</h1>"
          );

          return {
            success: true,
            statusCode: 200,
            message: "Pedido cancelado com sucesso.",
            datas: orderResume,
          };
        }
      }
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
}

export { SetOrdersStatusService };
