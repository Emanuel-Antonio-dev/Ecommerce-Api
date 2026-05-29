# 🛒 Documentação téncica para E-Commerce

## Desenvolvido por: Emanuel António.

API oficial para plataforma de e-commerce construída com **Node.js**, **TypeScript**, **Express**, **Prisma ORM** e **PostgreSQL**. Suporta autenticação JWT, pagamentos via Stripe, uploads com Cloudinary, cache em memória e logs de auditoria.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Arquitectura](#arquitectura)
- [Instalação](#instalação)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Base de Dados](#base-de-dados)
- [Domínios](#domínios)
- [Cache](#cache)
- [Autenticação e Autorização](#autenticação-e-autorização)
- [Pagamentos](#pagamentos)
- [Uploads](#uploads)
- [Logs de Auditoria](#logs-de-auditoria)
- [Segurança](#segurança)
- [Rotas](#rotas)
- [Checklist de Produção](#checklist-de-produção)

---

## Visão Geral

A API cobre o ciclo de vida completo de um e-commerce:

```
Registo/Login → Carrinho → Pedido → Pagamento (Stripe) → Envio → Entrega
```

Funcionalidades principais:
- Gestão de produtos com variantes (cor, tamanho, stock)
- Categorias, marcas e tags
- Carrinho para utilizadores autenticados e guests
- Pedidos com rastreio de envio
- Pagamentos via Stripe com webhooks
- Cupões de desconto (percentagem e valor fixo)
- Wishlist por utilizador
- SEO settings por produto e categoria
- Sistema de reviews vinculado a itens de pedido
- Logs de auditoria por conta
- Cache em memória com invalidação por domínio

---

## Tecnologias

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 20+ |
| Linguagem | TypeScript 5+ |
| Framework | Express 4 |
| ORM | Prisma 5 |
| Base de dados | PostgreSQL 15+ |
| Pagamentos | Stripe |
| Uploads | Cloudinary + Multer |
| Cache | node-cache |
| Autenticação | JWT (access + refresh token) |
| Email | Nodemailer / Resend |
| Sanitização | sanitize-html |
| Segurança | Helmet, CORS, express-rate-limit |

---

## Arquitectura

```
src/
├── Common/
│   ├── Middlewares/
│   │   ├── Authorization/        # JWT middleware, isAdmin
│   │   └── Filters/              # HttpException handler
│   └── Utils/
│       ├── Cache/                # CacheService, cache_keys, ttl
│       ├── Emails/               # EmailProvider, SendEmail
│       ├── Uploads/              # Cloudinary config, Multer
│       └── helpers.ts            # buildPagination, PaginatedResult
├── Controllers/
│   └── Products/
│       ├── Categories/
│       ├── Brands/
│       ├── Tags/
│       ├── GeneralProducts/
│       ├── Variants/
│       ├── Shipments/
│       ├── Coupons/
│       └── Wishlist/
│   └── SystemLogs/
├── Repositories/
│   └── Products/
│       ├── GeneralProducts/
│       │   └── Images/
│       ├── Categories/
│       ├── Brands/
│       ├── Tags/
│       ├── Variants/
│       ├── Shipments/
│       ├── Coupons/
│       └── Wishlist/
│   └── SystemLogs/
├── Services/
│   └── (espelha estrutura de Controllers)
├── Routes/
│   └── (um ficheiro por domínio)
├── interfaces/
│   └── (DTOs por domínio)
├── lib/
│   └── prisma.service.ts         # instância singleton do PrismaClient
└── generated/
    └── prisma/                   # cliente gerado pelo Prisma
```

### Padrão por domínio

Cada domínio segue a mesma estrutura em camadas:

```
Interface (DTO) → Repository Abstract → Prisma Repository → Service → Controller → Route
```

- **Repositories** abstratos garantem desacoplamento do Prisma
- **Services** contêm toda a lógica de negócio e validações
- **Controllers** são estáticos, instanciam dependências no topo do ficheiro
- **Routes** definem acesso (público / autenticado / admin)

---

## Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/your-org/ecommerce-api.git
cd ecommerce-api

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# editar .env com os valores correctos

# 4. Gerar cliente Prisma
npx prisma generate

# 5. Correr migrations
npx prisma migrate deploy

# 6. Iniciar em desenvolvimento
npm run dev

# 7. Build para produção
npm run build
npm start
```

---

## Variáveis de Ambiente

```env
# Base de dados
DATABASE_URL="postgresql://user:password@host:5432/dbname?sslmode=require"

# JWT
JWT_SECRET="your-secret-key"
JWT_REFRESH_SECRET="your-refresh-secret"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"

# Stripe
STRIPE_SECRET_KEY="sk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Cloudinary
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Email
EMAIL_HOST="smtp.resend.com"
EMAIL_PORT=465
EMAIL_USER="..."
EMAIL_PASS="..."
EMAIL_FROM="noreply@yourdomain.com"

# Ambiente
NODE_ENV="production"
PORT=3000
```

---

## Base de Dados

### Schema principal

| Modelo | Descrição |
|---|---|
| `Accounts` | Credenciais de autenticação |
| `Users` | Perfil do utilizador |
| `Products` | Produtos com SEO, imagens, variantes |
| `ProductVariants` | Variantes com SKU, stock, cor, tamanho |
| `ProductsImages` | Imagens com `is_main` e `display_order` |
| `ProductsCategories` | Categorias com SEO |
| `ProductBrands` | Marcas |
| `ProductTags` | Tags e relação N:N com produtos |
| `Carts` / `CartItems` | Carrinho para users e guests |
| `Orders` / `OrderItems` | Pedidos e itens |
| `Payments` | Pagamentos com referência Stripe |
| `Shipments` | Envios com tracking e máquina de estados |
| `WishlistItems` | Wishlist por utilizador |
| `Coupons` / `CouponUsages` | Cupões e histórico de uso |
| `SeoSettings` / `SeoKeywords` | SEO por entidade |
| `SystemLogs` | Logs de auditoria por conta |
| `Authentications` / `Tokens` / `TwoFactorAuth` | Fluxos de auth |

### Migrations

```bash
# criar nova migration
npx prisma migrate dev --name nome_da_migration

# aplicar em produção
npx prisma migrate deploy

# reset (apenas desenvolvimento)
npx prisma migrate reset
```

---

## Domínios

### Produtos
- Criação com upload múltiplo de imagens (Cloudinary), variante inicial, tags e SEO
- `views_count` incrementado a cada visualização
- `sales_count` incrementado no webhook Stripe por `quantity`
- `is_main` e `display_order` geridos automaticamente pela posição no array de upload

### Variantes
- Cada produto tem uma ou mais variantes com SKU único, stock, cor e tamanho
- Stock decrementado na criação do pedido (transacção)
- Stock devolvido em cancelamento/falha de pagamento

### Shipments — Máquina de estados
```
pending → processing → shipped → delivered  (estado final)
       ↘             ↘         ↘
        cancelled (estado final em qualquer ponto)
```
- Transições inválidas bloqueadas
- `delivered` → propaga `orders.status = completed` e `orders.delivered_at`
- `cancelled` → propaga `orders.status = cancelled`

### Coupons
- Tipos: `percentage` (máx 100%) e `fixed` (capped ao total do pedido)
- Validações: `expires_at`, `starts_at`, `usage_limit`, `minimum_amount`, uso por utilizador
- Código normalizado para `UPPER TRIM`, regex `/^[A-Z0-9_-]{3,30}$/`
- Soft delete — preserva histórico de `CouponUsages`

### Wishlist
- Limite de 100 itens por utilizador
- `id_user_fk` sempre do token — nunca do body (previne IDOR)
- Produto indisponível não pode ser adicionado

### System Logs
- `ALLOWED_ACTIONS` fechado — nenhum valor arbitrário no campo `action`
- IPs de loopback ignorados
- `system_agent` truncado a 500 chars
- Falha silenciosa — nunca quebra o fluxo principal
- Purge com retenção mínima de 7 dias
- `purgeByAccount` para conformidade GDPR

---

## Cache

Cache em memória com `node-cache`. TTLs por domínio:

| Domínio | TTL | Motivo |
|---|---|---|
| Produto (detalhe) | 5 min | Alta leitura |
| Lista de produtos | 5 min | Alta leitura |
| Produtos em destaque | 5 min | Alta leitura |
| Categorias / Marcas | 1 hora | Muito estáveis |
| Tags | 1 hora | Muito estáveis |
| Variantes | 2 min | Stock sensível |
| Cupão por código | 1 min | Pode expirar a qualquer momento |
| Wishlist | 3 min | Por utilizador |
| Shipments | 2 min | Consultado para rastreio |

Invalidação automática em todas as operações de escrita por domínio.

---

## Autenticação e Autorização

- Access token JWT de curta duração + refresh token
- Middleware `MiddlewareAuthorization.authorization` — valida JWT
- Middleware `MiddlewareAuthorization.isAdmin` — verifica `user_type === admin`
- `id_user_fk` extraído sempre do token (`req.credentials?.sub`) — nunca do body

---

## Pagamentos

Fluxo Stripe:

```
1. Cliente cria pedido (Order)
2. API cria PaymentIntent no Stripe
3. Cliente confirma pagamento no frontend
4. Stripe dispara webhook payment_intent.succeeded
5. API: payment → paid, order → completed, sales_count++
6. Email de confirmação enviado
```

Webhooks tratados:
- `payment_intent.succeeded` → paid + sales_count + email
- `payment_intent.payment_failed` → failed + devolução de stock
- `payment_intent.canceled` → cancelled + devolução de stock
- `charge.refunded` → refunded

---

## Uploads

- Multer processa ficheiros `multipart/form-data`
- Upload para Cloudinary na pasta `ProductsImages`
- Formatos aceites: `jpg`, `jpeg`, `png`, `webp`
- Máximo de 10 imagens por produto
- Primeira imagem → `is_main: true`, `display_order: 0`
- Imagens subsequentes ordenadas pelo índice no array

---

## Logs de Auditoria

Acções registadas:

| Acção | Trigger |
|---|---|
| `login` | Login com sucesso |
| `logout` | Logout |
| `register` | Registo de conta |
| `password_reset` | Reset de password |
| `password_change` | Alteração de password |
| `email_change` | Alteração de email |
| `2fa_enabled` / `2fa_disabled` | Gestão de 2FA |
| `admin_login` | Login de administrador |
| `admin_action` | Acção administrativa |
| `account_deleted` | Eliminação de conta |

---

## Segurança

- **Helmet** — headers HTTP de segurança
- **CORS** — apenas domínios permitidos
- **Rate limiting** — `express-rate-limit` nas rotas públicas e de auth
- **sanitize-html** — todos os campos de texto livre
- **Stripe signature** — webhook validado com `constructEvent`
- **IDOR prevention** — `id_user_fk` sempre do token
- **SQL injection** — Prisma usa queries parametrizadas nativamente
- **Soft delete** — dados sensíveis nunca apagados permanentemente sem auditoria

---

## Rotas

Documentação completa disponível via Swagger:

```
GET /api-docs
```

Ou consultar o ficheiro `swagger.yaml` na raiz do projecto.

### Resumo por domínio

| Domínio | Base |
|---|---|
| Produtos | `/products` |
| Categorias | `/products/categories` |
| Marcas | `/products/brands` |
| Tags | `/products/tags` |
| Variantes | `/products/variants` |
| Carrinho | `/cart` |
| Pedidos | `/orders` |
| Pagamentos | `/payments` |
| Shipments | `/shipments` |
| Cupões | `/coupons` |
| Wishlist | `/wishlist` |
| Logs | `/system-logs` |
| Auth | `/auth` |

---

## Checklist de Produção

- [ ] `NODE_ENV=production`
- [ ] HTTPS obrigatório
- [ ] Chaves Stripe em modo live
- [ ] Webhook Stripe registado com endpoint de produção
- [ ] `DATABASE_URL` com SSL
- [ ] Backups automáticos configurados
- [ ] `prisma migrate deploy` executado (nunca `db push`)
- [ ] Rate limiting activo
- [ ] Helmet configurado
- [ ] CORS restrito aos domínios permitidos
- [ ] Variáveis de ambiente no servidor (não no `.env` commitado)
- [ ] PM2 ou similar para processo Node
- [ ] Health check endpoint activo (`GET /health`)
- [ ] Sentry ou similar para logs de erro em produção
- [ ] Cloudinary em conta de produção
- [ ] Email provider configurado para produção

---

## Licença

MIT

## OBS

- Inspired by how to sell drugs online