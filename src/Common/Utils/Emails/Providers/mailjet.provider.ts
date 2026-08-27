import Mailjet from "node-mailjet";
import { IEmailProvider, IMessage } from "../email-provider";

export class MailjetEmailProvider implements IEmailProvider {
  private readonly mailjet;

  constructor() {
    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;

    if (!apiKey || !secretKey) {
      throw new Error("MAILJET_API_KEY ou MAILJET_SECRET_KEY não configuradas");
    }

    this.mailjet = Mailjet.apiConnect(apiKey, secretKey);
  }

async sendEmail(message: IMessage): Promise<void> {
  console.log("=== INICIO ENVIO EMAIL ===");
  console.log("Para:", message.to.email);

  const response = await this.mailjet
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: process.env.EMAIL_FROM_ADDRESS!,
            Name: process.env.EMAIL_FROM_NAME!,
          },
          To: [
            {
              Email: message.to.email,
              Name: message.to.name,
            },
          ],
          Subject: message.subject,
          HTMLPart: message.body,
        },
      ],
    });

  console.log("=== RESPOSTA MAILJET ===");
  console.log(JSON.stringify(response.body, null, 2));
}
}