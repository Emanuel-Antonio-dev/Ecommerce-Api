import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import "dotenv/config"
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { GetCartDatasService } from "../../../Services/Users/Client/get-cart-datas.service";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { RequestWithCredentials } from "../../../interfaces/Shared/authentication.interface";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const service: GetCartDatasService = new GetCartDatasService(repository, userRepository)

class GetCartDatasController
{
    static async get(req: RequestWithCredentials, res: Response): Promise<Response | any>
    {
        try
        {
            const id_user_fk = Number(req.credentials?.sub)
            const result = await service.getCartDatas(id_user_fk)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{GetCartDatasController}