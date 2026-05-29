export const CACHE_KEYS = {
  // ── PRODUCTS ──────────────────────────────────────────────────────
  productsList:     (hash?: string) => `products:list:${hash || "all"}`,
  product:          (id: number)    => `product:${id}`,
  featuredProducts: ()              => `products:featured`,
  productImages:    (id: number)    => `product:${id}:images`,
  productTags:      (id: number)    => `product:${id}:tags`,
  productVariants:  (id: number)    => `product:${id}:variants`,
  productReviews:   (id: number)    => `product:${id}:reviews`,

  // ── CATEGORIES ────────────────────────────────────────────────────
  categoriesList: () => `categories:list:all`,
  category:       (id: number) => `category:${id}`,

  // ── BRANDS ────────────────────────────────────────────────────────
  brandsList: () => `brands:list:all`,
  brand:      (id: number) => `brand:${id}`,

  // ── TAGS ──────────────────────────────────────────────────────────
  tagsList: () => `tags:list:all`,

  // ── VARIANTS ──────────────────────────────────────────────────────
  variant: (id: number) => `variant:${id}`,

  // ── COUPONS ───────────────────────────────────────────────────────
  couponsList: () => `coupons:list:all`,
  coupon:      (id: string) => `coupon:${id}`,
  couponCode:  (code: string) => `coupon:code:${code.toUpperCase()}`,

  // ── WISHLIST ──────────────────────────────────────────────────────
  wishlist: (userId: number, hash?: string) => `wishlist:${userId}:${hash || "all"}`,

  // ── ORDERS ────────────────────────────────────────────────────────
  ordersList: (userId: number) => `orders:user:${userId}`,
  order:      (id: number)     => `order:${id}`,

  // ── SHIPMENTS ─────────────────────────────────────────────────────
  shipmentsList: () => `shipments:list:all`,
  shipment:      (id: string)      => `shipment:${id}`,
  shipmentOrder: (orderId: number) => `shipment:order:${orderId}`,

  // ── ADMIN ─────────────────────────────────────────────────────────
  adminStatus: (adminId: string) => `admin:${adminId}:status`,
};

export const CACHE_TTL = {
  // produtos — mudam com edições, mas são lidos com alta frequência
  PRODUCTS_LIST:    300,   // 5 min
  PRODUCT:          300,   // 5 min
  PRODUCT_IMAGES:   600,   // 10 min — imagens raramente mudam
  PRODUCT_FEATURED: 300,   // 5 min
  PRODUCT_VARIANTS: 120,   // 2 min — stock muda com vendas
  PRODUCT_REVIEWS:  300,   // 5 min

  // categorias e marcas — muito estáveis, TTL alto
  CATEGORIES: 3600,  // 1 hora
  CATEGORY:   3600,  // 1 hora
  BRANDS:     3600,  // 1 hora
  BRAND:      3600,  // 1 hora

  // tags — estáveis
  TAGS: 3600,  // 1 hora

  // variante individual
  VARIANT: 120,  // 2 min — stock sensível

  // cupões — mudam pouco mas expiram; TTL curto por segurança
  COUPONS_LIST: 120,  // 2 min
  COUPON:       120,  // 2 min
  COUPON_CODE:  60,   // 1 min — validação em tempo real, não pode estar stale

  // wishlist — por utilizador, muda com adds/removes
  WISHLIST: 180,  // 3 min

  // pedidos — sensíveis, TTL curto
  ORDERS_LIST: 60,  // 1 min
  ORDER:       60,  // 1 min

  // envios — consultados pelo cliente para rastrear
  SHIPMENTS_LIST: 120,  // 2 min
  SHIPMENT:       120,  // 2 min

  // admin
  ADMIN_STATUS: 30,  // 30 seg
};