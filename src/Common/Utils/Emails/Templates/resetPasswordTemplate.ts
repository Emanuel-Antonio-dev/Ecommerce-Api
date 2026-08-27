import "dotenv/config"
import { mulembeEmail } from "./layout"

function HtmlTemplateResetPassword(token: string): string {
  const url = `${process.env.RESET_PASSWORD_URI}?auth=${token}`
  return mulembeEmail({
    title: "Redefinição de palavra-passe",
    intro: "Recebemos um pedido para redefinir a palavra-passe da sua conta.",
    paragraphs: [
      "Se foi você, clique no botão abaixo para criar uma nova palavra-passe. O link é válido por <strong>1 hora</strong>.",
      "Se não foi você, ignore este email — a sua conta permanece segura.",
    ],
    cta: { label: "Redefinir palavra-passe", url },
    preheader: "Redefina a sua palavra-passe Mulembe.",
  })
}

export { HtmlTemplateResetPassword }
