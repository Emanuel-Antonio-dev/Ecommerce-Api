import {Request, Response} from "express"
import "dotenv/config"
import { PrismaSeoSettingsRepositories } from "../../Repositories/SystemSettings/Seo/Prisma/prisma-system-seo.repositories";
import { prismaService } from "../../lib/prisma.service";
import { FindSeoSettingsService } from "../../Services/Settings/find-seo.service";

const repository: PrismaSeoSettingsRepositories = new PrismaSeoSettingsRepositories(prismaService)
const service: FindSeoSettingsService = new FindSeoSettingsService(repository)

class FindSeoSettingsController
{
    static async find(req: Request, res: Response):Promise<Response>
    {
        try
        {
            const {id_seo_setting} = req.params
            const result = await service.findSeoSettings(id_seo_setting as string)
            return res.status(result.statusCode).json(result)
            
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false,statusCode: 500,message: "Ocorreu um erro interno, tente novamente!"})
        }
    }
}
export{FindSeoSettingsController}