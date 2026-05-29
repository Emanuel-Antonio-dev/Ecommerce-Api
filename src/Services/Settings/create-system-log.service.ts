import { ISystemLogsRepositories } from "../../Repositories/SystemSettings/System/I-system-logs-repositories";
import { SystemLogDatas, SystemLogFilters} from "../../interfaces/System/interface";

// IPs que nunca devem ser logados (loopback, healthcheck interno)
const IGNORED_IPS = ["127.0.0.1", "::1", "::ffff:127.0.0.1"];

// acções conhecidas — previne valores arbitrários no campo action
const ALLOWED_ACTIONS = [
  "login",
  "logout",
  "register",
  "password_reset",
  "password_change",
  "email_change",
  "2fa_enabled",
  "2fa_disabled",
  "2fa_attempt",
  "account_deleted",
  "account_suspended",
  "profile_updated",
  "admin_login",
  "admin_action",
] as const;

type AllowedAction = (typeof ALLOWED_ACTIONS)[number];

class CreateSystemLogService {
  constructor(private readonly repository: ISystemLogsRepositories) {}

  async execute(datas: SystemLogDatas) {
    try {
      // ── campos obrigatórios ──────────────────────────────────────
      if (!datas.id_account_fk || !datas.action || !datas.ip_address || !datas.system_agent) {
        // log silencioso — não expõe erro ao cliente
        console.warn("[SystemLog] Dados insuficientes para registar log:", datas);
        return;
      }

      // ── ignora IPs internos ──────────────────────────────────────
      if (IGNORED_IPS.includes(datas.ip_address)) return;

      // ── valida action contra lista permitida ─────────────────────
      if (!ALLOWED_ACTIONS.includes(datas.action as AllowedAction)) {
        console.warn(`[SystemLog] Acção não reconhecida ignorada: "${datas.action}"`);
        return;
      }

      // ── trunca user-agent para evitar overflow ───────────────────
      const system_agent = datas.system_agent.slice(0, 500);

      // ── valida formato de IP (IPv4 e IPv6 básico) ────────────────
      const ipv4 = /^(\d{1,3}\.){3}\d{1,3}$/;
      const ipv6 = /^[a-fA-F0-9:]+$/;
      if (!ipv4.test(datas.ip_address) && !ipv6.test(datas.ip_address)) {
        console.warn(`[SystemLog] IP inválido ignorado: "${datas.ip_address}"`);
        return;
      }

      await this.repository.create({
        ...datas,
        system_agent,
      });
    } catch (error) {
      // logs nunca devem quebrar o fluxo principal
      console.error("[SystemLog] Erro ao registar log:", error);
    }
  }
}

export { CreateSystemLogService, AllowedAction, ALLOWED_ACTIONS };
