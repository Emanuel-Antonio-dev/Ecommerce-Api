import "dotenv/config"

// Base pública do frontend (para links/CTA dos emails).
const FRONT_BASE = (process.env.FRONTEND_URL || process.env.REDIRECT_URI || "https://mulembe.ao").replace(/\/+$/, "")

interface MulembeEmailOptions {
  title: string
  intro?: string
  paragraphs?: string[]
  cta?: { label: string; url: string }
  // Caixa de destaque (ex.: código OTP, referência de reserva).
  highlight?: { label?: string; value: string }
  footnote?: string
  preheader?: string
}

// Template de email com a identidade da Mulembe (tons quentes da marca),
// construído com tabelas + estilos inline para máxima compatibilidade.
function mulembeEmail(opts: MulembeEmailOptions): string {
  const { title, intro, paragraphs = [], cta, highlight, footnote, preheader } = opts

  const body = paragraphs
    .map((p) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#3a3a3c">${p}</p>`)
    .join("")

  const highlightBlock = highlight
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:6px 0 18px">
         <tr><td align="center" style="background:#fbf3e7;border:1px solid #f0dcbf;border-radius:14px;padding:18px 16px">
           ${highlight.label ? `<div style="font-family:Arial,sans-serif;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#b9601f;margin-bottom:6px">${highlight.label}</div>` : ""}
           <div style="font-family:'Trebuchet MS',Arial,sans-serif;font-size:30px;font-weight:800;letter-spacing:6px;color:#7a3f1d">${highlight.value}</div>
         </td></tr>
       </table>`
    : ""

  const ctaBlock = cta
    ? `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0 6px">
         <tr><td style="border-radius:9999px;background:#E8901E">
           <a href="${cta.url}" style="display:inline-block;padding:13px 32px;font-family:Arial,sans-serif;font-size:15px;font-weight:600;color:#ffffff;text-decoration:none;border-radius:9999px">${cta.label}</a>
         </td></tr>
       </table>`
    : ""

  return `<!doctype html>
<html lang="pt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f4f1ec;-webkit-font-smoothing:antialiased">
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:#f4f1ec">${preheader}</div>` : ""}
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ec">
    <tr><td align="center" style="padding:32px 16px">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:560px;max-width:100%;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 6px 24px rgba(80,50,20,.08)">
        <tr><td style="background-color:#8a4b24;background-image:linear-gradient(135deg,#7a3f1d 0%,#b9601f 55%,#e8901e 100%);padding:32px 36px;text-align:center">
          <div style="font-family:'Trebuchet MS',Arial,sans-serif;font-size:27px;font-weight:800;letter-spacing:.5px;color:#ffffff">Mulembe</div>
          <div style="margin-top:5px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,.85)">Descubra Angola</div>
        </td></tr>
        <tr><td style="padding:34px 36px 14px">
          <h1 style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:22px;line-height:1.3;color:#1d1d1f">${title}</h1>
          ${intro ? `<p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;color:#6b6b70">${intro}</p>` : ""}
          <div style="font-family:Arial,sans-serif">${highlightBlock}${body}${ctaBlock}</div>
        </td></tr>
        <tr><td style="padding:22px 36px;background:#faf7f2;border-top:1px solid #efe7db;font-family:Arial,sans-serif">
          <p style="margin:0;font-size:12px;line-height:1.6;color:#9a9a9f">${footnote || "Recebeu este email porque tem uma conta na Mulembe."}</p>
          <p style="margin:8px 0 0;font-size:12px;color:#b9601f;font-weight:600">Equipa Mulembe</p>
          <p style="margin:6px 0 0;font-size:11px;color:#c2c2c6">© ${new Date().getFullYear()} Mulembe · Angola</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`
}

export { mulembeEmail, FRONT_BASE }
