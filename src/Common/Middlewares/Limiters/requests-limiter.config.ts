import { Request, Response } from "express"
import limitrer from "express-rate-limit"
import { RedisRateLimitStore } from "./redis-store"

const limiterMiddleware = (
  message: string,
  time: number = 1,
  maxRequests: number = 5,
  // ✅ FIX: precisa ser um identificador ESTÁVEL e ÚNICO por limiter lógico,
  // igual em todas as instâncias/containers da API — só assim o contador no
  // Redis é de fato compartilhado entre elas. Usar `message` como chave não
  // funciona porque duas rotas diferentes usam o mesmo texto (ex.:
  // refreshLimiter e passwordResetLimiter), e gerar um id aleatório no
  // startup do processo faria cada instância ter seu próprio contador,
  // exatamente o problema que este store deveria resolver.
  name: string
) => {
  return limitrer({
    windowMs: time * 60 * 1000,
    max: maxRequests,

    standardHeaders: true,
    legacyHeaders: false,

    // ✅ FIX: store compartilhado via Redis (com fallback automático para o
    // MemoryStore padrão quando REDIS_URL não está configurada) — ver
    // redis-store.ts.
    store: new RedisRateLimitStore(name),

    handler: (req: Request, res: Response) => {
      return res.status(429).json({
        success: false,
        statusCode: 429,
        message
      })
    }
  })
}

export{limiterMiddleware}