import sanitize from "sanitize-html";
import { Prisma } from "../../../../generated/prisma";
import { PrismaAddressesRepositories } from "../../../Repositories/General/Adresses/Prisma/PrismaAdressesRepositories";
import { addressesDatas } from "../../../interfaces/General/Adresses/interface";

class RegisterAddressesService
{
    constructor(private readonly repository: PrismaAddressesRepositories){}

    async register(datas: addressesDatas, tx: Omit<Prisma.TransactionClient, "$transaction">)
    {
        try
        {
            if(!datas.city || !datas.id_user_fk || !datas.street )
                {
                    return {success: false, statusCode: 400, message: "Informe todos os campos"}
                }
                const result = await this.repository.register({
                    city: sanitize(datas.city.trim(),{
                        allowedAttributes:{},
                        allowedClasses:{},
                        allowedTags:[]
                    }),
                    street: sanitize(datas.street.trim(),{
                        allowedAttributes:{},
                        allowedClasses:{},
                        allowedTags:[]
                    }
                ),
                    id_user_fk: datas.id_user_fk.trim()
                }, tx)
                if(!result)
                    {
                        return {success: false, statusCode: 500, message: "Ocorreu um erro ao cadastrar o endereço, tente novamente"}
                    }
                    return {success: true, statusCode: 201,datas: result,message:"Endereço cadastrado com sucesso"}
                }catch (error: any)
                {
                    console.log(error)
                    return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
                }
            }
}
export {RegisterAddressesService}