import { Request, Response } from "express";
import { prismaService } from "../../../lib/prisma.service";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";
import { EditProductTagService } from "../../../Services/Products/Tags/edit-product-tag.service";
import { PrismaProductsTagsRepositories } from "../../../Repositories/Products/Tags/Prisma/prisma-tags-repositories";

const repository: PrismaProductsTagsRepositories = new PrismaProductsTagsRepositories(prismaService)
const service: EditProductTagService = new EditProductTagService(repository)

class EditProductTagController
{
    static async edit(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const id_tag = Number(req.params.id_tag)
            const {tag} = req.body
            const result = await service.editTag(id_tag, tag)
            return res.status(result.statusCode).json(result)
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export {EditProductTagController}