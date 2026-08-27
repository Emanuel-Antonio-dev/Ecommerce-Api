import { Request, Response, NextFunction } from "express"

// ✅ FIX: usa a MESMA whitelist do CORS (ALLOWED_ORIGINS no .env) em vez de uma
// lista própria hardcoded (que continha "https://app.seudominio.com", um
// placeholder nunca configurado). Uma única fonte de verdade evita que as duas
// listas fiquem dessincronizadas.
const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map(o => o.trim())
  .filter(Boolean)

const ignoredRoutes = new Set([
  "/auth/google",
  "/auth/google/callback"
])

export function csrfProtection(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const methods = [
    "POST",
    "PUT",
    "PATCH",
    "DELETE"
  ]

  if (ignoredRoutes.has(req.path)) {
    return next()
  }

  if (!methods.includes(req.method)) {
    return next()
  }

  const origin = req.header("Origin")

  // ✅ FIX: CSRF só é um risco real para autenticação por cookie (o navegador
  // anexa o cookie automaticamente em requisições cross-site). Clientes que
  // usam Bearer token (mobile/Postman/curl) não são vulneráveis a CSRF, então
  // só exigimos Origin válida quando a requisição está autenticada via cookie.
  const isCookieAuthenticated = Boolean(req.cookies?.accessToken || req.cookies?.refreshToken)

  if (isCookieAuthenticated) {
    if (!origin || !allowedOrigins.includes(origin)) {
      return res.status(403).json({
        success: false,
        statusCode: 403,
        message: "Requisição não autorizada"
      })
    }
    return next()
  }

  // Sem cookie de sessão: se ainda assim vier uma Origin, ela precisa ser válida.
  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({
      success: false,
      statusCode: 403,
      message: "Requisição não autorizada"
    })
  }

  return next()
}