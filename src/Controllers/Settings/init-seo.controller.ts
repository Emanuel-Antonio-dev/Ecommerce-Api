import { Request, Response } from "express";
import "dotenv/config"
import { InitSeoSettingsService } from "../../Services/Settings/init-seo.service";
import { PrismaSeoSettingsRepositories } from "../../Repositories/SystemSettings/Seo/Prisma/prisma-system-seo.repositories";
import { prismaService } from "../../lib/prisma.service";
import { RegisterSeoKeywordsDatas, RegisterSeoSettingsDatas } from "../../interfaces/Settings/interface";
const repository: PrismaSeoSettingsRepositories = new PrismaSeoSettingsRepositories(prismaService);
const service: InitSeoSettingsService = new InitSeoSettingsService(repository);

class InitSeoSettingsController {
    static async init(req: Request, res: Response): Promise<Response> {
        try {
            const seoDatas: Partial<RegisterSeoSettingsDatas> = {
                seo_title: req.body.seo_title,
                seo_description: req.body.seo_description,
                canonical_url: req.body.canonical_url,
                og_title: req.body.og_title,
                og_description: req.body.og_description,
                og_image: req.body.og_image,
                seo_type:"system"
            };
            
            const keywordDatas: Partial<RegisterSeoKeywordsDatas> = {
                keywords: req.body.keywords ? Array.isArray(req.body.keywords) ? req.body.keywords : [req.body.keywords] : [],
            };

            const result = await service.initSeoSettings(seoDatas, keywordDatas);

            return res.status(result.statusCode).json(result);
        } catch (error: any) {
            console.log(error)
            return res.status(500).json({
                success: false,
                statusCode: 500,
                message: "Ocorreu um erro interno, tente novamente!",
            });
        }
    }
}

export { InitSeoSettingsController };
