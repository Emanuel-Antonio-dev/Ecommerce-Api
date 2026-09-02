import { 
  AdminUserFilters,
  AdminOrderFilters,
  AdminProductFilters,
  DashboardStats,} from "../../../interfaces/Users/interface";

abstract class IAdminRepositories {
  // ── Utilizadores ──────────────────────────────────────────────────────────
  abstract getAllUsers(take: number, skip: number, filters?: AdminUserFilters): Promise<any[]>;
  abstract countUsers(filters?: AdminUserFilters): Promise<number>;
  abstract getUserById(id_account: string): Promise<any>;
  abstract suspendAccount(id_account: string): Promise<any>;
  abstract reactivateAccount(id_account: string): Promise<any>;
  abstract promoteUser(id_account: string, user_type: "admin" | "client"): Promise<any>;
  abstract setAdminRole(id_account: string, admin_role: "super_admin" | "support"): Promise<any>;
  abstract hardDeleteAccount(id_account: string): Promise<any>;

  // ── Pedidos ───────────────────────────────────────────────────────────────
  abstract getAllOrders(take: number, skip: number, filters?: AdminOrderFilters): Promise<any[]>;
  abstract countOrders(filters?: AdminOrderFilters): Promise<number>;
  abstract getOrderById(id_order: number): Promise<any>;
  abstract getOrdersForExport(filters?: AdminOrderFilters): Promise<any[]>;

  // ── Produtos ──────────────────────────────────────────────────────────────
  abstract getAllProducts(take: number, skip: number, filters?: AdminProductFilters): Promise<any[]>;
  abstract countProducts(filters?: AdminProductFilters): Promise<number>;
  abstract getLowStockVariants(take: number, skip: number): Promise<any[]>;
  abstract countLowStockVariants(): Promise<number>;

  // ── Dashboard ─────────────────────────────────────────────────────────────
  abstract getDashboardStats(): Promise<DashboardStats>;
}

export { IAdminRepositories };
