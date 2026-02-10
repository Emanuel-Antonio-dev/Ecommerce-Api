import sanitize from "sanitize-html";
import "dotenv/config";
import { Prisma } from "../../../generated/prisma/client";
import { RegisterSeoKeywordsDatas, RegisterSeoSettingsDatas } from "../../interfaces/Settings/interface";
import { ISeoSettingsRepositories } from "../../Repositories/SystemSettings/Seo/ISystem-Seo-repositories";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

import validator from 'validator';

class InitSeoSettingsService {
    constructor(private readonly repository: ISeoSettingsRepositories) {}

    async initSeoSettings(
        seoDatas: Partial<RegisterSeoSettingsDatas>,
        keywordDatas?: Partial<RegisterSeoKeywordsDatas>,
        tx?: Omit<Prisma.TransactionClient, "$transaction">
    ) {
        try {
            if (!seoDatas.seo_title || !seoDatas.seo_description || !seoDatas.seo_type)
            {
                throw new HttpException(false, 400, "Informe um título, uma descrição e o tipo para inicializar a configuração de SEO.");
            }
            if(seoDatas.seo_title.length < 3)
            {
                throw new HttpException(false, 400, "Informe um título de SEO válido.");
            }
            if (seoDatas.canonical_url && !validator.isURL(seoDatas.canonical_url))
            {
                throw new HttpException(false, 400, "Informe uma URL canônica válida.");
            }
            if(!["system", "blog", "tour"].includes(seoDatas.seo_type))
            {
                throw new HttpException(false, 400, "Tipo de SEO inválido.");
            }
            const alreadyExistsSystemSeo = await this.repository.findSeoDatas("system", undefined, seoDatas.seo_title);
            if (alreadyExistsSystemSeo)
            {
                throw new HttpException(false, 409, "As configurações de SEO do sistema já foram inicializadas.");
            }
            const sanitizedSeoData: Partial<RegisterSeoSettingsDatas> = {
                seo_title: sanitize(seoDatas.seo_title, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] }),
                seo_description: sanitize(seoDatas.seo_description, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] }),
                canonical_url: seoDatas.canonical_url
                    ? sanitize(seoDatas.canonical_url, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] })
                    : undefined,
                og_title: seoDatas.og_title
                    ? sanitize(seoDatas.og_title, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] })
                    : undefined,
                og_description: seoDatas.og_description
                    ? sanitize(seoDatas.og_description, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] })
                    : undefined,
                og_image: seoDatas.og_image
                    ? sanitize(seoDatas.og_image, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] })
                    : undefined,
                    seo_type: seoDatas.seo_type
            };

            const seoResult = await this.repository.initSeoSettingsDatas(sanitizedSeoData, tx);
            if (!seoResult) {
                throw new HttpException(false, 500, "Ocorreu um erro ao inicializar as configurações de SEO.");
            }

            // Processar keywords
            let createdKeywords: string[] = [];
            if (keywordDatas?.keywords) {
                const keywordsArray = Array.isArray(keywordDatas.keywords)
                    ? keywordDatas.keywords
                    : [keywordDatas.keywords];

                const sanitizedKeywords = keywordsArray
                    .map(k => sanitize(k, { allowedAttributes: {}, allowedClasses: {}, allowedTags: [] }))
                    .filter(k => k && k.trim() !== "");

                if (sanitizedKeywords.length > 0) {
                    createdKeywords = [];
                    for (const kw of sanitizedKeywords) {
                        const keywordCreated = await this.repository.registerSeoKeyWordsDatas(
                            { id_seo_setting_fk: seoResult.id_seo_setting, keywords: kw },
                            tx
                        );
                        createdKeywords.push(kw); // salva apenas o texto da keyword
                    }
                }
            }

            // Formata os dados para retornar ao core
            const dataFormatted = {
                ...seoResult,
                keywords: createdKeywords
            };

            return {
                success: true,
                statusCode: 201,
                message: "Configurações de SEO inicializadas com sucesso.",
                datas: dataFormatted
            };
        } catch (error: any) {
            if (error instanceof HttpException)
            {
                return { success: false, statusCode: error.statusCode, message: error.message };
            }
            console.log(error)
            return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
        }
    }
}

export { InitSeoSettingsService };
