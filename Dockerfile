FROM node:22-alpine AS BUILDER_STEP

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:22-alpine AS RUN_STEP

WORKDIR /app

COPY --from=BUILDER_STEP /app/node_modules ./node_modules
COPY --from=BUILDER_STEP /app/dist ./dist
COPY --from=BUILDER_STEP /app/prisma ./prisma
COPY --from=BUILDER_STEP /app/package.json ./package.json
COPY --from=BUILDER_STEP /app/package-lock.json ./package-lock.json

# ✅ FIX: nunca copiar .env/.env.example para a imagem final — vazava segredos de
# produção (DATABASE_URL, JWT_*_SECRET, STRIPE_SECRET_KEY, SMTP_PASSWORD, etc.)
# para qualquer pessoa com acesso à imagem. As variáveis devem ser injetadas em
# runtime via `--env-file`, secrets do orquestrador (Docker/K8s) ou o painel do
# provedor de deploy.

# ✅ FIX: roda como usuário não-root dentro do container.
RUN chown -R node:node /app
USER node

EXPOSE 3000
CMD ["npm", "run", "start:prod"]