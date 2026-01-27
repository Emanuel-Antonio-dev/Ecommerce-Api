import sanitize from "sanitize-html";
import { Prisma } from "../../../../generated/prisma/client";
import { PrismaAddressesRepositories } from "../../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { addressesDatas } from "../../../interfaces/General/Adresses/interface";

class RegisterAddressesService {
    constructor(private readonly repository: PrismaAddressesRepositories) {}

    async register(
        datas: addressesDatas | addressesDatas[],
        tx: Omit<Prisma.TransactionClient, "$transaction">
    ) {
        try {
            const addressesArray: addressesDatas[] = Array.isArray(datas) ? datas : [datas];
            const createdAddresses: any[] = [];

            for (const address of addressesArray) {
                if (!address.city || !address.id_user_fk || !address.street) {
                    return { success: false, statusCode: 400, message: "Informe todos os campos" };
                }

                const result = await this.repository.register(
                    {
                        city: sanitize(address.city.trim(), {
                            allowedAttributes: {},
                            allowedClasses: {},
                            allowedTags: [],
                        }),
                        street: sanitize(address.street.trim(), {
                            allowedAttributes: {},
                            allowedClasses: {},
                            allowedTags: [],
                        }),
                        id_user_fk: address.id_user_fk,
                    },
                    tx
                );

                if (!result) {
                    return { success: false, statusCode: 500, message: "Ocorreu um erro ao cadastrar o endereço, tente novamente" };
                }

                createdAddresses.push(result);
            }

            return {
                success: true,
                statusCode: 201,
                datas: createdAddresses,
                message: "Endereço(s) cadastrado(s) com sucesso",
            };
        } catch (error: any) {
            console.log(error);
            return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
        }
    }
}

export { RegisterAddressesService };
