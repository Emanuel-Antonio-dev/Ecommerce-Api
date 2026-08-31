import {randomBytes} from "node:crypto"
export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    total_pages: number;
  };
}

export function buildPagination(params: PaginationParams): {
  skip: number;
  take: number;
  page: number;
  limit: number;
} {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(100, Math.max(1, params.limit ?? 20));
  return { skip: (page - 1) * limit, take: limit, page, limit };
}
export const randonTrackingCode = randomBytes(6).toString('hex').toUpperCase()

export const COUPON_CODE_REGEX = /^[A-Z0-9_-]{3,30}$/;
const ADMIN_DEFAULT_LIMIT = 50;
const ADMIN_MAX_LIMIT     = 100;

interface AdminPagination {
  take: number;
  skip: number;
  page: number;
}

function buildAdminPagination(page?: number, limit?: number): AdminPagination {
  const safePage  = page  && page  > 0 ? page  : 1;
  const safeLimit = limit && limit > 0
    ? Math.min(limit, ADMIN_MAX_LIMIT)
    : ADMIN_DEFAULT_LIMIT;

  return {
    take: safeLimit,
    skip: (safePage - 1) * safeLimit,
    page: safePage,
  };
}

function buildAdminMeta(total: number, pagination: AdminPagination, returned: number) {
  return {
    page:        pagination.page,
    limit:       pagination.take,
    returned,
    totalItems:  total,
    totalPages:  Math.ceil(total / pagination.take),
  };
}

// valida intervalo de datas — janela máxima de 180 dias
function validateDateRange(from?: string | Date, to?: string | Date): void {
  if (!from && !to) return;

  const f = from ? new Date(from) : null;
  const t = to   ? new Date(to)   : null;

  if (f && isNaN(f.getTime())) throw new Error("Data 'from' inválida");
  if (t && isNaN(t.getTime())) throw new Error("Data 'to' inválida");
  if (f && t && t < f)         throw new Error("'to' não pode ser anterior a 'from'");

  if (f && t) {
    const days = (t.getTime() - f.getTime()) / (1000 * 60 * 60 * 24);
    if (days > 180) throw new Error("Intervalo máximo de consulta: 180 dias");
  }
}

const VALID_USER_TYPES = ["admin", "client"] as const;
type UserType = (typeof VALID_USER_TYPES)[number];

function isValidUserType(value: unknown): value is UserType {
  return typeof value === "string" && (VALID_USER_TYPES as readonly string[]).includes(value);
}
export { buildAdminPagination, buildAdminMeta, validateDateRange, ADMIN_DEFAULT_LIMIT, ADMIN_MAX_LIMIT, isValidUserType };
