import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";


class AdminSuspendAccountService {
  constructor(
    private readonly repository: IAdminRepositories,
    private readonly logService: CreateSystemLogService
  ) {}

  async execute(id_account: string, admin_id_account: string, ip_address: string, system_agent: string) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o perfil");
      }

      // não pode suspender a si próprio
      if (id_account === admin_id_account) {
        throw new HttpException(false, 400, "Não pode suspender o seu próprio perfil");
      }

      const account = await this.repository.getUserById(id_account);
      if (!account) {
        throw new HttpException(false, 404, "Perfil não encontrado");
      }

      if (!account.is_active) {
        throw new HttpException(false, 400, "Esta perfil já se encontra suspenso");
      }

      // impede suspender outro admin — apenas super admin pode fazê-lo
      if (account.user_details?.user_type === "admin") {
        throw new HttpException(false, 403, "Não é possível suspender um perfil de administrador");
      }

      await this.repository.suspendAccount(id_account);

      // regista a acção nos system logs
      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "admin_action",
        ip_address,
        system_agent,
      });

      return { success: true, statusCode: 200, message: "Perfil suspenso com sucesso" };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro, tente novamente" };
    }
  }
}

export { AdminSuspendAccountService };
