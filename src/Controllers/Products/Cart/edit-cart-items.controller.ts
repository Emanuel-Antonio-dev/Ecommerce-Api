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
    static async editCartItems(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const {id_user_fk} = req.params
            const {quantity} = req.body
            if(!id_user_fk)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe o usuario"})
            }
            if(!quantity)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe pelo menos um campo para atualização"})
            }
            const result = await service.editCartItems(id_user_fk as string, {
                quantity: quantity
            })
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{EditCartItemsController}