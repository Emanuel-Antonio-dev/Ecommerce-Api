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
  status?: "pending" | "confirmed" | "completed" | "cancelled" | "failed";
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

interface RevenueByDay {
  date: string; // "YYYY-MM-DD"
  revenue: number;
}

interface TopProduct {
  id_product: number;
  name: string;
  sales_count: number;
}

interface DashboardNeedsAttention {
  open_support_tickets: number;
  low_stock_variants: number;
  failed_payments_last_7_days: number;
  shipments_stuck: number; // pending/processing há mais de 3 dias
}

interface DashboardStats {
  total_users: number;
  total_orders: number;
  total_products: number;
  total_revenue: number;
  orders_by_status: Record<string, number>;
  low_stock_variants: number;
  active_coupons: number;
  // ✅ novo — pensado para uso diário, não só uma fotografia de totais
  revenue_last_30_days: RevenueByDay[];
  top_products: TopProduct[];
  needs_attention: DashboardNeedsAttention;
}

export { usersDatas,
    AdminUserFilters,
  AdminOrderFilters,
  AdminProductFilters,
  SuspendAccountDatas,
  PromoteUserDatas,
  DashboardStats,
  RevenueByDay,
  TopProduct,
  DashboardNeedsAttention,}