import { ISystemLogsRepositories } from "../../Repositories/SystemSettings/System/I-system-logs-repositories";
import { SystemLogDatas, SystemLogFilters} from "../../interfaces/System/interface";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination } from "../../Common/Utils/helpers";

const MAX_LIMIT = 100;

class GetAccountSystemLogsService {
  constructor(private readonly repository: ISystemLogsRepositories) {}

  async execute(id_account_fk: string, { page, limit }: PaginationParams) {
    try {
      if (!id_account_fk || id_account_fk.trim().length === 0) {
        throw new HttpException(false, 400, "Informe a conta");
      }

      const safeLim  = Math.min(limit ?? 20, MAX_LIMIT);
      const pagination = buildPagination({ page, limit: safeLim });

      const [result, total] = await Promise.all([
        this.repository.findByAccount(id_account_fk, pagination.take, pagination.skip),
        this.repository.countByAccount(id_account_fk),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum log encontrado para esta conta" };
      }

      return {
        success: true,
        statusCode: 200,
        datas: result,
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
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { GetAccountSystemLogsService };
