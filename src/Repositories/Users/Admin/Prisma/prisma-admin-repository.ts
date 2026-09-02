import { PrismaClient } from "../../../../../generated/prisma/client";
import {
  AdminUserFilters,
  AdminOrderFilters,
  AdminProductFilters,
  DashboardStats,} from "../../../../interfaces/Users/interface";
import { IAdminRepositories } from "../I-admin-repositories";

class PrismaAdminRepository implements IAdminRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  // ══════════════════════════════════════════════════════════════════════════
  // UTILIZADORES
  // ══════════════════════════════════════════════════════════════════════════

  async getAllUsers(take: number, skip: number, filters?: AdminUserFilters): Promise<any[]> {
    return await this.prisma.accounts.findMany({
      where: this.buildUserWhere(filters),
      select: {
        id_account:  true,
        email:       true,
        verified:    true,
        provider:    true,
        is_active:   true,
        created_at:  true,
        deleted_at:  true,
        user_details: {
          select: {
            id_user:    true,
            first_name: true,
            last_name:  true,
            username:   true,
            user_type:  true,
          },
        },
      },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  async countUsers(filters?: AdminUserFilters): Promise<number> {
    return await this.prisma.accounts.count({ where: this.buildUserWhere(filters) });
  }

  async getUserById(id_account: string): Promise<any> {
    return await this.prisma.accounts.findFirst({
      where: { id_account },
      select: {
        id_account:  true,
        email:       true,
        verified:    true,
        provider:    true,
        is_active:   true,
        created_at:  true,
        deleted_at:  true,
        user_details: {
          include: {
            my_addresses: true,
            my_contacts:  true,
          },
        },
      },
    });
  }

  async suspendAccount(id_account: string): Promise<any> {
    return await this.prisma.accounts.update({
      where: { id_account },
      data:  { is_active: false },
    });
  }

  async reactivateAccount(id_account: string): Promise<any> {
    return await this.prisma.accounts.update({
      where: { id_account },
      data:  { is_active: true, deleted_at: null },
    });
  }

  async promoteUser(id_account: string, user_type: "admin" | "client"): Promise<any> {
    return await this.prisma.users.update({
      where: { id_account_fk: id_account },
      data:  { user_type },
    });
  }

  async setAdminRole(id_account: string, admin_role: "super_admin" | "support"): Promise<any> {
    return await this.prisma.users.update({
      where: { id_account_fk: id_account },
      data:  { admin_role } as any, // as any: ver nota do client Prisma não regenerado
    });
  }

  async hardDeleteAccount(id_account: string): Promise<any> {
    // cascade apaga users, orders, etc conforme schema
    return await this.prisma.accounts.delete({ where: { id_account } });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PEDIDOS
  // ══════════════════════════════════════════════════════════════════════════

  async getAllOrders(take: number, skip: number, filters?: AdminOrderFilters): Promise<any[]> {
    return await this.prisma.orders.findMany({
      where: this.buildOrderWhere(filters),
      include: {
        user_details: {
          select: { id_user: true, first_name: true, last_name: true, username: true },
        },
        payment:  { select: { status: true, provider: true, amount: true, paid_at: true } },
        shipment: { select: { status: true, tracking_code: true, carrier: true } },
        order_items: {
          select: { quantity: true, price: true, product_name: true },
        },
      },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  // ✅ novo — usado para exportação contábil (CSV). Sem paginação de
  // propósito: um export cobre o período pedido por inteiro. `buildOrderWhere`
  // já reutiliza a mesma lógica de filtros de `getAllOrders`/`countOrders`.
  async getOrdersForExport(filters?: AdminOrderFilters): Promise<any[]> {
    return await this.prisma.orders.findMany({
      where: this.buildOrderWhere(filters),
      include: {
        user_details: {
          select: {
            first_name: true,
            last_name: true,
            account_details: { select: { email: true } },
          },
        },
        payment: { select: { status: true, provider: true, amount: true, paid_at: true } },
      },
      orderBy: { created_at: "asc" },
    });
  }

  async countOrders(filters?: AdminOrderFilters): Promise<number> {
    return await this.prisma.orders.count({ where: this.buildOrderWhere(filters) });
  }

  async getOrderById(id_order: number): Promise<any> {
    return await this.prisma.orders.findFirst({
      where: { id_order },
      include: {
        user_details: {
          select: { id_user: true, first_name: true, last_name: true, username: true },
        },
        order_items: {
          include: {
            variant: {
              select: { sku: true, color: true, size: true, price: true },
            },
          },
        },
        payment:      true,
        shipment:     true,
        coupon_usage: { include: { coupon: { select: { code: true, discount_type: true } } } },
      },
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  // PRODUTOS
  // ══════════════════════════════════════════════════════════════════════════

  async getAllProducts(take: number, skip: number, filters?: AdminProductFilters): Promise<any[]> {
    return await this.prisma.products.findMany({
      where: this.buildProductWhere(filters),
      include: {
        category: { select: { id_category: true, name: true } },
        brand:    { select: { id_brand: true, name: true } },
        images:   { where: { is_main: true }, select: { url: true }, take: 1 },
        variants: {
          select: {
            id_variant:      true,
            sku:             true,
            stock:           true,
            low_stock_alert: true,
            price:           true,
          },
        },
        _count: { select: { reviews: true  } },
      },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  async countProducts(filters?: AdminProductFilters): Promise<number> {
    return await this.prisma.products.count({ where: this.buildProductWhere(filters) });
  }

  async getLowStockVariants(take: number, skip: number): Promise<any[]> {
    return await this.prisma.productVariants.findMany({
      where: {
        stock: { lte: this.prisma.productVariants.fields.low_stock_alert as any },
      },
      include: {
        product: { select: { id_product: true, name: true, reference_code: true } },
      },
      orderBy: { stock: "asc" },
      take,
      skip,
    });
  }

  async countLowStockVariants(): Promise<number> {
    // raw query porque Prisma não suporta campo comparado com outro campo directamente
    const result: any[] = await this.prisma.$queryRaw`
      SELECT COUNT(*) as total
      FROM tbl_product_variants
      WHERE stock <= low_stock_alert
    `;
    return Number(result[0]?.total ?? 0);
  }

  // ══════════════════════════════════════════════════════════════════════════
  // DASHBOARD
  // ══════════════════════════════════════════════════════════════════════════

  async getDashboardStats(): Promise<DashboardStats> {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

    const [
      total_users,
      total_orders,
      total_products,
      revenueResult,
      ordersByStatus,
      low_stock_variants,
      active_coupons,
      recentPayments,
      topProductsRaw,
      open_support_tickets,
      failed_payments_last_7_days,
      shipments_stuck,
    ] = await Promise.all([
      this.prisma.accounts.count(),
      this.prisma.orders.count(),
      this.prisma.products.count({ where: { deleted_at: null } }),
      this.prisma.payments.aggregate({
        where:  { status: "paid" },
        _sum:   { amount: true },
      }),
      this.prisma.orders.groupBy({
        by:    ["status"],
        _count: { status: true },
      }),
      this.countLowStockVariants(),
      this.prisma.coupons.count({ where: { active: true, deleted_at: null } }),
      // ── receita dos últimos 30 dias, para agrupar por dia em memória
      // (evita depender de funções de data específicas do Postgres/MySQL
      // via SQL bruto — mais portável)
      this.prisma.payments.findMany({
        where: { status: "paid", paid_at: { gte: thirtyDaysAgo } },
        select: { amount: true, paid_at: true },
      }),
      this.prisma.products.findMany({
        where: { deleted_at: null },
        orderBy: { sales_count: "desc" },
        take: 5,
        select: { id_product: true, name: true, sales_count: true },
      }),
      // ✅ "needs attention" — pensado para uso diário, não só totais
      this.prisma.supportTickets.count({
        where: { status: { in: ["open", "waiting_customer"] } },
      }),
      this.prisma.payments.count({
        where: { status: "failed", created_at: { gte: sevenDaysAgo } },
      }),
      this.prisma.shipments.count({
        where: {
          status: { in: ["pending", "processing"] },
          created_at: { lte: threeDaysAgo },
        },
      }),
    ]);

    const orders_by_status: Record<string, number> = {};
    for (const row of ordersByStatus) {
      orders_by_status[row.status] = row._count.status;
    }

    // ── agrupa receita por dia (YYYY-MM-DD) ──────────────────────────────
    const revenueByDayMap = new Map<string, number>();
    for (const payment of recentPayments) {
      if (!payment.paid_at) continue;
      const dayKey = payment.paid_at.toISOString().slice(0, 10);
      revenueByDayMap.set(dayKey, (revenueByDayMap.get(dayKey) ?? 0) + Number(payment.amount));
    }
    const revenue_last_30_days = Array.from(revenueByDayMap.entries())
      .map(([date, revenue]) => ({ date, revenue }))
      .sort((a, b) => a.date.localeCompare(b.date));

    const top_products = topProductsRaw.map((p: any) => ({
      id_product: p.id_product,
      name: p.name,
      sales_count: p.sales_count,
    }));

    return {
      total_users,
      total_orders,
      total_products,
      total_revenue:      Number(revenueResult._sum.amount ?? 0),
      orders_by_status,
      low_stock_variants,
      active_coupons,
      revenue_last_30_days,
      top_products,
      needs_attention: {
        open_support_tickets,
        low_stock_variants,
        failed_payments_last_7_days,
        shipments_stuck,
      },
    };
  }

  // ══════════════════════════════════════════════════════════════════════════
  // WHERE BUILDERS
  // ══════════════════════════════════════════════════════════════════════════

  private buildUserWhere(filters?: AdminUserFilters) {
    if (!filters) return {};
    const where: any = {};

    if (filters.is_active !== undefined) where.is_active = filters.is_active;
    if (filters.verified  !== undefined) where.verified  = filters.verified;
    if (filters.from || filters.to) {
      where.created_at = {};
      if (filters.from) where.created_at.gte = new Date(filters.from);
      if (filters.to)   where.created_at.lte = new Date(filters.to);
    }
    if (filters.user_type) {
      where.user_details = { user_type: filters.user_type };
    }
    if (filters.search) {
      where.OR = [
        { email: { contains: filters.search, mode: "insensitive" } },
        { user_details: { username:   { contains: filters.search, mode: "insensitive" } } },
        { user_details: { first_name: { contains: filters.search, mode: "insensitive" } } },
        { user_details: { last_name:  { contains: filters.search, mode: "insensitive" } } },
      ];
    }
    return where;
  }

  private buildOrderWhere(filters?: AdminOrderFilters) {
    if (!filters) return {};
    const where: any = {};

    if (filters.status)         where.status         = filters.status;
    if (filters.payment_method) where.payment_method = filters.payment_method;
    if (filters.id_user_fk)     where.id_user_fk     = filters.id_user_fk;
    if (filters.from || filters.to) {
      where.created_at = {};
      if (filters.from) where.created_at.gte = new Date(filters.from);
      if (filters.to)   where.created_at.lte = new Date(filters.to);
    }
    return where;
  }

  private buildProductWhere(filters?: AdminProductFilters) {
    if (!filters) return { deleted_at: null };
    const where: any = { deleted_at: null };

    if (filters.available   !== undefined) where.available   = filters.available;
    if (filters.is_featured !== undefined) where.is_featured = filters.is_featured;
    if (filters.id_category_fk)           where.id_category_fk = filters.id_category_fk;
    if (filters.id_brand_fk)              where.id_brand_fk    = filters.id_brand_fk;
    if (filters.low_stock) {
      where.variants = { some: { stock: { lte: 5 } } };
    }
    return where;
  }
}

export { PrismaAdminRepository };
