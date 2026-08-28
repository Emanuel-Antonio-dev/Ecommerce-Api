# Documentação de Rotas — Ecommerce API

Todas as rotas abaixo estão prefixadas com a base da API:

```
/api.ecommerce/v1
```

Exemplo: `POST /api.ecommerce/v1/auth/signin`.

> Esta documentação foi gerada lendo o código-fonte das rotas diretamente
> (`src/Routes/**`), não o `docs.yaml`/Swagger — por isso reflete exatamente o
> que está implementado, incluindo rotas que o Swagger não cobre. Também existe
> um Swagger UI interativo em `GET /api.ecommerce/v1/docs` (protegido por
> `authorizeRoles('admin')` em produção).

## Legenda

| Símbolo | Significado |
|---|---|
| 🌐 | Rota pública, sem autenticação |
| 🔒 | Requer usuário autenticado (qualquer `user_type`) |
| 👤 | Requer usuário autenticado do tipo `client` |
| 🛡️ | Requer usuário autenticado do tipo `admin` |

Autenticação é feita via **Bearer token** (`Authorization: Bearer <accessToken>`)
ou via **cookie httpOnly** (`accessToken`), dependendo de como o access token
foi emitido. O `id_user_fk`/dono do recurso é **sempre extraído do token**
(`req.credentials.sub`), nunca aceito no corpo da requisição.

---

## Autenticação (`/auth`)

| Método | Rota | Acesso | Rate limit | Descrição |
|---|---|---|---|---|
| GET | `/health` | 🌐 | — | Health check (`status`, `uptime`, `environment`) |
| GET | `/auth/me` | 🔒 | — | Retorna os dados do usuário autenticado |
| POST | `/auth/signup` | 🌐 | 5 req / 15 min | Cria conta (ver body abaixo) |
| POST | `/auth/signin` | 🌐 | 5 req / 2 min | Login local (email + senha) |
| POST | `/auth/refreshToken` | 🌐 | 10 req / 5 min | Gera novo access token a partir do refresh token |
| POST | `/auth/logout` | 🌐 | — | Invalida o refresh token atual |
| POST | `/auth/password/request` | 🌐 | 3 req / 15 min | Solicita e-mail de reset de senha |
| PUT | `/auth/password/reset` | 🌐 | 5 req / 15 min | Efetiva o reset com o token recebido por e-mail |
| POST | `/auth/otp/send` | 🌐 | 3 req / 5 min | Envia código OTP (2FA / verificação) |
| POST | `/auth/otp/verify-code` | 🌐 | 3 req / 2 min | Valida o código OTP |
| GET | `/auth/google/signin` | 🌐 | — | Inicia OAuth com Google |
| GET | `/auth/google/callback` | 🌐 | — | Callback do Google (redireciona para `REDIRECT_URI`) |
| GET | `/auth/facebook/signin` | 🌐 | — | Inicia OAuth com Facebook |
| GET | `/auth/facebook/callback` | 🌐 | — | Callback do Facebook |

**Body — `POST /auth/signup`**
```jsonc
{
  "first_name": "string",
  "last_name": "string",
  "username": "string",
  "email": "string",
  "password": "string",
  "phone_number": "string",
  "street": "string",
  "city": "string",
  "provider": "Local | Google | Facebook", // opcional
  "providerId": "string",                  // opcional (OAuth)
  "contacts": "...",                       // opcional
  "addresses": "..."                       // opcional
}
```
`user_type` **não é aceito** no body — toda conta criada por este endpoint nasce `client` (proteção contra escalonamento de privilégio).

**Body — `POST /auth/signin`**
```jsonc
{ "email": "string", "password": "string" }
```
Resposta de sucesso define os cookies `accessToken`/`refreshToken` (httpOnly) e também retorna `accessToken`/`refreshToken` no corpo, além de `cart_items` quando o usuário é `client` (mescla o carrinho de convidado, se houver cookie `id_guest_cart`).

---

## Usuários (`/users`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/users/:id_user` | 🔒 | Perfil do usuário (admin pode ver qualquer um; client só o próprio — checagem de ownership no service) |
| PATCH | `/users/:id_user` | 🔒 | Edita perfil |
| DELETE | `/users/:id_user` | 🔒 | Remove a própria conta |

