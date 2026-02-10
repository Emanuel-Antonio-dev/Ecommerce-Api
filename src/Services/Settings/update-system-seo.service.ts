import sanitize from "sanitize-html";
import "dotenv/config";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";
import { RegisterSeoKeywordsDatas, RegisterSeoSettingsDatas } from "../../interfaces/Settings/interface";
import { ISeoSettingsRepositories } from "../../Repositories/SystemSettings/Seo/ISystem-Seo-repositories";

class UpdateSeoSettingsService {
    constructor(private readonly repository: ISeoSettingsRepositories) {}

    async updateSeoSettings(
        id_seo_setting: string,
        seoDatas: Partial<RegisterSeoSettingsDatas>,
        keywordDatas: Partial<RegisterSeoKeywordsDatas>
    ) {
        try {
            if (
                !seoDatas.seo_description &&
                !seoDatas.seo_title &&
                !keywordDatas.keywords &&
                !seoDatas.canonical_url &&
                !seoDatas.og_title &&
                !seoDatas.og_description &&
                !seoDatas.og_image
            ) {
                throw new HttpException(false, 400, "Informe pelo menos um campo para atualização.");
            }
            if(!id_seo_setting)
            {
                throw new HttpException(false, 404, "Informe o seo."); 
            }

            const existsSystemSeo = await this.repository.findSeoDatas("system", id_seo_setting, undefined);
            if (!existsSystemSeo)
            {
                throw new HttpException(false, 404, "As configurações de SEO do sistema ainda não foram inicializadas.");
            }

            const datasToUpdate: Partial<{
                seo_title: string;
                seo_description: string;
                canonical_url: string;
                og_title: string;
                og_description: string;
                og_image: string;
                keywords: { keyword: string }[];
                id_seo_setting_fk: string;
            }> = {};
            // Sanitiza campos de SEO
            if (seoDatas.seo_title) {
                datasToUpdate.seo_title = sanitize(seoDatas.seo_title, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            if (seoDatas.seo_description) {
                datasToUpdate.seo_description = sanitize(seoDatas.seo_description, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            if (seoDatas.canonical_url) {
                datasToUpdate.canonical_url = sanitize(seoDatas.canonical_url, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            if (seoDatas.og_title) {
                datasToUpdate.og_title = sanitize(seoDatas.og_title, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            if (seoDatas.og_description) {
                datasToUpdate.og_description = sanitize(seoDatas.og_description, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            if (seoDatas.og_image) {
                datasToUpdate.og_image = sanitize(seoDatas.og_image, {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
            }

            // Sanitiza keywords e converte em array
            if (keywordDatas.keywords) {
                const keywords = sanitize(keywordDatas.keywords.toString(), {
                    allowedAttributes: {},
                    allowedClasses: {},
                    allowedTags: [],
                });
                datasToUpdate.keywords = keywords
                    .split(",")
                    .map(k => ({ keyword: k.trim() }))
                    .filter(k => k.keyword); // remove strings vazias
            }

            const result = await this.repository.updateSeoDatas(id_seo_setting, datasToUpdate);

            if (!result) {
                throw new HttpException(false, 500, "Ocorreu um erro ao atualizar as configurações de SEO.");
            }
            return {
                success: true,
                statusCode: 200,
                message: "Configurações de SEO atualizadas com sucesso.",
                datas: result, // retorna os dados atualizados
            };
        } catch (error: any) {
            if (error instanceof HttpException) {
                return { success: false, statusCode: error.statusCode, message: error.message };
            }
            return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
        }
    }
}

export { UpdateSeoSettingsService };
