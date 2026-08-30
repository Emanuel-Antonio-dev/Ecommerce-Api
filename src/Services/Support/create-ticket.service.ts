import sanitize from "sanitize-html";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";
import { PrismaOrdersRepositories } from "../../Repositories/Products/ProductOrders/Prisma/PrismaProductOrderRepositories";
import { CreateTicketDatas, TicketPriority } from "../../interfaces/Support/interface";

const VALID_PRIORITIES: TicketPriority[] = ["low", "medium", "high", "urgent"];

const sanitizeOptions = { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] };

class CreateTicketService {
  constructor(
    private readonly repository: ISupportRepositories,
    private readonly orderRepository: PrismaOrdersRepositories
  ) {}

  async execute(datas: CreateTicketDatas) {
    try {
      if (!datas.id_user_fk || !datas.subject || !datas.message) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const subject = sanitize(datas.subject.trim(), sanitizeOptions);
      const message = sanitize(datas.message.trim(), sanitizeOptions);

      if (subject.length < 5 || subject.length > 150) {
        throw new HttpException(false, 400, "O assunto deve ter entre 5 e 150 caracteres");
      }
      if (message.length < 10 || message.length > 3000) {
        throw new HttpException(false, 400, "A mensagem deve ter entre 10 e 3000 caracteres");
      }

      if (datas.priority && !VALID_PRIORITIES.includes(datas.priority)) {
        throw new HttpException(false, 400, "Prioridade inválida");
      }

      // ── se o ticket referencia um pedido, garante que o pedido existe e
      // pertence mesmo a quem está abrindo o ticket (evita IDOR — um
      // utilizador não pode vincular o ticket ao pedido de outra pessoa)
      if (datas.id_order_fk) {
        const order = await this.orderRepository.getOrder(datas.id_order_fk);
        if (!order) {
          throw new HttpException(false, 404, "Pedido não encontrado");
        }
        if (order.user_details.id_user !== datas.id_user_fk) {
          throw new HttpException(false, 403, "Este pedido não pertence a você");
        }
      }

      const ticket = await this.repository.createTicket({
        id_user_fk: datas.id_user_fk,
        subject,
        message,
        priority: datas.priority,
        id_order_fk: datas.id_order_fk,
      });

      if (!ticket) {
        throw new HttpException(false, 500, "Ocorreu um erro ao criar o ticket");
      }

      return {
        success: true,
        statusCode: 201,
        message: "Ticket criado com sucesso",
        datas: ticket,
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { CreateTicketService };
