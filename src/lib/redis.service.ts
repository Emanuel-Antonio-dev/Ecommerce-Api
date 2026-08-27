import { createClient, RedisClientType } from "redis";

// ✅ MELHORIA: cliente Redis único e compartilhado. O pacote `redis` já era
// dependência do projeto (package.json) mas nunca era instanciado em lugar
// nenhum — nem o rate limiter nem a idempotência do webhook do Stripe usavam
// armazenamento compartilhado entre instâncias.
//
// Se REDIS_URL não estiver configurada, o cliente simplesmente não conecta e
// os consumidores (rate limiter, idempotência de webhook) devem cair de volta
// para um comportamento seguro em memória — ver `redis-store.ts` e o
// controller do webhook.
let client: RedisClientType | null = null;
let connecting: Promise<RedisClientType> | null = null;

function createRedisClient(): RedisClientType {
  const redisUrl = process.env.REDIS_URL;
  const newClient = createClient({ url: redisUrl }) as RedisClientType;

  newClient.on("error", (err) => {
    console.error("[Redis] connection error:", err.message);
  });

  return newClient;
}

/**
 * Retorna um cliente Redis já conectado, ou `null` se REDIS_URL não estiver
 * configurada ou a conexão falhar — os chamadores devem sempre tratar o
 * caso `null` com um fallback seguro (nunca travar a aplicação por causa do
 * Redis estar fora do ar).
 */
export async function getRedisClient(): Promise<RedisClientType | null> {
  if (!process.env.REDIS_URL) {
    return null;
  }

  if (client?.isOpen) {
    return client;
  }

  if (!connecting) {
    client = createRedisClient();
    connecting = client.connect().then(() => client!);
  }

  try {
    return await connecting;
  } catch (err) {
    console.error("[Redis] failed to connect:", err);
    connecting = null;
    return null;
  }
}
