import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";
import { GetAllProductTagsService } from "../../../Services/Products/Tags/get-all-product-tag.service";

const repository: PrismaProductsTagsRepositories = new PrismaProductsTagsRepositories(prismaService)
const service: GetAllProductTagsService = new GetAllProductTagsService(repository)

class GetAllProductTagsController
{
    static async getAll(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {page, limit} = req.query
            const result = await service.getAllProductTagsService({page: Number(page) || 1, limit: Number(limit) || 50})
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {GetAllProductTagsController}