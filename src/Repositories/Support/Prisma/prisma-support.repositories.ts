import { PrismaClient } from "../../../../generated/prisma/client";
import { CreateTicketDatas, TicketPriority, TicketStatus } from "../../../interfaces/Support/interface";
import { ISupportRepositories } from "../Isupport-repositories";

class PrismaSupportRepositories implements ISupportRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async createTicket(datas: CreateTicketDatas): Promise<any> {
    return await this.prisma.supportTickets.create({
      data: {
        id_user_fk: datas.id_user_fk,
        subject: datas.subject,
        priority: datas.priority ?? "medium",
        id_order_fk: datas.id_order_fk,
        status: "open",
        messages: {
          create: {
            id_author_fk: datas.id_user_fk,
            message: datas.message,
            is_admin_reply: false,
          },
        },
      },
      include: {
        messages: true,
      },
    });
  }

  async findTicketById(id_ticket: string): Promise<any> {
    return await this.prisma.supportTickets.findUnique({
      where: { id_ticket },
      include: {
        messages: {
          orderBy: { created_at: "asc" },
          select: {
            id_message: true,
            message: true,
            is_admin_reply: true,
            id_author_fk: true,
            created_at: true,
          },
        },
        user_details: {
          select: { id_user: true, first_name: true, last_name: true, username: true },
        },
        order_details: {
          select: { id_order: true, order_number: true, status: true },
        },
      },
    });
  }

  async findTicketBasics(
    id_ticket: string
  ): Promise<{ id_ticket: string; id_user_fk: number; status: TicketStatus } | null> {
    return await this.prisma.supportTickets.findUnique({
      where: { id_ticket },
      select: { id_ticket: true, id_user_fk: true, status: true },
    });
  }

  async findTicketsByUser(id_user_fk: number, take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.supportTickets.findMany({
      where: { id_user_fk },
      orderBy: { updated_at: "desc" },
      select: {
        id_ticket: true,
        subject: true,
        status: true,
        priority: true,
        id_order_fk: true,
        created_at: true,
        updated_at: true,
        _count: { select: { messages: true } },
      },
      take,
      skip,
    });
  }

  async countTicketsByUser(id_user_fk: number): Promise<number> {
    return await this.prisma.supportTickets.count({ where: { id_user_fk } });
  }

  async findAllTickets(take?: number, skip?: number, status?: TicketStatus): Promise<any[]> {
    return await this.prisma.supportTickets.findMany({
      where: status ? { status } : undefined,
      orderBy: { updated_at: "desc" },
      select: {
        id_ticket: true,
        subject: true,
        status: true,
        priority: true,
        id_order_fk: true,
        created_at: true,
        updated_at: true,
        user_details: {
          select: { id_user: true, first_name: true, last_name: true, username: true },
        },
        _count: { select: { messages: true } },
      },
      take,
      skip,
    });
  }

  async countAllTickets(status?: TicketStatus): Promise<number> {
    return await this.prisma.supportTickets.count({ where: status ? { status } : undefined });
  }

  async addMessage(
    id_ticket: string,
    id_author_fk: number,
    message: string,
    is_admin_reply: boolean
  ): Promise<any> {
    // nested write num `update` também atualiza `updated_at` do ticket
    // automaticamente (@updatedAt) — usado para ordenar as listagens pelos
    // tickets com atividade mais recente primeiro.
    const ticket = await this.prisma.supportTickets.update({
      where: { id_ticket },
      data: {
        messages: {
          create: { id_author_fk, message, is_admin_reply },
        },
      },
      include: {
        messages: {
          orderBy: { created_at: "desc" },
          take: 1,
        },
      },
    });
    return { ticket, newMessage: ticket.messages[0] };
  }

  async updateStatus(id_ticket: string, status: TicketStatus): Promise<any> {
    return await this.prisma.supportTickets.update({
      where: { id_ticket },
      data: { status },
    });
  }

  async updatePriority(id_ticket: string, priority: TicketPriority): Promise<any> {
    return await this.prisma.supportTickets.update({
      where: { id_ticket },
      data: { priority },
    });
  }

  async closeTicket(id_ticket: string): Promise<any> {
    return await this.prisma.supportTickets.update({
      where: { id_ticket },
      data: { status: "closed", closed_at: new Date() },
    });
  }
}

export { PrismaSupportRepositories };
