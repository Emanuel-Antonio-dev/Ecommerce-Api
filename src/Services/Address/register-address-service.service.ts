import { Prisma } from "../../../generated/prisma";
import { PrismaAddressesRepositories } from "../../Repositories/Adresses/Prisma/PrismaAdressesRepositories";
import { addressesDatas } from "../../interfaces/Adresses/interface";

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
                const result = await this.repository.register(datas, tx)
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