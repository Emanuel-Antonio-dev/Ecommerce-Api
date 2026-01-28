import { PrismaContactsRepositories } from "../../../Repositories/General/Contacts/Prisma/PrismaContactsRepositories";
import { Prisma } from "../../../../generated/prisma/client";
import { contactsDatas } from "../../../interfaces/General/Contacts/interface";
import sanitize from "sanitize-html";

class RegisterContactService {
    constructor(private readonly repository: PrismaContactsRepositories) {}

    async register(
        datas: contactsDatas | contactsDatas[],
        tx: Omit<Prisma.TransactionClient, "$transaction">
    ) {
        try {
            const contactsArray: contactsDatas[] = Array.isArray(datas) ? datas : [datas];
            const createdContacts: any[] = [];

            for (const contact of contactsArray) {
                if (!contact.phone_number || !contact.id_user_fk) {
                    return { success: false, statusCode: 400, message: "Informe todos os dados." };
                }

                const alreadyExistContact = await this.repository.getContact(contact.phone_number);
                if (alreadyExistContact) {
                    return { success: false, statusCode: 409, message: `O contacto ${contact.phone_number} já está em uso.` };
                }

                if (contact.phone_number.length > 9) {
                    return { success: false, statusCode: 400, message: `Contacto telefónico ${contact.phone_number} inválido`};
                }

                const contactCreated = await this.repository.register(
                    {
                        phone_number: sanitize(contact.phone_number.trim(), {
                            allowedAttributes: {},
                            allowedClasses: {},
                            allowedTags: [],
                        }),
                        id_user_fk: contact.id_user_fk,
                    },
                    tx
                );

                if (!contactCreated) {
                    return { success: false, statusCode: 500, message: "Ocorreu um erro ao cadastrar este contacto, tente novamente." };
                }

                createdContacts.push(contactCreated);
            }

            return { success: true, statusCode: 201, datas: createdContacts };
        } catch (error: any) {
            console.log(error);
            return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente." };
        }
    }
}

export { RegisterContactService };