**Body — `PATCH /users/:id_user`** (todos os campos opcionais)
```jsonc
{
  "first_name": "string", "last_name": "string", "email": "string",
  "phone_number": "string", "password": "string", "newPassword": "string",
  "street": "string", "city": "string", "province": "string",
  "country": "string", "reference": "string", "is_default": true
}
```

---

## Produtos (`/products`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/products` | 🌐 | Lista produtos (paginado) |
| GET | `/products/:id_product` | 🌐 | Detalhe do produto (incrementa `views_count`) |
| POST | `/products` | 🛡️ | Cria produto (multipart, até 10 imagens no campo `ProductImages`) |
| PATCH | `/products/:id_product` | 🛡️ | Edita produto (mesmo suporte a imagens) |
| DELETE | `/products/:id_product` | 🛡️ | Remove produto |
| GET | `/products/:id_product_fk/reviews` | 🌐 | Lista reviews do produto |
| POST | `/products/reviews` | 👤 | Cria review (só quem comprou o item pode avaliar) |

**Body — `POST /products`** (multipart/form-data)
```
name, description, additional_info, price, weight, stock, available_stock,
color, size, is_featured, id_category_fk, id_brand_fk, id_tags (CSV ou array)
ProductImages: até 10 arquivos (jpg/jpeg/png — ver seção Uploads)
```

**Body — `POST /products/reviews`**
```jsonc
{ "id_product_fk": 1, "rating": 5, "comment": "string" }
```

### Categorias (`/products/categories`)

| Método | Rota | Acesso |
|---|---|---|
| GET | `/products/categories` | 🌐 |
| GET | `/products/categories/:id_category` | 🌐 |
| POST | `/products/categories` | 🛡️ |
| PATCH | `/products/categories/:id_category` | 🛡️ |
| DELETE | `/products/categories/:id_category` | 🛡️ |
| DELETE | `/products/categories` | 🛡️ (remove todas) |

Body: `{ "name": "string", "description": "string" }`

### Marcas (`/brands`)

| Método | Rota | Acesso |
|---|---|---|
| GET | `/brands` | 🌐 |
| GET | `/brands/:name` | 🌐 |
| POST | `/brands` | 🛡️ — body `{ "name": "string" }` |
| PUT | `/brands/:id_brand` | 🛡️ — body `{ "name": "string" }` |
| DELETE | `/brands/:id_brand` | 🛡️ |
| DELETE | `/brands` | 🛡️ (remove todas) |

### Tags (`/tags`)

| Método | Rota | Acesso |
|---|---|---|
| GET | `/tags` | 🌐 | Lista todas as tags |
| GET | `/tags/:tag` | 🌐 | Busca por nome da tag |
| POST | `/tags` | 🛡️ — body `{ "tag": "string" }` ou `{ "tags": [...] }` |
| DELETE | `/tags/:id_tag` | 🛡️ |

