import { createHash } from "crypto";

/**
 * Gera um hash curto e determinístico a partir de um objeto de parâmetros
 * (paginação, filtros, etc). Usado para compor chaves de cache do tipo
 * `products:list:<hash>` sem que a chave cresça sem limite conforme os
 * parâmetros da query.
 *
 * `undefined` é ignorado (não influencia o hash), e a ordem das chaves não
 * importa — o objeto é normalizado (chaves ordenadas) antes de gerar o hash,
 * garantindo que `{page:1,limit:10}` e `{limit:10,page:1}` produzam a mesma
 * chave de cache.
 */
export function buildCacheHash(params: Record<string, unknown>): string {
  const normalized: Record<string, unknown> = {};

  for (const key of Object.keys(params).sort()) {
    const value = params[key];
    if (value !== undefined) {
      normalized[key] = value;
    }
  }

  const serialized = JSON.stringify(normalized);
  return createHash("md5").update(serialized).digest("hex").slice(0, 12);
}
