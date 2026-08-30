import sanitize from "sanitize-html";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";

const sanitizeOptions = { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] };

class ReplyTicketService {
  constructor(private readonly repository: ISupportRepositories) {}

  async execute(
    id_ticket: string,
    requester: { id_user: number; user_type: "admin" | "client" },
    message: string
  ) {
    try {
      if (!id_ticket || !message) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const sanitizedMessage = sanitize(message.trim(), sanitizeOptions);
      if (sanitizedMessage.length < 1 || sanitizedMessage.length > 3000) {
        throw new HttpException(false, 400, "A mensagem deve ter entre 1 e 3000 caracteres");
      }

      const ticket = await this.repository.findTicketBasics(id_ticket);
      if (!ticket) {
        throw new HttpException(false, 404, "Ticket não encontrado");
      }

      const isAdminReply = requester.user_type === "admin";

      // ── IDOR guard: um cliente só pode responder aos seus próprios tickets
      if (!isAdminReply && ticket.id_user_fk !== requester.id_user) {
        throw new HttpException(false, 403, "Você não tem permissão para responder a este ticket");
      }

      if (ticket.status === "closed") {
        throw new HttpException(
          false,
          400,
          "Este ticket está fechado. Abra um novo ticket para continuar o atendimento."
        );
      }

      const { newMessage } = await this.repository.addMessage(
        id_ticket,
        requester.id_user,
        sanitizedMessage,
        isAdminReply
      );

      // ── transição de estado simples: uma resposta do admin devolve a bola
      // para o cliente, e vice-versa. `in_progress`/`resolved` continuam
      // como estados definidos manualmente pelo admin (ver
      // UpdateTicketStatusService).
      await this.repository.updateStatus(id_ticket, isAdminReply ? "waiting_customer" : "open");

      return {
        success: true,
        statusCode: 201,
        message: "Resposta adicionada com sucesso",
        datas: newMessage,
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

export { ReplyTicketService };
