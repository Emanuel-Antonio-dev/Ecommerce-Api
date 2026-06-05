interface usersDatas
{
    id_user?: number
    first_name: string
    last_name: string
    username: string
    user_type: "admin" | "client"
    id_account_fk: string
    created_at?: Date
    updated_at?: Date
}
// ── Filtros de listagem ──────────────────────────────────────────────────────

interface AdminUserFilters {
  search?: string;          // busca por username, email, first_name, last_name
  user_type?: "admin" | "client";
  is_active?: boolean;
  verified?: boolean;
  from?: string | Date;
  to?: string | Date;
}

interface AdminOrderFilters {
  status?: "pending" | "completed" | "cancelled" | "failed";
  payment_method?: "cash" | "card" | "transfer" | "paypal" | "stripe";
  id_user_fk?: number;
  from?: string | Date;
  to?: string | Date;
}

interface AdminProductFilters {
  available?: boolean;
  is_featured?: boolean;
  id_category_fk?: number;
  id_brand_fk?: number;
  low_stock?: boolean;      // filtra variantes com stock <= low_stock_alert
}

// ── Acções de gestão ─────────────────────────────────────────────────────────

interface SuspendAccountDatas {
  id_account: string;
  reason?: string;
}

interface PromoteUserDatas {
  id_account: string;
  user_type: "admin" | "client";
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

interface DashboardStats {
  total_users: number;
  total_orders: number;
  total_products: number;
  total_revenue: number;
  orders_by_status: Record<string, number>;
  low_stock_variants: number;
  active_coupons: number;
}

export { usersDatas,
    AdminUserFilters,
  AdminOrderFilters,
  AdminProductFilters,
  SuspendAccountDatas,
  PromoteUserDatas,
  DashboardStats,}