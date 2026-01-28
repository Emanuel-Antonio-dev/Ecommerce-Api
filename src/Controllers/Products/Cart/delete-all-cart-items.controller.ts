import { Response, Request } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { DeleteAllCartItemsDatasService } from "../../../Services/Users/Client/delete-all-cart-items-datas.service";

const repository: PrismaCartRepositories = new PrismaCartRepositories(prismaService)
const service: DeleteAllCartItemsDatasService = new DeleteAllCartItemsDatasService(repository)

class DeleteAllCarItemsController
{
    static async deleteAll(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const id_cart = Number(req.params.id_cart)
            const result = await service.deleteAllCartItems(id_cart)
            return res.status(result.statusCode).json(result)
        }
        catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{DeleteAllCarItemsController}