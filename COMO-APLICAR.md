# Como aplicar estas correções no seu repositório

Eu não tenho (e não deveria ter) acesso de escrita ao seu GitHub — só cloneiei o repo
num ambiente isolado para analisar e editar o código. Escolha uma das opções abaixo
para levar as mudanças para o seu repo de verdade.

## Opção A — aplicar o patch (recomendado, mantém tudo de uma vez)

1. Baixe `auditoria-correcoes.patch`.
2. No seu clone local do repositório:
   ```bash
   git checkout -b fix/auditoria-seguranca
   git apply --stat auditoria-correcoes.patch   # opcional: ver o resumo antes
   git apply auditoria-correcoes.patch
   git add -A
   git commit -m "fix: correções da auditoria de segurança e integridade de dados"
   git push origin fix/auditoria-seguranca
   ```
3. Abra o Pull Request no GitHub normalmente.

Se `git apply` reclamar de conflito (por exemplo, se você já alterou algum desses
arquivos desde a auditoria), use `git apply --3way auditoria-correcoes.patch` para
resolver como um merge normal.

## Opção B — copiar os arquivos manualmente

`arquivos-corrigidos.zip` contém **apenas os 34 arquivos alterados/criados** (não o
repositório inteiro), na mesma estrutura de pastas do projeto. Descompacte por cima
do seu clone local, revise o `git diff` e comite.

## Antes de subir para produção — passos que exigem sua ação

Nenhuma dessas correções foi testada contra um banco real neste ambiente (não há
Postgres/Redis aqui). Antes do deploy:

1. **Rode o build e os testes**: `pnpm install && pnpm build && pnpm test`.
2. **Prisma**: nenhuma migration nova é necessária — os campos usados
   (`orders.discount_amount`, `OrderItems.id_variant_fk`) já existiam no schema.
3. **Variáveis de ambiente novas**, adicione ao seu `.env` real:
   - `SEED_CLIENT_PASSWORD` (só necessário se você rodar `prisma db seed`)
   - `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB` (usadas pelo `docker-compose.yaml`)
   - `REDIS_URL` (opcional — sem ela, o rate limiter e a idempotência do webhook
     caem automaticamente para um comportamento seguro em memória, mas sem
     compartilhar estado entre instâncias)
4. **Teste o fluxo de checkout de ponta a ponta** (carrinho → pedido → cupom →
   payment intent → webhook do Stripe em modo teste) — foi exatamente onde os bugs
   mais graves estavam, e não há testes automatizados cobrindo isso ainda.
5. **Revise a mensagem de login unificada** (`local-authentication.service.ts`): agora
   toda falha de autenticação retorna "Credenciais inválidas.", incluindo contas
   bloqueadas e contas criadas via Google. Isso é mais seguro (evita enumeração de
   contas), mas muda a experiência do usuário nesses dois casos — se o seu frontend
   dependia dessas mensagens específicas, será preciso ajustar.

## O que ficou pendente (não incluído neste patch)

- Idempotência do webhook do Stripe usando o `redis.service.ts` novo (o cliente
  Redis e o rate limiter distribuído já estão prontos; falta conectar o
  `create-stripe-webhook.controller.ts` a ele).
- Remoção do arquivo morto `src/Routes/Users/Client/routes.ts` (Router vazio).
- `REDIS_URL` ainda não foi adicionada ao `.env.example`.
- Nenhum teste de integração novo foi escrito para os fluxos corrigidos.
