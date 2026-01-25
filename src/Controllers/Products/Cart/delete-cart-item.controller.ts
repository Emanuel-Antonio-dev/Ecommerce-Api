import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { DeleteCartItemDatasService } from "../../../Services/Users/Client/delete-cart-item-datas.service";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const service: DeleteCartItemDatasService = new DeleteCartItemDatasService(repository, userRepository)

class DeleteCartItemController
{
    static async deleteCartItem(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const {id_user_fk} = req.params
            if(!id_user_fk)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe o usuario"})
            }
            const result = await service.deleteCartItems(id_user_fk as string)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{DeleteCartItemController}