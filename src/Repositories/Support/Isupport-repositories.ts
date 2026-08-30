import { CreateTicketDatas, TicketPriority, TicketStatus } from "../../interfaces/Support/interface";

abstract class ISupportRepositories {
  abstract createTicket(datas: CreateTicketDatas): Promise<any>;

  abstract findTicketById(id_ticket: string): Promise<any>;
  abstract findTicketBasics(id_ticket: string): Promise<{ id_ticket: string; id_user_fk: number; status: TicketStatus } | null>;

  abstract findTicketsByUser(id_user_fk: number, take?: number, skip?: number): Promise<any[]>;
  abstract countTicketsByUser(id_user_fk: number): Promise<number>;

  abstract findAllTickets(take?: number, skip?: number, status?: TicketStatus): Promise<any[]>;
  abstract countAllTickets(status?: TicketStatus): Promise<number>;

  abstract addMessage(id_ticket: string, id_author_fk: number, message: string, is_admin_reply: boolean): Promise<any>;

  abstract updateStatus(id_ticket: string, status: TicketStatus): Promise<any>;
  abstract updatePriority(id_ticket: string, priority: TicketPriority): Promise<any>;
  abstract closeTicket(id_ticket: string): Promise<any>;
}

export { ISupportRepositories };
