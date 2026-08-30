import { PaginatedResult, PaginationParams, buildPagination } from "../../Common/Utils/helpers";
import { ISupportRepositories } from "../../Repositories/Support/Isupport-repositories";

class GetMyTicketsService {
  constructor(private readonly repository: ISupportRepositories) {}

  async execute(id_user_fk: number, { page, limit }: PaginationParams): Promise<PaginatedResult<any> | any> {
    try {
      const pagination = buildPagination({ page, limit });

      const tickets = await this.repository.findTicketsByUser(id_user_fk, pagination.take, pagination.skip);
      const total = await this.repository.countTicketsByUser(id_user_fk);

      if (tickets.length === 0) {
        return { success: true, statusCode: 404, message: "Você ainda não abriu nenhum ticket" };
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
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { GetMyTicketsService };
