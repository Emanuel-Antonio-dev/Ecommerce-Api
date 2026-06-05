import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IAdminRepositories } from "../../../Repositories/Users/Admin/I-admin-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";

const VALID_USER_TYPES = ["admin", "client"] as const;

class AdminPromoteUserService {
  constructor(
    private readonly repository: IAdminRepositories,
    private readonly logService: CreateSystemLogService
  ) {}

  async execute(
    id_account: string,
    user_type: "admin" | "client",
    admin_id_account: string,
    ip_address: string,
    system_agent: string
  ) {
    try {
      if (!id_account || id_account.trim().length === 0) {
        throw new HttpException(false, 400, "Informe o id da conta");
      }

      if (!VALID_USER_TYPES.includes(user_type)) {
        throw new HttpException(false, 400, `tipo de usúario inválido. Valores aceites: ${VALID_USER_TYPES.join(", ")}`);
      }

      // não pode alterar o próprio tipo
      if (id_account === admin_id_account) {
        throw new HttpException(false, 400, "Não pode alterar o seu próprio tipo de utilizador");
      }

      const account = await this.repository.getUserById(id_account);
      if (!account) {
        throw new HttpException(false, 404, "Conta não encontrada");
      }

      if (!account.user_details) {
        throw new HttpException(false, 404, "Perfil de utilizador não encontrado");
      }

      if (account.user_details.user_type === user_type) {
        throw new HttpException(false, 400, `Este utilizador já tem o tipo "${user_type}"`);
      }

      await this.repository.promoteUser(id_account, user_type);

      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "admin_action",
        ip_address,
        system_agent,
      });

      return {
        success: true,
        statusCode: 200,
        message: `Utilizador promovido para "${user_type}" com sucesso`,
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

export { AdminPromoteUserService };
