import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../Common/Middlewares/Authorization/authorization";
import { GetAllSystemLogsController } from "../../Controllers/Settings/get-all-system-logs.controller";
import { GetAccountSystemLogsController } from "../../Controllers/Settings/get-account-system-logs.controller";
import { PurgeSystemLogsController } from "../../Controllers/Settings/purge-system-logs.controller";

const systemLogsRoutes: Router = Router();

// ── Admin ──────────────────────────────────────────────────────────────────
// GET  /system-logs?page=1&limit=20&action=login&from=2024-01-01&to=2024-12-31
systemLogsRoutes.route("/system-logs").get(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { GetAllSystemLogsController.getAll(req, res) }
);

// GET /system-logs/account/:id_account
systemLogsRoutes.route("/system-logs/account/:id_account").get(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { GetAccountSystemLogsController.getByAccount(req, res) }
);

// DELETE /system-logs/purge?days=30
systemLogsRoutes.route("/system-logs/purge").delete(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { PurgeSystemLogsController.purgeOlderThan(req, res) }
);

// DELETE /system-logs/account/:id_account
systemLogsRoutes.route("/system-logs/account/:id_account").delete(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { PurgeSystemLogsController.purgeByAccount(req, res) }
);

// DELETE /system-logs/all  — operação nuclear
systemLogsRoutes.route("/system-logs/all").delete(
  MiddlewareAuthorization.authorization,
  MiddlewareAuthorization.isAdmin,
  (req: Request, res: Response) => { PurgeSystemLogsController.purgeAll(req, res) }
);

// ── Utilizador autenticado — consulta os seus próprios logs ───────────────
// GET /system-logs/me
systemLogsRoutes.route("/system-logs/me").get(
  MiddlewareAuthorization.authorization,
  (req: Request, res: Response) => { GetAccountSystemLogsController.getMine(req as any, res) }
);

export { systemLogsRoutes };
