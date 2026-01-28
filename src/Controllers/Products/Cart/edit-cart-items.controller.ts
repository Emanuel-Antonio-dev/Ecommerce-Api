import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import "dotenv/config"
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../../Repositories/Users/Prisma/PrismaUsersRepositories";
import { EditCartItemsService } from "../../../Services/Users/Client/edit-cart-datas.service";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prismaService)
const service: EditCartItemsService = new EditCartItemsService(repository, userRepository)

class EditCartItemsController
{
    static async edit(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_user_fk = Number(req.params.id_user_fk)
            const {quantity} = req.body
            const result = await service.editCartItems(id_user_fk, {
                quantity: quantity
            })
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{EditCartItemsController}