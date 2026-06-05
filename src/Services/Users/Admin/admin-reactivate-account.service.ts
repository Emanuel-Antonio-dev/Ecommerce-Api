import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";


class AdminReactivateAccountService {
  constructor(
    private readonly repository: IAdminRepositories,
    private readonly logService: CreateSystemLogService
  ) {}

  async execute(id_account: string, admin_id_account: string, ip_address: string, system_agent: string) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o perfil");
      }

      const account = await this.repository.getUserById(id_account);
      if (!account) {
        throw new HttpException(false, 404, "Perfil não encontrado");
      }

      if (account.is_active && !account.deleted_at) {
        throw new HttpException(false, 400, "Este perfil já se encontra activo");
      }

      await this.repository.reactivateAccount(id_account);

      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "admin_action",
        ip_address,
        system_agent,
      });

      return { success: true, statusCode: 200, message: "Perfil reactivado com sucesso" };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente" };
    }
  }
}

export { AdminReactivateAccountService };
