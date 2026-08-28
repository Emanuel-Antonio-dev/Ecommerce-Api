# 🛒 Ecommerce API

API para plataforma de e-commerce construída com **Node.js**, **TypeScript**,
**Express 5**, **Prisma ORM 7** e **PostgreSQL**. Inclui autenticação JWT
(local + Google/Facebook OAuth), pagamentos via **Stripe**, upload de imagens
com Cloudinary, carrinho para usuários e convidados, cupões, wishlist, envios
com máquina de estados, rate limiting distribuído (Redis) e logs de auditoria.

> 📘 Para a lista completa de endpoints, ver [`ROTAS.md`](./ROTAS.md).
> 🗺️ Para o roadmap de features futuras, ver [`FUTURAS-FEATURES.md`](./FUTURAS-FEATURES.md).

---

## Índice

- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Como rodar localmente](#como-rodar-localmente)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Banco de dados](#banco-de-dados)
- [Autenticação e autorização](#autenticação-e-autorização)
- [Pagamentos (Stripe)](#pagamentos-stripe)
- [Uploads](#uploads)
- [Rate limiting](#rate-limiting)
- [Logs de auditoria](#logs-de-auditoria)
- [Segurança](#segurança)
- [Testes](#testes)
- [Docker](#docker)
- [Checklist de produção](#checklist-de-produção)

---

## Stack

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 22 |
| Linguagem | TypeScript (`strict: true`) |
| Framework HTTP | Express 5 |
| ORM | Prisma 7 (`@prisma/client`) |
| Banco de dados | PostgreSQL |
| Cache / rate limit distribuído | Redis |
| Pagamentos | Stripe |
| Uploads de imagem | Multer (staging local) → Cloudinary (armazenamento final) |
| Autenticação | JWT (access + refresh + temp) via `jsonwebtoken`; OAuth via Passport (Google, Facebook) |
| E-mail | Nodemailer (SMTP) |
| Sanitização | `sanitize-html` |
| Segurança HTTP | Helmet, CORS, `express-rate-limit`, CSRF próprio |
| Docs de API | Swagger (`docs.yaml` + `swagger-ui-express`) |
| Gerenciador de pacotes | pnpm |

---

## Arquitetura

Cada domínio de negócio segue a mesma estrutura em camadas:

```
Interface (DTO) → Repository (abstrato) → Repository (Prisma) → Service → Controller → Route
```

```
src/
├── app.ts                        # composição da aplicação Express (middlewares + rotas)
├── server.ts                     # bootstrap (listen)
├── Common/
│   ├── Middlewares/
│   │   ├── Authorization/        # JWT, isAdmin/isClient, CSRF, authorize-roles
│   │   ├── Limiters/             # rate limiting (Redis-backed, com fallback em memória)
│   │   └── Filters/              # HttpException, multer error handler
│   ├── Seeds/                    # seed.ts — dados iniciais (admin, cliente de exemplo)
│   └── Utils/
│       ├── AuthenticationsProcols/JwtOperations/  # geração/validação de tokens
│       └── Uploads/              # multer-config, validação de conteúdo (magic bytes), cloudinary-config
├── Controllers/                  # um por endpoint, estáticos, instanciam dependências no topo
├── Services/                     # regra de negócio (espelha a estrutura de Controllers)
├── Repositories/                 # acesso a dados — interface abstrata + implementação Prisma
├── Routes/                       # um router por domínio
├── interfaces/                   # DTOs/tipos por domínio
├── lib/                          # prisma.service.ts, redis.service.ts (singletons)
prisma/
├── schema.prisma
└── migrations/
generated/prisma/                 # cliente Prisma gerado (gitignored — ver nota abaixo)
```

> ⚠️ **`generated/prisma/` é gerado, não deve ser versionado.** Sempre rode
> `pnpm install` (que já dispara `prisma generate` via hook `postinstall`) ou
> `pnpm prisma generate` manualmente após clonar o repositório ou alterar o
> `schema.prisma`. Se o build (`tsc`) falhar com erros do tipo
> `Property '...' does not exist on type 'never'`, é sinal de que o client
> está desatualizado em relação ao schema — regenere-o.

---

## Como rodar localmente

```bash
# 1. Clonar
git clone https://github.com/Emanuel-Antonio-dev/Ecommerce-Api.git
cd Ecommerce-Api

# 2. Instalar dependências (também gera o Prisma Client via postinstall)
pnpm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# preencher .env com os valores reais

# 4. Subir Postgres + Redis localmente (opcional, se não usar serviços gerenciados)
docker compose up -d

# 5. Aplicar o schema no banco
pnpm prisma migrate dev
# (ou, em ambiente sem migrations formais ainda: pnpm prisma db push)

# 6. (opcional) popular dados iniciais — cria conta admin e cliente de exemplo
pnpm run build && pnpm run seed

# 7. Rodar em desenvolvimento (watch + ts-node)
pnpm run start:dev

# 8. Build + produção
pnpm run build
pnpm run start:prod
```

A API sobe com todas as rotas prefixadas em `/api.ecommerce/v1` (ver
[`ROTAS.md`](./ROTAS.md)). Health check disponível em
`GET /api.ecommerce/v1/health`.

---

## Variáveis de ambiente

Veja `.env.example` para a lista completa e atualizada. Resumo por categoria:

| Categoria | Variáveis |
|---|---|
| Servidor | `PORT`, `NODE_ENV`, `ALLOWED_ORIGINS` (CORS + CSRF) |
| Banco de dados | `DATABASE_URL`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` (docker-compose) |
| Cache / rate limit | `REDIS_URL` (opcional — sem ele, cai para rate limiting em memória) |
| JWT | `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `JWT_TEMP_SECRET` |
| OAuth Google | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET_KEY`, `GOOGLE_CLIENT_CALLBACK_URL` |
| OAuth Facebook | `FACEBOOK_CLIENT_ID`, `FACEBOOK_CLIENT_SECRET_KEY`, `FACEBOOK_CLIENT_CALLBACK_URL` |
| E-mail (SMTP) | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD` |
| Redirecionamentos | `RESET_PASSWORD_URI`, `REDIRECT_URI` |
| Conta admin inicial (seed) | `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `ADMIN_FIRST_NAME`, `ADMIN_LAST_NAME`, `ADMIN_USERNAME`, `ADMIN_PHONE_NUMBER` |
| Conta cliente inicial (seed) | `SEED_CLIENT_PASSWORD` |
| Uploads | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET` |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_VISA_FAKE_CARD` (testes) |

**Nunca** copie o `.env` real para uma imagem Docker, repositório público ou
canal de mensagens — ver seção [Segurança](#segurança).

---

## Banco de dados

Modelos principais (`prisma/schema.prisma`):

| Modelo | Descrição |
|---|---|
| `Accounts` | Credenciais de login (e-mail, senha com hash, provider) |
| `Users` | Perfil (nome, `user_type`, vínculo 1:1 com `Accounts`) |
| `Products` / `ProductVariants` / `ProductsImages` | Catálogo, variantes (SKU/cor/tamanho/stock), imagens |
| `ProductsCategories` / `ProductBrands` / `ProductTags` | Taxonomia |
| `Carts` / `CartItems` | Carrinho (usuário ou convidado) |
| `Orders` / `OrderItems` | Pedidos e itens (com `discount_amount` do cupão aplicado) |
| `Payments` | Registro de pagamento vinculado ao Stripe PaymentIntent |
| `ProcessedWebhookEvents` | Deduplicação de eventos de webhook do Stripe |
| `Shipments` | Envio com máquina de estados e rastreio |
| `Coupons` / `CouponUsages` | Cupões e histórico de uso (com `@@unique` por pedido) |
| `WishlistItems` | Lista de desejos por usuário (limite de 100 itens) |
| `SeoSettings` | Metadados de SEO por entidade |
| `SystemLogs` | Auditoria de ações sensíveis |
| `Authentications` / `Tokens` / `TwoFactorAuth` | Fluxos de autenticação e 2FA |

```bash
pnpm prisma studio          # explorar o banco visualmente
pnpm prisma migrate dev     # criar/aplicar migration em desenvolvimento
pnpm prisma migrate deploy  # aplicar migrations em produção (nunca db push)
```

---

## Autenticação e autorização

- **Access token** (curta duração) + **refresh token** (7 dias) + **temp
  token** (usado no fluxo OAuth). Segredos separados por tipo
  (`JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, `JWT_TEMP_SECRET`).
- O payload do JWT carrega `sub` (id do usuário), `user_type` e `account_id`
  (id da conta — usado para atribuir corretamente as ações nos logs de
  auditoria de admin).
- `MiddlewareAuthorization.authorization` valida o token (cookie ou Bearer).
  `MiddlewareAuthorization.isAdmin` / `.isClient` (e o helper genérico
  `authorizeRoles(...)`) checam `user_type`.
- **`id_user_fk` é sempre extraído do token** (`req.credentials.sub`), nunca
  aceito no corpo da requisição — previne IDOR (ex.: criar um pedido "em
  nome" de outro usuário).
- Login com Google/Facebook usa Passport + fluxo OAuth padrão, com token
  temporário emitido no callback.

---

## Pagamentos (Stripe)

```
1. Cliente cria o pedido → POST /orders (total calculado no servidor)
2. Cliente aplica cupão (opcional) → POST /coupons/apply (desconto persistido em orders.discount_amount)
3. Cliente solicita o PaymentIntent → POST /payments/intent (valida que o pedido é dele)
4. Frontend confirma o pagamento com o client_secret retornado
5. Stripe dispara o webhook → POST {urlBase}/webhook/stripe
6. API processa o evento de forma idempotente (ProcessedWebhookEvents) e atualiza payment/order/stock
```

Eventos tratados no webhook:

| Evento | Efeito |
|---|---|
| `payment_intent.succeeded` | `payment → paid`, `order → completed`, `sales_count++` |
| `payment_intent.payment_failed` | `payment → failed`, estoque devolvido |
| `payment_intent.canceled` | `payment → cancelled`, estoque devolvido |

---

## Uploads

- `multer` recebe arquivos `multipart/form-data` e grava temporariamente em
  disco local; em seguida cada imagem é enviada ao **Cloudinary**
  (`cloudinary.uploader.upload`) e a URL final (`secure_url`) é o que fica
  persistido no banco.
- Formatos aceitos: **apenas `jpeg`/`jpg`/`png`** (SVG foi removido — risco de
  XSS armazenado).
- Validação em duas camadas: `mimetype` declarado pelo cliente **e**
  assinatura binária real do arquivo (magic bytes), para não confiar apenas
  no header controlável pelo cliente.
- Limite de 5MB por arquivo, até 10 imagens por produto (`ProductImages`).
- A primeira imagem enviada vira `is_main: true`.

---

## Rate limiting

`express-rate-limit` com store customizado:

- Se `REDIS_URL` estiver definido → contadores compartilhados no Redis
  (correto para múltiplas instâncias/réplicas).
- Caso contrário → fallback automático para armazenamento em memória
  (adequado só para uma única instância).

Limites dedicados por rota sensível (`signup`, `signin`, `refresh-token`,
`password-request`, `password-reset`, `otp-send`, `otp-verify`) — ver tabela
completa em [`ROTAS.md`](./ROTAS.md).

---

## Logs de auditoria

Toda ação sensível (login, logout, registro, troca de senha, ações de admin,
exclusão de conta, etc.) gera um `SystemLog`, associado à conta que a
executou (`account_id` do JWT). A gravação de log:

- nunca lança exceção que interrompa o fluxo principal (falha silenciosa);
- é consultável por `GET /system-logs` (admin, com filtros) ou
  `GET /system-logs/me` (o próprio usuário);
- pode ser purgada com retenção mínima de 7 dias, inclusive por conta
  (`purgeByAccount`, útil para conformidade GDPR).

---

## Segurança

- **Helmet** com CSP, HSTS (produção) e `frameguard: deny`.
- **CORS** restrito a `ALLOWED_ORIGINS`.
- **CSRF** próprio: exige `Origin` válida quando a requisição é autenticada
  via cookie; Bearer token (mobile/Postman) não é afetado.
- **Uploads** validados por conteúdo real, não só `mimetype` (ver acima).
- **Enumeração de conta** mitigada no login e no fluxo de "esqueci minha
  senha" (respostas/tempo de resposta uniformizados).
- **IDOR**: dono do recurso sempre resolvido a partir do token.
- **Idempotência** no webhook do Stripe (`ProcessedWebhookEvents`).
- **Concorrência**: decremento de estoque e aplicação de cupão são
  operações atômicas (evita overselling e reuso indevido de cupão em
  requisições simultâneas).
- **SQL injection**: Prisma usa queries parametrizadas; os únicos usos de
  `$queryRaw` no projeto usam template literals 100% estáticos.
- **Secrets**: nunca copiados para a imagem Docker (ver `.dockerignore` e
  `Dockerfile`); container roda como usuário não-root.

---

## Testes

```bash
pnpm test
```

Cobertura atual concentrada em autenticação
(`tests/__tests__/Auth/*.spec.ts` — signup, signin, logout, OTP, reset de
senha) e um health check. **Carrinho, pedidos, pagamentos, cupões e admin
ainda não têm testes automatizados** — ver `FUTURAS-FEATURES.md`.

---

## Docker

```bash
docker compose up -d          # Postgres + Redis + API, para desenvolvimento
docker build -t ecommerce-api .
docker run --env-file .env -p 3000:3000 ecommerce-api
```

O `Dockerfile` é multi-stage: builda com todas as devDependencies, depois
copia só `node_modules` (produção) + `dist` + `prisma` para a imagem final,
que roda como usuário `node` (não root). **O `.env` nunca é copiado para a
imagem** — as variáveis devem ser injetadas em runtime.

---

## Checklist de produção

- [ ] `NODE_ENV=production`
- [ ] HTTPS obrigatório (proxy/load balancer)
- [ ] Chaves Stripe em modo live + webhook registrado com o endpoint de produção
- [ ] `DATABASE_URL` com SSL
- [ ] `REDIS_URL` configurado (rate limiting distribuído, se houver múltiplas instâncias)
- [ ] Backups automáticos do Postgres
- [ ] `prisma migrate deploy` executado (nunca `db push` em produção)
- [ ] `ALLOWED_ORIGINS` restrito aos domínios reais do frontend
- [ ] Segredos injetados via variáveis de ambiente do orquestrador (nunca no `.env` commitado ou na imagem)
- [ ] `GET /health` monitorado pelo orquestrador/load balancer
- [ ] Logging estruturado + rastreamento de erros (ex.: Sentry) — ainda não integrado, ver `FUTURAS-FEATURES.md`
- [ ] Cloudinary em conta/plano de produção
- [ ] Provedor de e-mail (SMTP) configurado para produção

---

## Licença

MIT
