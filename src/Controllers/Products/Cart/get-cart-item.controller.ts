import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import dotenv from "dotenv"
import { getErrorsDetails } from "../../../Common/Middlewares/Observability/get-errors";
import { GetCartDatasService } from "../../../Services/Users/Client/get-cart-datas.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
dotenv.config()

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaCartRepositories = new PrismaCartRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const service: GetCartDatasService = new GetCartDatasService(repository, userRepository)

class GetCartDatasController
{
    static async getCartDatas(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const {id_user_fk} = req.params
            if(!id_user_fk)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe o usuario"})
            }
            const result = await service.getCartDatas(id_user_fk)
            if(!result.success)
            {
                return res.status(result.statusCode).json(result)
            }
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            process.env.NODE_ENV === "dev" ? console.log(error) : getErrorsDetails(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{GetCartDatasController}