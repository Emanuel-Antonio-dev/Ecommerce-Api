import nodemailer from "nodemailer";
import { IEmailProvider, IMessage } from "../email-provider";

export class SMTPEmailProvider implements IEmailProvider {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendEmail(message: IMessage): Promise<void> {
    const fromEmail =
      message.from?.email || process.env.EMAIL_FROM_ADDRESS;

    const fromName =
      message.from?.name || process.env.EMAIL_FROM_NAME;

    await this.transporter.sendMail({
      from: `${fromName} <${fromEmail}>`,
      to: `${message.to.name} <${message.to.email}>`,
      subject: message.subject,
      html: message.body,
    });
  }
}