FROM node:alpine AS BUILDER_STEP

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

RUN npm prune --omit=dev

FROM node:alpine AS RUN_STEP

WORKDIR /app

COPY --from=BUILDER_STEP /app/node_modules ./node_modules
COPY --from=BUILDER_STEP /app/dist ./dist
COPY --from=BUILDER_STEP /app/prisma ./prisma
COPY --from=BUILDER_STEP /app/package.json ./package.json
COPY --from=BUILDER_STEP /app/package-lock.json ./package-lock.json
COPY --from=BUILDER_STEP /app/.env ./.env
COPY --from=BUILDER_STEP /app/.env.example ./.env.example


EXPOSE 3000
CMD ["npm", "run", "start:prod"]