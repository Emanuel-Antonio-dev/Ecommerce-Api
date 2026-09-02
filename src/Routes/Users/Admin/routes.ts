import { Request, Response, Router } from "express";
import { MiddlewareAuthorization } from "../../../Common/Middlewares/Authorization/authorization";
import { AdminGetDashboardController }       from "../../../Controllers/Users/Admin/admin-get-dashboard.controller";
import { AdminGetAllUsersController }        from "../../../Controllers/Users/Admin/admin-get-all-users.controller";
import { AdminGetUserController }            from "../../../Controllers/Users/Admin/admin-get-user.controller";
import { AdminSuspendAccountController }     from "../../../Controllers/Users/Admin/admin-suspend-account.controller";
import { AdminReactivateAccountController }  from "../../../Controllers/Users/Admin/admin-reactivate-account.controller";
import { AdminPromoteUserController }        from "../../../Controllers/Users/Admin/admin-promote-user.controller";
import { AdminHardDeleteAccountController }  from "../../../Controllers/Users/Admin/admin-hard-delete-account.controller";
import { AdminGetAllOrdersController }       from "../../../Controllers/Users/Admin/admin-get-all-orders.controller";
import { AdminGetOrderController }           from "../../../Controllers/Users/Admin/admin-get-order.controller"
import { AdminGetAllProductsController }     from "../../../Controllers/Users/Admin/admin-get-all-products.controller";
import { AdminGetLowStockController } from "../../../Controllers/Users/Admin/admin-get-low-stock.controller";
import { AdminSetRoleController } from "../../../Controllers/Users/Admin/admin-set-role.controller";
import { AdminExportOrdersController } from "../../../Controllers/Users/Admin/admin-export-orders.controller";

const adminRoutes: Router = Router();

// todas as rotas admin exigem autenticação + isAdmin (ou isSuperAdmin, para
// as que envolvem dados financeiros ou ações destrutivas sobre contas —
// fora do alcance de um admin com admin_role "support")
const auth    = MiddlewareAuthorization.authorization;
const isAdmin = MiddlewareAuthorization.isAdmin;
const isSuperAdmin = MiddlewareAuthorization.isSuperAdmin;

// ── Dashboard ─────────────────────────────────────────────────────────────────
// GET /admin/dashboard — dados financeiros, restrito a super_admin
adminRoutes.route("/admin/dashboard").get(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminGetDashboardController.get(req, res) });

// ── Utilizadores ──────────────────────────────────────────────────────────────
// GET /admin/users?page=1&limit=50&search=...&user_type=client&is_active=true&from=...&to=...
adminRoutes.route("/admin/users").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetAllUsersController.getAll(req, res) });

// GET /admin/users/:id_account
adminRoutes.route("/admin/users/:id_account").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetUserController.get(req, res) });

// PATCH /admin/users/:id_account/suspend — ação destrutiva, super_admin apenas
adminRoutes.route("/admin/users/:id_account/suspend").patch(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminSuspendAccountController.suspend(req as any, res) });

// PATCH /admin/users/:id_account/reactivate
adminRoutes.route("/admin/users/:id_account/reactivate").patch(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminReactivateAccountController.reactivate(req as any, res) });

// PATCH /admin/users/:id_account/promote  body: { user_type }
adminRoutes.route("/admin/users/:id_account/promote").patch(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminPromoteUserController.promote(req as any, res) });

// DELETE /admin/users/:id_account — hard delete + GDPR
adminRoutes.route("/admin/users/:id_account").delete(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminHardDeleteAccountController.hardDelete(req as any, res) });

// PATCH /admin/users/:id_account/admin-role  body: { admin_role: "super_admin"|"support" }
// só faz sentido para contas já do tipo "admin" — ver AdminSetRoleService
adminRoutes.route("/admin/users/:id_account/admin-role").patch(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminSetRoleController.set(req as any, res) });

// ── Pedidos ───────────────────────────────────────────────────────────────────
// GET /admin/orders?page=1&limit=50&status=pending&payment_method=stripe&from=...&to=...
adminRoutes.route("/admin/orders").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetAllOrdersController.getAll(req, res) });

// GET /admin/orders/:id_order
adminRoutes.route("/admin/orders/:id_order").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetOrderController.get(req, res) });

// ── Produtos ──────────────────────────────────────────────────────────────────
// GET /admin/products?page=1&limit=50&available=true&is_featured=false&low_stock=true
adminRoutes.route("/admin/products").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetAllProductsController.getAll(req, res) });

// GET /admin/products/low-stock?page=1&limit=50
adminRoutes.route("/admin/products/low-stock").get(auth, isAdmin,
  (req: Request, res: Response) => { AdminGetLowStockController.get(req, res) });

// ── Contabilidade ─────────────────────────────────────────────────────────────
// GET /admin/exports/orders?from=&to=&status=&payment_method= — CSV, super_admin apenas
adminRoutes.route("/admin/exports/orders").get(auth, isSuperAdmin,
  (req: Request, res: Response) => { AdminExportOrdersController.export(req, res) });

export { adminRoutes };
