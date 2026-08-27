import { IEmailProvider } from "./email-provider";
import "dotenv/config";
import { ResendEmailProvider } from "./Providers/resend.provider";
import { SMTPEmailProvider } from "./Providers/smtp.provider";
import { MailjetEmailProvider } from "./Providers/mailjet.provider";

export class EmailProviderFactory {
  static create(): IEmailProvider {
    const driver = process.env.EMAIL_DRIVER;

    switch (driver) {
      case "resend":
        return new ResendEmailProvider();

      case "smtp":
        return new SMTPEmailProvider();
      case "mailjet":
        return new MailjetEmailProvider()
      default:
        throw new Error("EMAIL_DRIVER inválido");
    }
  }
}