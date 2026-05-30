import { Request, Response, NextFunction } from "express"

const allowedOrigins = [
  "http://localhost:3000",
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
  if(ignoredRoutes.has(req.path)) {
    return next()
  }
  if (!methods.includes(req.method)) {
    return next()
  }

  const origin = req.header("Origin")

  if (!origin) {
    return res.status(403).json({
      message: "Origin ausente"
    })
  }

  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({
      message: "Origin não autorizada"
    })
  }

  next()
}