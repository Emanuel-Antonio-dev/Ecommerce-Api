import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { PrismaGeneralProductsRepositories } from "../../../Repositories/Products/GeneralProducts/Prisma/PrismaGeneralProductsRepositories";

class GetAllProductsDatasService

{
    constructor(private readonly repository: PrismaGeneralProductsRepositories){}

    async getAll()
    {
        try
        {
            const allProducts = await this.repository.getAllProductsDatas()
            if(allProducts.length === 0)
            {
                throw new HttpException(true, 404, "De momento não existem produtos disponiveis")
            }
            return {success: true, statusCode: 200, datas: allProducts}
        } catch (error: any)
        {
            if (error instanceof HttpException)
                {
                    return {success: false, statusCode: error.statusCode, message: error.message}
                }
                console.log(error)
                return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}     
        }
    }
}
export {GetAllProductsDatasService}