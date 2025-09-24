import { PrismaContactsRepositories } from "../../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { Prisma } from "../../../../generated/prisma";
import { contactsDatas } from "../../../interfaces/General/Contacts/interface";
import sanitize from "sanitize-html";

class RegisterContactService
{
    constructor(private readonly repository: PrismaContactsRepositories){}
    
    async register(datas: contactsDatas, tx:Omit<Prisma.TransactionClient, "$transaction">)
    {
        try
        {
        if(!datas.phone_number || !datas.id_user_fk)
        {
           return {success: false, statusCode: 400, message: "Informe todos os dados."}
        }
        const alreadyExistContact = await this.repository.getContact(datas.phone_number)
        if (alreadyExistContact)
        {
            return {success: false, statusCode:409, message: "Este contacto já está em uso."}
        }
        if (datas.phone_number.length < 9)
        {
            return {success: false, statusCode:400, message: "Informe um contacto telefónico válido."}
        }
        const contactCreated = await this.repository.register({
            phone_number: sanitize(datas.phone_number.trim(),{
                allowedAttributes:{},
                allowedClasses:{},
                allowedTags:[]
            }),
            id_user_fk: datas.id_user_fk.trim()
        }, tx)
        if (!contactCreated)
        {
            return {success: false, statusCode: 500, message:"Ocorreu um erro ao cadastrar este contacto, tente novamente."}
        }
            return {success: true, statusCode: 201, datas: contactCreated}
        } catch (error: any)
        {
            return {success: false, statusCode: 500, message:"Ocorreu um erro interno, tente novamente."}
        }
    }
}
export{RegisterContactService}