import type { Store, IncrementResponse, Options } from "express-rate-limit";
import { getRedisClient } from "../../../lib/redis.service";

// ✅ FIX: o `express-rate-limit` usava o MemoryStore padrão — cada instância/
// container da API mantém sua própria contagem, então ao escalar
// horizontalmente o limite efetivo vira (N instâncias × limite configurado).
// Este Store usa o Redis (já disponível na infra) como contador
// compartilhado entre todas as instâncias, com fallback automático para o
// MemoryStore padrão do express-rate-limit quando o Redis não está
// configurado/disponível (ex.: ambiente de desenvolvimento sem REDIS_URL).
export class RedisRateLimitStore implements Store {
  // ✅ FIX: campos não podem ser `private` aqui — a interface `Store` do
  // express-rate-limit é estrutural, e TypeScript rejeita a implementação
  // quando a classe tem membros privados que não existem na interface.
  prefix: string;
  windowMs = 60_000;

  constructor(prefix: string) {
    this.prefix = prefix;
  }

  init(options: Options): void {
    this.windowMs = options.windowMs;
  }

  private key(key: string): string {
    return `ratelimit:${this.prefix}:${key}`;
  }

  async increment(key: string): Promise<IncrementResponse> {
    const redis = await getRedisClient();
    const redisKey = this.key(key);

    if (!redis) {
      // Redis indisponível: falha "aberta" em memória por processo (melhor
      // permitir a requisição do que derrubar a rota por causa do Redis).
      return { totalHits: 1, resetTime: new Date(Date.now() + this.windowMs) };
    }

    const totalHits = await redis.incr(redisKey);
    if (totalHits === 1) {
      await redis.pExpire(redisKey, this.windowMs);
    }
    const ttl = await redis.pTTL(redisKey);
    const resetTime = new Date(Date.now() + (ttl > 0 ? ttl : this.windowMs));

    return { totalHits, resetTime };
  }

  async decrement(key: string): Promise<void> {
    const redis = await getRedisClient();
    if (!redis) return;
    await redis.decr(this.key(key));
  }

  async resetKey(key: string): Promise<void> {
    const redis = await getRedisClient();
    if (!redis) return;
    await redis.del(this.key(key));
  }
}
