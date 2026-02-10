import "dotenv/config"
import { ISeoSettingsRepositories } from "../../Repositories/SystemSettings/Seo/ISystem-Seo-repositories";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

class FindSeoSettingsService
{
    constructor(private readonly repository: ISeoSettingsRepositories){}
    async findSeoSettings(id_seo_setting: string)
    {
        try
        {
            if(!id_seo_setting)
            {
                throw new HttpException(false, 400, "Informe o SEO.")
            }
            const result = await this.repository.findSeoDatas("system",id_seo_setting, undefined)
            if(!result)
            {
                throw new HttpException(false, 404, "Não conseguimos encontrar estas configurações de SEO.")
            }
            return {success: true, statusCode: 200, datas: result}
        } catch (error: any)
        {
            if(error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export {FindSeoSettingsService}