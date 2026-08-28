import { prismaService } from "../../lib/prisma.service";
import bcrypt from "bcrypt"
import "dotenv/config"

// ======================================================
// HELPERS
// ======================================================

function unsplash(query: string, w = 800, h = 600) {
  return `https://images.unsplash.com/photo-${query}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

// ======================================================
// DATA
// ======================================================

const BRANDS = [
  { name: "Samsung" },
  { name: "Apple" },
  { name: "Sony" },
  { name: "JBL" },
];

const CATEGORIES = [
  {
    name: "Smartphones",
    slug: "smartphones",
    description: "Telemóveis e acessórios",
  },
  {
    name: "Computadores",
    slug: "computadores",
    description: "Laptops, desktops e periféricos",
  },
  {
    name: "Áudio",
    slug: "audio",
    description: "Auscultadores, colunas e som profissional",
  },
  {
    name: "Televisores",
    slug: "televisores",
    description: "Smart TVs e monitores",
  },
];

const TAGS = [
  "novo",
  "destaque",
  "promoção",
  "importado",
  "wireless",
  "4K",
  "android",
  "ios",
];

const PRODUCTS: {
  reference_code: string;
  name: string;
  slug: string;
  description: string;
  additional_info: string;
  price: number;
  weight: number;
  is_featured: boolean;
  brand: string;
  category: string;
  tags: string[];
  images: { photoId: string; alt: string }[];
  variants: { sku: string; color: string; size: string; stock: number; price: number }[];
}[] = [
  // ── 1. Samsung Galaxy S24
  {
    reference_code: "REF-SGS24",
    name: "Samsung Galaxy S24",
    slug: "samsung-galaxy-s24",
    description:
      "O Galaxy S24 combina desempenho de ponta com inteligência artificial integrada. Processador Exynos 2400, câmara de 50 MP e bateria de 4000 mAh para o dia inteiro.",
    additional_info:
      "Garantia: 12 meses. Inclui carregador de 25W e cabo USB-C. Compatível com redes 5G.",
    price: 250_000,
    weight: 0.167,
    is_featured: true,
    brand: "Samsung",
    category: "Smartphones",
    tags: ["novo", "android", "destaque"],
    images: [
      { photoId: "1610945415114-6dd0194c9a81", alt: "Samsung Galaxy S24 frente" },
      { photoId: "1598327105666-5b89351aff97", alt: "Samsung Galaxy S24 traseira" },
    ],
    variants: [
      { sku: "SGS24-PRT-256", color: "Preto Titânio", size: "256GB", stock: 15, price: 250_000 },
      { sku: "SGS24-CRE-256", color: "Creme", size: "256GB", stock: 10, price: 250_000 },
      { sku: "SGS24-PRT-512", color: "Preto Titânio", size: "512GB", stock: 6, price: 285_000 },
    ],
  },

  // ── 2. iPhone 15 Pro
  {
    reference_code: "REF-IP15P",
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    description:
      "Chip A17 Pro de 3 nm, moldura em titânio e câmara tripla com zoom óptico de 5×. O iPhone mais avançado de sempre.",
    additional_info:
      "Garantia: 12 meses Apple. Inclui cabo USB-C. iOS 17 pré-instalado.",
    price: 380_000,
    weight: 0.187,
    is_featured: true,
    brand: "Apple",
    category: "Smartphones",
    tags: ["novo", "ios", "destaque", "importado"],
    images: [
      { photoId: "1695048133547-f7d5b9f61b80", alt: "iPhone 15 Pro frente" },
      { photoId: "1678685888221-cebbd81b4a6b", alt: "iPhone 15 Pro lateral" },
    ],
    variants: [
      { sku: "IP15P-TIT-128", color: "Titânio Natural", size: "128GB", stock: 8, price: 380_000 },
      { sku: "IP15P-TIT-256", color: "Titânio Natural", size: "256GB", stock: 5, price: 420_000 },
      { sku: "IP15P-PRE-256", color: "Titânio Preto", size: "256GB", stock: 4, price: 420_000 },
    ],
  },

  // ── 3. Samsung Galaxy Book4 Pro
  {
    reference_code: "REF-SGBK4P",
    name: "Samsung Galaxy Book4 Pro",
    slug: "samsung-galaxy-book4-pro",
    description:
      "Laptop premium com ecrã AMOLED 14 120 Hz, Intel Core Ultra 7, 16 GB LPDDR5 e SSD NVMe de 512 GB. Autonomia até 22 horas.",
    additional_info:
      "Garantia: 12 meses. Inclui carregador 65W USB-C. Windows 11 Home.",
    price: 490_000,
    weight: 1.23,
    is_featured: false,
    brand: "Samsung",
    category: "Computadores",
    tags: ["novo", "importado"],
    images: [
      { photoId: "1496181133206-80ce9b88a853", alt: "Samsung Book4 Pro aberto" },
      { photoId: "1531297484001-80022131f5a1", alt: "Samsung Book4 Pro teclado" },
    ],
    variants: [
      { sku: "SGBK4P-GRF-512", color: "Grafite", size: "512GB", stock: 7, price: 490_000 },
      { sku: "SGBK4P-GRF-1TB", color: "Grafite", size: "1TB",   stock: 3, price: 560_000 },
    ],
  },

  // ── 4. Apple MacBook Air M3
  {
    reference_code: "REF-MBAM3",
    name: "MacBook Air M3",
    slug: "macbook-air-m3",
    description:
      "O MacBook Air mais rápido de sempre com chip M3. Design sem ventoinha, ecrã Liquid Retina 13.6, até 18 horas de bateria.",
    additional_info:
      "Garantia: 12 meses Apple. Inclui carregador MagSafe 35W. macOS Sonoma.",
    price: 570_000,
    weight: 1.24,
    is_featured: true,
    brand: "Apple",
    category: "Computadores",
    tags: ["novo", "ios", "destaque", "importado"],
    images: [
      { photoId: "1517336714731-489689fd1ca8", alt: "MacBook Air M3 aberto" },
      { photoId: "1611186871525-ef3a3c55ac9b", alt: "MacBook Air M3 lateral" },
    ],
    variants: [
      { sku: "MBAM3-STR-8-256",  color: "Estelar",  size: "8GB / 256GB", stock: 6, price: 570_000 },
      { sku: "MBAM3-STR-16-512", color: "Estelar",  size: "16GB / 512GB", stock: 4, price: 680_000 },
      { sku: "MEZ-M3-MNT-16-512", color: "Meia-Noite", size: "16GB / 512GB", stock: 3, price: 680_000 },
    ],
  },

  // ── 5. Sony WH-1000XM5
  {
    reference_code: "REF-SNXM5",
    name: "Sony WH-1000XM5",
    slug: "sony-wh-1000xm5",
    description:
      "Os melhores auscultadores com cancelamento de ruído do mercado. 30 horas de bateria, microfone de array e som Hi-Res Audio.",
    additional_info:
      "Garantia: 12 meses Sony. Inclui cabo USB-C e cabo de áudio 3.5mm.",
    price: 95_000,
    weight: 0.25,
    is_featured: true,
    brand: "Sony",
    category: "Áudio",
    tags: ["destaque", "wireless", "importado"],
    images: [
      { photoId: "1505740420928-5e560c06d30e", alt: "Sony WH-1000XM5 fundo branco" },
      { photoId: "1484704849700-f032a568e944", alt: "Sony WH-1000XM5 em uso" },
    ],
    variants: [
      { sku: "SNXM5-PRE", color: "Preto",  size: "Único", stock: 20, price: 95_000 },
      { sku: "SNXM5-PRT", color: "Prateado", size: "Único", stock: 12, price: 95_000 },
    ],
  },

  // ── 6. JBL Charge 5
  {
    reference_code: "REF-JBLC5",
    name: "JBL Charge 5",
    slug: "jbl-charge-5",
    description:
      "Coluna bluetooth portátil com 20 horas de reprodução, resistência IP67 e powerbank integrado para carregar os teus dispositivos.",
    additional_info:
      "Garantia: 12 meses JBL. Inclui cabo de carga USB-C.",
    price: 45_000,
    weight: 0.96,
    is_featured: false,
    brand: "JBL",
    category: "Áudio",
    tags: ["wireless", "promoção"],
    images: [
      { photoId: "1608043152269-423dbba4e7e1", alt: "JBL Charge 5 azul" },
      { photoId: "1545454675-3bce1b504b0e", alt: "JBL Charge 5 ao ar livre" },
    ],
    variants: [
      { sku: "JBLC5-AZL", color: "Azul",    size: "Único", stock: 25, price: 45_000 },
      { sku: "JBLC5-PRE", color: "Preto",   size: "Único", stock: 18, price: 45_000 },
      { sku: "JBLC5-VRM", color: "Vermelho", size: "Único", stock: 10, price: 45_000 },
    ],
  },

  // ── 7. Samsung Neo QLED 55"
  {
    reference_code: "REF-SGNQ55",
    name: "Samsung Neo QLED 55",
    slug: "samsung-neo-qled-55",
    description:
      "Smart TV 4K com tecnologia Mini LED, painel QLED 144 Hz, processador Neural Quantum 4K e Dolby Atmos. A imagem mais nítida da sua sala.",
    additional_info:
      "Garantia: 12 meses. Inclui 2 cabos HDMI 2.1 e controlo remoto solar. Tizen OS.",
    price: 680_000,
    weight: 16.5,
    is_featured: true,
    brand: "Samsung",
    category: "Televisores",
    tags: ["4K", "novo", "destaque"],
    images: [
      { photoId: "1593359677078-5f24f2fd6b4a", alt: "Samsung Neo QLED 55 sala de estar" },
      { photoId: "1601944179066-29786cb9d32a", alt: "Samsung Neo QLED detalhe ecrã" },
    ],
    variants: [
      { sku: "SGNQ55-PRE", color: "Preto", size: "55", stock: 5, price: 680_000 },
    ],
  },

  // ── 8. Sony Bravia XR 65" OLED
  {
    reference_code: "REF-SNBR65",
    name: "Sony Bravia XR 65 OLED",
    slug: "sony-bravia-xr-65-oled",
    description:
      "TV OLED 4K com processador cognitivo XR, Google TV integrado, HDMI 2.1 e Acoustic Surface Audio+. Cada pixel emite a sua própria luz.",
    additional_info:
      "Garantia: 12 meses Sony. Inclui 3 cabos HDMI 2.1 e suporte de parede.",
    price: 1_200_000,
    weight: 22.4,
    is_featured: false,
    brand: "Sony",
    category: "Televisores",
    tags: ["4K", "importado"],
    images: [
      { photoId: "1571415060527-0af9b73eca06", alt: "Sony Bravia OLED sala moderna" },
      { photoId: "1558618666-fcd25c85cd64", alt: "Sony Bravia OLED detalhe" },
    ],
    variants: [
      { sku: "SNBR65-PRE", color: "Preto", size: "65", stock: 3, price: 1_200_000 },
    ],
  },
];

// ======================================================
// SEED
// ======================================================
async function main() {
  console.log("🌱 A iniciar seed...\n");

  const adminPasswordHashed = await bcrypt.hash(process.env.ADMIN_PASSWORD!, 10)
  // ✅ FIX: senha hardcoded removida — agora vem de variável de ambiente (só usada em seed de dev/teste).
  if (!process.env.SEED_CLIENT_PASSWORD) {
    throw new Error("Defina SEED_CLIENT_PASSWORD no .env antes de rodar o seed.")
  }
  const clientPasswordHashed = await bcrypt.hash(process.env.SEED_CLIENT_PASSWORD, 10)

  await prismaService.$transaction(
    async (tx) => {

      // ── ADMIN ────────────────────────────────────────
      console.log("👤 A criar admin...");
      await tx.users.create({
        data: {
          first_name: "Admin",
          last_name: "Sistema",
          username: "admin",
          user_type: "admin",
          account_details: {
            create: {
              email: process.env.ADMIN_EMAIL!,
              password: adminPasswordHashed, // substituir por bcrypt real
              verified: true,
              provider: "Local",
            },
          },
          my_contacts: {
            create: { phone_number: "+244911000000", is_default: true },
          },
          my_addresses: {
            create: {
              street: "Av. 4 de Fevereiro, 100",
              city: "Luanda",
              province: "Luanda",
              country: "Angola",
              is_default: true,
            },
          },
        },
      });

      // ── CLIENT DE TESTE ──────────────────────────────
      console.log("👤 A criar cliente de teste...");
      const client = await tx.users.create({
        data: {
          first_name: "Emanuel",
          last_name: "António",
          username: "emaaton",
          user_type: "client",
          account_details: {
            create: {
              email: "teste@gmail.com",
              password: clientPasswordHashed, // substituir por bcrypt real
              verified: true,
              provider: "Local",
            },
          },
          my_contacts: {
            create: { phone_number: "+244944395940", is_default: true },
          },
          my_addresses: {
            create: {
              street: "Rua do Comércio, 45",
              city: "Luanda",
              province: "Luanda",
              country: "Angola",
              is_default: true,
            },
          },
        },
      });

      // ── MARCAS ───────────────────────────────────────
      console.log("🏷️  A criar marcas...");
      const brandMap: Record<string, number> = {};
      for (const b of BRANDS) {
        const brand = await tx.productBrands.create({ data: b });
        brandMap[b.name] = brand.id_brand;
      }

      // ── CATEGORIAS ───────────────────────────────────
      console.log("📂 A criar categorias...");
      const categoryMap: Record<string, number> = {};
      for (const c of CATEGORIES) {
        const category = await tx.productsCategories.create({ data: c });
        categoryMap[c.name] = category.id_category;
      }

      // ── TAGS ─────────────────────────────────────────
      console.log("🔖 A criar tags...");
      const tagMap: Record<string, number> = {};
      for (const t of TAGS) {
        const tag = await tx.productTags.create({ data: { tag: t } });
        tagMap[t] = tag.id_tag;
      }

      // ── PRODUTOS ─────────────────────────────────────
      console.log("📦 A criar produtos...\n");
      const createdProducts = [];

      for (const p of PRODUCTS) {
        const product = await tx.products.create({
          data: {
            reference_code: p.reference_code,
            name: p.name,
            slug: p.slug,
            description: p.description,
            additional_info: p.additional_info,
            price: p.price,
            weight: p.weight,
            is_featured: p.is_featured,
            available: true,

            id_category_fk: categoryMap[p.category],
            id_brand_fk: brandMap[p.brand],

            // imagens
            images: {
              create: p.images.map((img, index) => ({
                url: unsplash(img.photoId),
                is_main: index === 0,
                display_order: index + 1,
              })),
            },

            // variantes
            variants: {
              create: p.variants.map((v) => ({
                sku: v.sku,
                color: v.color,
                size: v.size,
                stock: v.stock,
                low_stock_alert: 3,
                price: v.price,
              })),
            },

            // tags (relação N:N)
            tags: {
              create: p.tags.map((t) => ({
                id_tag_fk: tagMap[t],
              })),
            },
          },
          include: { variants: true },
        });

        createdProducts.push(product);
        console.log(`  ✅ ${product.name} (${product.variants.length} variante(s))`);
      }

      // ── WISHLIST DO CLIENTE ───────────────────────────
      console.log("\n❤️  A adicionar produtos à wishlist do cliente...");
      const wishlistProducts = createdProducts.slice(0, 3);
      for (const p of wishlistProducts) {
        await tx.wishlistItems.create({
          data: {
            id_user_fk: client.id_user,
            id_product_fk: p.id_product,
          },
        });
      }

      // ── CARRINHO DO CLIENTE ───────────────────────────
      console.log("🛒 A criar carrinho do cliente...");
      await tx.carts.create({
        data: {
          id_user_fk: client.id_user,
          status: "active",
          cart_items: {
            create: createdProducts.slice(0, 2).map((p) => ({
              id_variant_fk: p.variants[0].id_variant,
              quantity: 1,
              price: p.variants[0].price,
            })),
          },
        },
      });

      // ── REVIEWS ──────────────────────────────────────
      console.log("⭐ A criar reviews...");
      const reviews = [
        { product: 0, rating: 5, comment: "Excelente smartphone! Câmara fantástica e muito fluido." },
        { product: 1, rating: 5, comment: "iPhone impecável. Vale cada kwanza." },
        { product: 4, rating: 4, comment: "Cancelamento de ruído incrível, uso diário no escritório." },
        { product: 5, rating: 4, comment: "Boa coluna para o preço, grave potente." },
        { product: 6, rating: 5, comment: "Imagem de TV incrível, melhor compra do ano!" },
      ];

      for (const r of reviews) {
        await tx.productsReviews.create({
          data: {
            rating: r.rating,
            comment: r.comment,
            id_product_fk: createdProducts[r.product].id_product,
            id_user_fk: client.id_user,
          },
        });
      }

      // ── CUPÃO DE BOAS-VINDAS ──────────────────────────
      console.log("🎟️  A criar cupão...");
      await tx.coupons.create({
        data: {
          code: "BEMVINDO10",
          description: "10% de desconto para novos clientes",
          discount_type: "percentage",
          discount_value: 10,
          minimum_amount: 50_000,
          usage_limit: 100,
          active: true,
          starts_at: new Date(),
          expires_at: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 dias
        },
      });

      await tx.coupons.create({
        data: {
          code: "DESCONTO50K",
          description: "50.000 Kz de desconto em compras acima de 300.000 Kz",
          discount_type: "fixed",
          discount_value: 50_000,
          minimum_amount: 300_000,
          usage_limit: 50,
          active: true,
          starts_at: new Date(),
          expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias
        },
      });

      console.log("\n✅ Seed concluído com sucesso!");
      console.log("─────────────────────────────────────────");
      console.log(`   👤 Admin:   admin@gmail.com`);
      console.log(`   👤 Cliente: teste@gmail.com`);
      console.log(`   📦 ${createdProducts.length} produtos criados`);
      console.log(`   🏷️  ${BRANDS.length} marcas | 📂 ${CATEGORIES.length} categorias`);
      console.log(`   🎟️  2 cupões activos`);
      console.log("─────────────────────────────────────────");
    },
    { timeout: 30_000 }
  );
}

main()
  .catch((err) => {
    console.error("\n❌ Erro no seed:", err.message);
    process.exit(1);
  })
  .finally(async () => {
    await prismaService.$disconnect();
  });