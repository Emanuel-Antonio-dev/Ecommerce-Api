import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { ISystemLogsRepositories } from "../../../Repositories/SystemSettings/System/I-system-logs-repositories";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";

class AdminHardDeleteAccountService {
  constructor(
    private readonly repository: IAdminRepositories,
    private readonly logService: CreateSystemLogService,
    private readonly logsRepository: ISystemLogsRepositories
  ) {}

  async execute(id_account: string, admin_id_account: string, ip_address: string, system_agent: string) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o id da conta");
      }

      // nunca apaga a própria conta
      if (id_account === admin_id_account) {
        throw new HttpException(false, 400, "Não pode eliminar a sua própria conta");
      }

      const account = await this.repository.getUserById(id_account);
      if (!account) {
        throw new HttpException(false, 404, "Conta não encontrada");
      }

      // nunca apaga outra conta admin — protecção crítica
      if (account.user_details?.user_type === "admin") {
        throw new HttpException(false, 403, "Não é possível eliminar uma conta de administrador");
      }

      // GDPR — remove logs da conta antes de apagar a conta (cascade não apaga SystemLogs pois tem OnDelete Cascade)
      await this.logsRepository.deleteByAccount(id_account);

      // hard delete — cascade apaga Users, Orders, etc conforme schema
      await this.repository.hardDeleteAccount(id_account);

      // regista no log do admin que executou a acção
      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "account_deleted",
        ip_address,
        system_agent,
      });

      return { success: true, statusCode: 200, message: "Conta eliminada permanentemente" };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminHardDeleteAccountService };
