import { ISystemLogsRepositories } from "../../Repositories/SystemSettings/System/I-system-logs-repositories";
import { SystemLogDatas, SystemLogFilters} from "../../interfaces/System/interface";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination } from "../../Common/Utils/helpers";

const MAX_LIMIT = 100; // nunca retorna mais de 100 logs por chamada

class GetAllSystemLogsService {
  constructor(private readonly repository: ISystemLogsRepositories) {}

  async execute(
    { page, limit }: PaginationParams,
    filters?: SystemLogFilters
  ): Promise<PaginatedResult<any> | any> {
    try {
      // cap no limit — previne dump massivo da tabela
      const safeLim = Math.min(limit ?? 20, MAX_LIMIT);
      const pagination = buildPagination({ page, limit: safeLim });

      // ── valida intervalo de datas ────────────────────────────────
      if (filters?.from && filters?.to) {
        const from = new Date(filters.from);
        const to   = new Date(filters.to);

        if (isNaN(from.getTime()) || isNaN(to.getTime())) {
          throw new HttpException(false, 400, "Datas de filtro inválidas");
        }

        if (to < from) {
          throw new HttpException(false, 400, "'to' não pode ser anterior a 'from'");
        }

        // janela máxima de 90 dias — previne queries pesadas
        const diff = (to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24);
        if (diff > 90) {
          throw new HttpException(false, 400, "Intervalo máximo de consulta: 90 dias");
        }
      }

      const hasFilters = filters && Object.values(filters).some(Boolean);

      const [result, total] = await Promise.all([
        hasFilters
          ? this.repository.findWithFilters(filters!, pagination.take, pagination.skip)
          : this.repository.findAll(pagination.take, pagination.skip),
        hasFilters
          ? this.repository.countWithFilters(filters!)
          : this.repository.count(),
      ]);

      if (result.length === 0) {
        return { success: true, statusCode: 404, message: "Nenhum log encontrado" };
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

export { GetAllSystemLogsService };
