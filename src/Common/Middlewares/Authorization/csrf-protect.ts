import { Request, Response, NextFunction } from "express"

const allowedOrigins = [
  "http://localhost:3000",
  "https://app.seudominio.com"
]

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
  console.log("Origin:", origin, "Path:", req.path, "Method:", req.method)

  // Se existe Origin, valida
  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({
      success: false,
      statusCode: 403,
      message: "Requisição não autorizada"
    })
  }

  // Sem Origin ou Origin válida
  return next()
}