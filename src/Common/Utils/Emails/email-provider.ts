export interface IMessage {
  from?: {
    name: string;
    email: string;
  };
  to: {
    name: string;
    email: string;
  };
  subject: string;
  body: string;
}

export interface IEmailProvider {
  sendEmail(message: IMessage): Promise<void>;
}
