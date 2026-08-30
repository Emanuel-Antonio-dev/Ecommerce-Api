import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";

class CloseTicketService {
  constructor(private readonly repository: ISupportRepositories) {}

  async execute(id_ticket: string, requester: { id_user: number; user_type: "admin" | "client" }) {
    try {
      if (!id_ticket) {
        throw new HttpException(false, 400, "Informe o ticket");
      }

      const ticket = await this.repository.findTicketBasics(id_ticket);
      if (!ticket) {
        throw new HttpException(false, 404, "Ticket não encontrado");
      }

      if (requester.user_type !== "admin" && ticket.id_user_fk !== requester.id_user) {
        throw new HttpException(false, 403, "Você não tem permissão para fechar este ticket");
      }

      if (ticket.status === "closed") {
        throw new HttpException(false, 409, "Este ticket já está fechado");
      }

      await this.repository.closeTicket(id_ticket);

      return { success: true, statusCode: 200, message: "Ticket fechado com sucesso" };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { CloseTicketService };
