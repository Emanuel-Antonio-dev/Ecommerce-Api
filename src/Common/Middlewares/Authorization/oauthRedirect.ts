import "dotenv/config"
import { Request, Response } from "express"

const FRONT_URL = process.env.REDIRECT_URI as string

function oauthRedirect(req: Request, res: Response) {
  const data = req.user as any
  const isProduction = process.env.NODE_ENV === "production"

  if (data?.newUser) {
    return res.redirect(`${FRONT_URL}/signup?t=${data.token}`)
  }

  res.cookie("refreshToken", data.refreshToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: "/"
  })

    res.cookie("accessToken", data.accessToken, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 15 * 60 * 1000,
    path: "/"
  })
  return res.redirect(`${FRONT_URL}/profile`)
}

export {oauthRedirect}