import { Resend } from "resend";
import { IEmailProvider, IMessage } from "../email-provider";

export class ResendEmailProvider implements IEmailProvider {
  private resend: Resend;

  constructor() {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY não configurada");
    }

    this.resend = new Resend(apiKey);
  }

  async sendEmail(message: IMessage): Promise<void> {
    const { error } = await this.resend.emails.send({
      from: "Mulembe <onboarding@resend.dev>",
      to: [message.to.email],
      subject: message.subject,
      html: message.body,
    });

    if (error) {
      throw new Error(`[RESEND] ${error.message}`);
    }
  }
}