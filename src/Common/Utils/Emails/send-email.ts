import { IEmailProvider } from "./email-provider";

export class SendEmail {
  constructor(private readonly emailProvider: IEmailProvider) {}

  async sendEmail(
    email: string,
    subject: string,
    templateForBody: string
  ): Promise<void> {
    try {
      await this.emailProvider.sendEmail({
        to: {
          name: email,
          email: email,
        },
        subject,
        body: templateForBody,
      });
    } catch (err: any) {
      console.error("⚠️ Falha ao enviar email (ignorado):", err?.message || err);
    }
  }
}