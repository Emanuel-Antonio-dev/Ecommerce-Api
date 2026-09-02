import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";

const VALID_ROLES = ["super_admin", "support"] as const;

class AdminSetRoleService {
  constructor(
    private readonly repository: IAdminRepositories,
    private readonly logService: CreateSystemLogService
  ) {}

  async execute(
    id_account: string,
    admin_role: "super_admin" | "support",
    admin_id_account: string,
    ip_address: string,
    system_agent: string
  ) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o id da conta");
      }

      if (!VALID_ROLES.includes(admin_role)) {
        throw new HttpException(false, 400, `Papel inválido. Valores aceites: ${VALID_ROLES.join(", ")}`);
      }

      // ✅ não pode rebaixar-se a si próprio — evita o cenário onde o único
      // super_admin online se tranca fora do próprio acesso por engano
      if (id_account === admin_id_account) {
        throw new HttpException(false, 400, "Não pode alterar o seu próprio papel de administrador");
      }

      const account = await this.repository.getUserById(id_account);
      if (!account) {
        throw new HttpException(false, 404, "Conta não encontrada");
      }

      if (!account.user_details) {
        throw new HttpException(false, 404, "Perfil de utilizador não encontrado");
      }

      if (account.user_details.user_type !== "admin") {
        throw new HttpException(false, 400, "Só é possível definir o papel de contas do tipo \"admin\"");
      }

      if (account.user_details.admin_role === admin_role) {
        throw new HttpException(false, 400, `Este administrador já tem o papel "${admin_role}"`);
      }

      await this.repository.setAdminRole(id_account, admin_role);

      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "admin_action",
        ip_address,
        system_agent,
      });

      return {
        success: true,
        statusCode: 200,
        message: `Papel de administrador definido para "${admin_role}" com sucesso`,
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

export { AdminSetRoleService };
