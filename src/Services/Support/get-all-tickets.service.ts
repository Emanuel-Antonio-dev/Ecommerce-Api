import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination } from "../../Common/Utils/helpers";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";
import { TicketStatus } from "../../interfaces/Support/interface";

const VALID_STATUSES: TicketStatus[] = ["open", "in_progress", "waiting_customer", "resolved", "closed"];

class GetAllTicketsService {
  constructor(private readonly repository: ISupportRepositories) {}

  async execute({ page, limit }: PaginationParams, status?: string): Promise<PaginatedResult<any> | any> {
    try {
      if (status && !VALID_STATUSES.includes(status as TicketStatus)) {
        throw new HttpException(false, 400, "Status inválido");
      }

      const pagination = buildPagination({ page, limit });
      const safeStatus = status as TicketStatus | undefined;

      const tickets = await this.repository.findAllTickets(pagination.take, pagination.skip, safeStatus);
      const total = await this.repository.countAllTickets(safeStatus);

      if (tickets.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum ticket encontrado" };
      }

      return {
        success: true,
        statusCode: 200,
        datas: tickets,
        meta: {
          total,
          page: pagination.page,
          limit: pagination.take,
          total_pages: Math.ceil(total / pagination.take),
        },
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

export { GetAllTicketsService };