> ⚠️ Existe um controller pronto (`GetAllTagsPerProductController`, "tags de um
> produto") cuja rota está **comentada** no código-fonte
> (`src/Routes/Products/GeneralProducts/routes.ts`). Achar/reativar essa rota
> é um bom primeiro *quick win* (ver `FUTURAS-FEATURES.md`).

### Variantes (`/products/variants`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/products/variants/:id_product/product` | 🌐 | Lista variantes de um produto |
| GET | `/products/variants/:id_variant` | 🌐 | Detalhe de uma variante |
| POST | `/products/variants` | 🛡️ | Cria variante |
| PATCH | `/products/variants/:id_variant/stock` | 🛡️ | Ajusta o stock |

Body — `POST /products/variants`: `{ "id_product_fk": 1, "sku": "string", "color": "string", "size": "string", "price": 10.5, "stock": 100 }`

---

## Carrinho (`/carts`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| POST | `/carts/guest` | 🌐 | Cria carrinho de convidado (cookie `id_guest_cart`) |
| POST | `/carts` | 👤 | Cria/obtém carrinho do usuário autenticado |
| GET | `/carts` | 👤 | Retorna o carrinho do usuário autenticado |
| PUT | `/carts/items/:id_cart_item` | 👤 | Atualiza quantidade de um item |
| DELETE | `/carts/items` | 👤 | Remove um item específico (via body) |
| DELETE | `/carts/:id_cart/items` | 👤 | Esvazia o carrinho |

> O carrinho de convidado é mesclado automaticamente com o do usuário no
> momento do login (`handleCart`, chamado em `SignIn`).

---

## Pedidos (`/orders`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| POST | `/orders` | 👤 | Cria pedido a partir do carrinho do usuário autenticado |
| PUT | `/orders/:id_order/status` | 🛡️ | Atualiza status do pedido |

**Body — `POST /orders`**
```jsonc
{
  "payment_method": "cash | card | transfer | paypal | stripe", // padrão: "cash"
  "shipping_street": "string",
  "shipping_city": "string",
  "shipping_province": "string",
  "shipping_country": "string",   // padrão: "Angola"
  "shipping_phone_number": "string"
}
```
> `total_amount` é sempre calculado no servidor a partir dos itens do
> carrinho — qualquer valor enviado pelo cliente nesse campo é ignorado.
> Status possíveis (`OrderStatus`): `pending`, `completed`, `cancelled`, `failed`.

---

## Pagamentos (`/payments`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| POST | `/payments/intent` | 🔒 | Cria um Stripe PaymentIntent para um pedido do próprio usuário (admin pode para qualquer um) |
| POST | `/webhook/stripe` | 🌐* | Webhook do Stripe (fora do `urlBase`, ver nota) |

Body — `POST /payments/intent`: `{ "id_order": 1 }`

> \* `/webhook/stripe` **não** fica sob `/api.ecommerce/v1` — está montada
> diretamente em `POST {urlBase}/webhook/stripe` com `express.raw()`, antes do
> `express.json()`, para permitir a validação da assinatura Stripe
> (`Stripe-Signature` header, verificada contra `STRIPE_WEBHOOK_SECRET`). Não
> tem "acesso público" no sentido de dados — requer assinatura válida do
> Stripe. Eventos tratados: `payment_intent.succeeded`,
> `payment_intent.payment_failed`, `payment_intent.canceled`. Idempotente
> (deduplicação por `event.id`).
>
> ⚠️ Os controllers `cancell-payment`, `check-payment`, `find-payment`,
> `update-payment` e `register-payment` existem em
> `src/Controllers/Payments/` mas **não estão conectados a nenhuma rota** —
> são funcionalidades prontas do lado do backend, mas ainda inacessíveis via
> API. Ver `FUTURAS-FEATURES.md`.

---

## Envios / Shipments (`/shipments`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| POST | `/shipments` | 🛡️ | Cria envio para um pedido |
| PATCH | `/shipments/:id_shipment/status` | 🛡️ | Atualiza status do envio |
| GET | `/shipments/find` | 🔒 | Lista envios (com filtros) |
| GET | `/shipments/order/:id_order` | 🔒 | Envio de um pedido específico |

Body — `POST /shipments`: `{ "id_order_fk": 1, "carrier": "string", "tracking_code": "string", "estimated_delivery": "ISO date", "shipped_at": "ISO date", "delivered_at": "ISO date" }`

**Máquina de estados (`ShipmentStatus`):**
```
pending → processing → shipped → delivered   (estado final)
              ↘             ↘
               cancelled (estado final, a partir de qualquer ponto anterior)
```
- `delivered` propaga `orders.status = completed`
- `cancelled` propaga `orders.status = cancelled`

---

## Cupões (`/coupons`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/coupons` | 🛡️ | Lista cupões (paginado) |
| GET | `/coupons/:id_coupon` | 🛡️ | Detalhe de um cupão |
| POST | `/coupons` | 🛡️ | Cria cupão |
| PATCH | `/coupons/:id_coupon` | 🛡️ | Edita cupão |
| DELETE | `/coupons/:id_coupon` | 🛡️ | Remove (soft delete) cupão |
| GET | `/coupons/find` | 🔒 | Busca cupão por código (usuário autenticado) |
| POST | `/coupons/apply` | 🔒 | Aplica um cupão a um pedido do próprio usuário |

**Body — `POST /coupons`**
```jsonc
{
  "code": "PROMO10",
  "discount_type": "percentage | fixed",
  "description": "string",
  "discount_value": 10,
  "minimum_amount": 50,
  "usage_limit": 100,
  "starts_at": "ISO date",
  "expires_at": "ISO date",
  "active": true
}
```

**Body — `POST /coupons/apply`**
```jsonc
{ "code": "PROMO10", "id_order_fk": 1 }
```
> O valor do pedido usado para validar o cupão vem **sempre** do banco de
> dados (nunca do body). O desconto calculado é persistido em
> `orders.discount_amount` e refletido no valor cobrado no
> `POST /payments/intent`.

---

## Wishlist (`/wishlist`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/wishlist` | 🔒 | Lista a wishlist do usuário (paginado) |
| POST | `/wishlist` | 🔒 | Adiciona produto (`{ "id_product_fk": 1 }`) — limite de 100 itens |
| DELETE | `/wishlist/:id_product_fk` | 🔒 | Remove um item |
| DELETE | `/wishlist/clear` | 🔒 | Esvazia a wishlist |

---

## Configurações de SEO (`/settings/seo`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/settings/seo/:id_seo_setting` | 🌐 | Busca configuração de SEO |
| POST | `/settings/seo` | 🛡️ | Cria configuração de SEO |
| PATCH | `/settings/seo/:id_seo_setting` | 🛡️ | Edita configuração de SEO |

Body: `{ "seo_title": "string", "seo_description": "string", "og_title": "string", "og_description": "string", "og_image": "string", "canonical_url": "string", "keywords": ["string"] }`

---

## Logs de sistema / auditoria (`/system-logs`)

| Método | Rota | Acesso | Descrição |
|---|---|---|---|
| GET | `/system-logs` | 🛡️ | Lista todos os logs (filtros: `page`, `limit`, `action`, `id_account_fk`, `ip_address`, `from`, `to`) |
| GET | `/system-logs/me` | 🔒 | Logs da própria conta autenticada |
| GET | `/system-logs/account/:id_account` | 🛡️ | Logs de uma conta específica |
| DELETE | `/system-logs/purge` | 🛡️ | Purga logs antigos (`?days=30`, mínimo 7 dias de retenção) |
| DELETE | `/system-logs/account/:id_account` | 🛡️ | Purga logs de uma conta (conformidade GDPR) |
| DELETE | `/system-logs/all` | 🛡️ | Purga **todos** os logs (operação destrutiva) |

Ações registradas: `login`, `logout`, `register`, `password_reset`, `password_change`, `email_change`, `2fa_enabled`, `2fa_disabled`, `admin_login`, `admin_action`, `account_deleted`, entre outras do enum `AuthContext`. A gravação de log nunca lança exceção que interrompa o fluxo principal (falha silenciosa).

---

## Painel administrativo (`/admin`)

Todas as rotas abaixo exigem 🛡️ (`admin`).

| Método | Rota | Descrição |
|---|---|---|
| GET | `/admin/dashboard` | Métricas gerais |
| GET | `/admin/users` | Lista usuários (filtros: `page`, `limit`, `search`, `user_type`, `is_active`, `verified`, `from`, `to`) |
| GET | `/admin/users/:id_account` | Detalhe de um usuário |
| PATCH | `/admin/users/:id_account/suspend` | Suspende conta |
| PATCH | `/admin/users/:id_account/reactivate` | Reativa conta |
| PATCH | `/admin/users/:id_account/promote` | Altera `user_type` (`{ "user_type": "admin" \| "client" }`) |
| DELETE | `/admin/users/:id_account` | Hard delete (GDPR) |
| GET | `/admin/orders` | Lista pedidos (filtros: `page`, `limit`, `status`, `payment_method`, `id_user_fk`, `from`, `to`) |
| GET | `/admin/orders/:id_order` | Detalhe de um pedido |
| GET | `/admin/products` | Lista produtos (filtros: `page`, `limit`, `available`, `is_featured`, `id_category_fk`, `id_brand_fk`, `low_stock`) |
| GET | `/admin/products/low-stock` | Produtos com stock baixo |

> Toda ação administrativa sensível (`suspend`, `reactivate`, `promote`,
> `hardDelete`) grava um `SystemLog` com `admin_id_account` = a conta do
> admin que executou a ação (`req.credentials.account_id`, presente no JWT).

---

## Documentação interativa

```
GET /api.ecommerce/v1/docs
```
Serve o Swagger UI a partir de `docs.yaml`. Em produção, exige `admin`
(`authorizeRoles('admin')`); fora de produção, é público.

## Referência rápida de enums

| Enum | Valores |
|---|---|
| `UsersTypes` | `admin`, `client` |
| `Providers` | `Google`, `Facebook`, `Local` |
| `OrderStatus` | `pending`, `completed`, `cancelled`, `failed` |
| `PaymentMethods` | `cash`, `card`, `transfer`, `paypal`, `stripe` |
| `ShipmentStatus` | `pending`, `processing`, `shipped`, `delivered`, `cancelled` |
| `DiscountType` | `percentage`, `fixed` |
