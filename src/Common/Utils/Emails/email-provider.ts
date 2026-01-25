interface IAddress{
    email: string
    name: string
}
interface IMessage{
    to: IAddress
    from: IAddress
    subject: string
    body: string
}
interface IEmailProvider
{
    sendEmail(message: IMessage):Promise<void>
}
export{IMessage, IEmailProvider}