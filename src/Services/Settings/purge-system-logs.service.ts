import { ISystemLogsRepositories } from "../../Repositories/SystemSettings/System/I-system-logs-repositories";
import { SystemLogDatas, SystemLogFilters} from "../../interfaces/System/interface";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { PaginatedResult, PaginationParams, buildPagination } from "../../Common/Utils/helpers";

const MIN_RETENTION_DAYS = 7; // nunca apaga logs com menos de 7 dias

class PurgeSystemLogsService {
  constructor(private readonly repository: ISystemLogsRepositories) {}

  // ── apaga logs antigos (retenção) ────────────────────────────────────
  async purgeOlderThan(days: number) {
    try {
      if (!days || typeof days !== "number") {
        throw new HttpException(false, 400, "Informe o número de dias");
      }

      if (days < MIN_RETENTION_DAYS) {
        throw new HttpException(
          false,
          400,
          `Retenção mínima de ${MIN_RETENTION_DAYS} dias — não é possível apagar logs mais recentes`
        );
      }

      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);

      const result = await this.repository.deleteOlderThan(cutoff);

      return {
        success: true,
        statusCode: 200,
        message: `Logs anteriores a ${cutoff.toISOString()} removidos`,
        datas: { deleted_count: result.count },
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }

  // ── apaga todos os logs de uma conta (GDPR / account deletion) ───────
  async purgeByAccount(id_account_fk: string) {
    try {
      if (!id_account_fk || id_account_fk.trim().length === 0) {
        throw new HttpException(false, 400, "Informe a conta");
      }

      await this.repository.deleteByAccount(id_account_fk);

      return {
        success: true,
        statusCode: 200,
        message: "Logs da conta removidos com sucesso",
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }

  // ── apaga tudo (operação nuclear — apenas super admin) ───────────────
  async purgeAll() {
    try {
      await this.repository.deleteAll();

      return {
        success: true,
        statusCode: 200,
        message: "Todos os logs foram removidos",
      };
    } catch (error: any) {
      console.error(error);
      return { success: false, statusCode: 500, message: "Erro interno do servidor" };
    }
  }
}

export { PurgeSystemLogsService };
