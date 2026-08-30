import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";
import { TicketPriority, TicketStatus } from "../../interfaces/Support/interface";

const VALID_STATUSES: TicketStatus[] = ["open", "in_progress", "waiting_customer", "resolved", "closed"];
const VALID_PRIORITIES: TicketPriority[] = ["low", "medium", "high", "urgent"];

class UpdateTicketStatusService {
  constructor(private readonly repository: ISupportRepositories) {}

  async execute(id_ticket: string, datas: { status?: string; priority?: string }) {
    try {
      if (!id_ticket) {
        throw new HttpException(false, 400, "Informe o ticket");
      }
      if (!datas.status && !datas.priority) {
        throw new HttpException(false, 400, "Informe pelo menos um campo para atualização");
      }
      if (datas.status && !VALID_STATUSES.includes(datas.status as TicketStatus)) {
        throw new HttpException(false, 400, "Status inválido");
      }
      if (datas.priority && !VALID_PRIORITIES.includes(datas.priority as TicketPriority)) {
        throw new HttpException(false, 400, "Prioridade inválida");
      }

      const ticket = await this.repository.findTicketBasics(id_ticket);
      if (!ticket) {
        throw new HttpException(false, 404, "Ticket não encontrado");
      }

      if (datas.status === "closed") {
        // usa o fluxo dedicado — também grava `closed_at`
        await this.repository.closeTicket(id_ticket);
      } else if (datas.status) {
        await this.repository.updateStatus(id_ticket, datas.status as TicketStatus);
      }

      if (datas.priority) {
        await this.repository.updatePriority(id_ticket, datas.priority as TicketPriority);
      }

      return { success: true, statusCode: 200, message: "Ticket atualizado com sucesso" };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { UpdateTicketStatusService };
