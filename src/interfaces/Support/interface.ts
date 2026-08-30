type TicketStatus = "open" | "in_progress" | "waiting_customer" | "resolved" | "closed";
type TicketPriority = "low" | "medium" | "high" | "urgent";

interface CreateTicketDatas {
  id_user_fk: number;
  subject: string;
  message: string; // primeira mensagem do ticket
  priority?: TicketPriority;
  id_order_fk?: number;
}

interface AddTicketMessageDatas {
  id_ticket: string;
  id_author_fk: number;
  message: string;
  is_admin_reply: boolean;
}

export { TicketStatus, TicketPriority, CreateTicketDatas, AddTicketMessageDatas };
