import { IEmailProvider } from "./email-provider";

class SendEmail
{
    constructor(private readonly emailProvider: IEmailProvider){}

    async sendEmail(email: string,subject: string,templeateForBody: string)
    {
        await this.emailProvider.sendEmail({
            from:{
                email:"mulembe@suporte.gmail.com",
                name: "Mulembe Ao"
            },
            to:{
                name:"Cliente",
                email:email
            },
            subject:subject,
            body: templeateForBody
        })
    }
}
export{SendEmail}