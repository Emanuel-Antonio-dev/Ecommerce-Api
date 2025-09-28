import { Response, Request } from "express";
import { PrismaClient } from "../../../../generated/prisma";
import { PrismaCartRepositories } from "../../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import dotenv from "dotenv"
import { getErrorsDetails } from "../../../Common/Middlewares/Observability/get-errors";
import { DeleteAllCartItemsDatasService } from "../../../Services/Users/Client/delete-all-cart-items-datas.service";
dotenv.config()

const prisma: PrismaClient = new PrismaClient()
const repository: PrismaCartRepositories = new PrismaCartRepositories(prisma)
const service: DeleteAllCartItemsDatasService = new DeleteAllCartItemsDatasService(repository)

class DeleteAllCarItemsController
{
    static async deleteAllCartItems(req: Request, res: Response): Promise<Response | any>
    {
        try
        {
            const {id_cart} = req.params
            if(!id_cart)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe o carrinho"})
            }
            const result = await service.deleteAllCartItems(id_cart)
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
export{DeleteAllCarItemsController}