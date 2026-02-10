import "dotenv/config"
import { Request, Response } from "express"

const FRONT_URL = process.env.REDIRECT_URI as string

function oauthRedirect(req: Request, res: Response) {
  const data = req.user as any
  const isProduction = process.env.NODE_ENV === "production"

  if (data?.newUser) {
    return res.redirect(`${FRONT_URL}/signup?session_datas=${data.token}`)
  }

  res.cookie("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/"
  })

  return res.redirect(`${FRONT_URL}/perfil?t=${data.accessToken}`)
}

export {oauthRedirect}