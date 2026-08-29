import NodeCache from "node-cache";
import { CACHE_KEYS, CACHE_TTL } from "./cache_keys";

class CacheService {
  private cache: NodeCache;

  constructor() {
    this.cache = new NodeCache({
      stdTTL: 300,
      checkperiod: 60,
      useClones: false,
      deleteOnExpire: true,
    });

    if (process.env.NODE_ENV === "development") {
      setInterval(() => {
        const stats = this.getStats();
        if (stats.keys > 0) {
          console.log(
            `[Cache] Keys: ${stats.keys}, Hits: ${stats.hits}, Misses: ${stats.misses}, Hit Rate: ${this.getHitRate()}%`
          );
        }
      }, 60000);
    }
  }

  // =========================
  // CORE METHODS
  // =========================

  get<T>(key: string): T | undefined {
    return this.cache.get<T>(key);
  }

  set<T>(key: string, value: T, ttl?: number): boolean {
    return this.cache.set(key, value, ttl!);
  }

  del(keys: string | string[]): number {
    return this.cache.del(keys);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  // =========================
  // PATTERN UTILS
  // =========================

  getKeysWithPrefix(prefix: string): string[] {
    return this.cache.keys().filter((k: string) => k.startsWith(prefix));
  }

  invalidatePattern(prefix: string): number {
    const keys = this.getKeysWithPrefix(prefix);
    return this.cache.del(keys);
  }

  // =========================
  // DOMAIN INVALIDATIONS
  // =========================

  // ── PRODUCTS ────────────────────────────────────────────────────────
  invalidateProducts(): void {
    this.invalidatePattern("products:");
    this.invalidatePattern("product:");
    console.log("[Cache] Products invalidated");
  }

  invalidateProduct(id: number): void {
    this.del([
      CACHE_KEYS.product(id),
      CACHE_KEYS.productImages(id),
      CACHE_KEYS.productTags(id),
      CACHE_KEYS.productVariants(id),
      CACHE_KEYS.productReviews(id),
    ]);
    // invalida também as listas onde este produto pode aparecer
    this.invalidatePattern("products:list:");
    this.invalidatePattern("products:featured:");
  }

  invalidateFeaturedProducts(): void {
    this.invalidatePattern("products:featured:");
  }

  // ── CATEGORIES ──────────────────────────────────────────────────────
  invalidateCategories(): void {
    this.invalidatePattern("categories:");
    console.log("[Cache] Categories invalidated");
  }

  invalidateCategory(id: number): void {
    this.del(CACHE_KEYS.category(id));
    this.invalidatePattern("categories:list:");
  }

  // ── BRANDS ──────────────────────────────────────────────────────────
  invalidateBrands(): void {
    this.invalidatePattern("brands:");
    this.invalidatePattern("brand:");
    console.log("[Cache] Brands invalidated");
  }

  invalidateBrand(id: number, name?: string): void {
    const keys: string[] = [CACHE_KEYS.brand(id)];
    if (name) keys.push(CACHE_KEYS.brandByName(name));
    this.del(keys);
    this.invalidatePattern("brands:list:");
  }

  // ── TAGS ────────────────────────────────────────────────────────────
  invalidateTags(): void {
    this.invalidatePattern("tags:");
    console.log("[Cache] Tags invalidated");
  }

  // ── VARIANTS ────────────────────────────────────────────────────────
  // chamado quando stock é actualizado ou variante editada
  invalidateVariant(id_variant: number, id_product: number): void {
    this.del([
      CACHE_KEYS.variant(id_variant),
      CACHE_KEYS.productVariants(id_product),
      CACHE_KEYS.product(id_product),
    ]);
  }

  // ── COUPONS ─────────────────────────────────────────────────────────
  invalidateCoupons(): void {
    this.invalidatePattern("coupons:");
    this.invalidatePattern("coupon:");
    console.log("[Cache] Coupons invalidated");
  }

  invalidateCoupon(id: string, code?: string): void {
    const keys: string[] = [CACHE_KEYS.coupon(id)];
    if (code) keys.push(CACHE_KEYS.couponCode(code));
    this.del(keys);
    this.invalidatePattern("coupons:list:");
  }

  // ── WISHLIST ─────────────────────────────────────────────────────────
  // chamado quando utilizador adiciona ou remove item
  invalidateWishlist(userId: number): void {
    this.invalidatePattern(`wishlist:${userId}:`);
  }

  // ── ORDERS ───────────────────────────────────────────────────────────
  invalidateOrders(userId: number): void {
    this.del(CACHE_KEYS.ordersList(userId));
  }

  invalidateOrder(id: number, userId: number): void {
    this.del([CACHE_KEYS.order(id), CACHE_KEYS.ordersList(userId)]);
  }

  // ── SHIPMENTS ────────────────────────────────────────────────────────
  invalidateShipments(): void {
    this.invalidatePattern("shipments:");
    this.invalidatePattern("shipment:");
    console.log("[Cache] Shipments invalidated");
  }

  invalidateShipment(id: string, orderId: number, trackingCode?: string): void {
    const keys: string[] = [CACHE_KEYS.shipment(id), CACHE_KEYS.shipmentOrder(orderId)];
    if (trackingCode) keys.push(CACHE_KEYS.shipmentTracking(trackingCode));
    this.del(keys);
    this.invalidatePattern("shipments:list:");
  }

  // ── ADMIN ─────────────────────────────────────────────────────────────
  invalidateAdminStatus(adminId: string): void {
    this.del(CACHE_KEYS.adminStatus(adminId));
  }

  // =========================
  // GLOBAL
  // =========================

  flush(): void {
    this.cache.flushAll();
    console.log("[Cache] flushed");
  }

  // =========================
  // STATS
  // =========================

  getStats() {
    return this.cache.getStats();
  }

  getHitRate(): string {
    const stats = this.cache.getStats();
    const total = stats.hits + stats.misses;
    if (total === 0) return "0.00";
    return ((stats.hits / total) * 100).toFixed(2);
  }
}

export const cacheService = new CacheService();