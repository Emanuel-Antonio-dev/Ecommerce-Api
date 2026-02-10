interface RegisterSeoSettingsDatas
{
    id_seo_setting?: string
    seo_title: string
    seo_description: string
    canonical_url?: string
    og_title?: string
    og_description?: string
    og_image?: string
    seo_type: "system"
    created_at?: Date | string
    updated_at?: Date | string
}
interface RegisterSeoKeywordsDatas
{
    id_seo_keyword?: string
    keywords: string | string[];
    id_seo_setting_fk: string
    created_at?: Date | string
    updated_at?: Date | string

}
type RegisterSeoFullDatas = RegisterSeoSettingsDatas & RegisterSeoKeywordsDatas;


export {RegisterSeoSettingsDatas, RegisterSeoKeywordsDatas, RegisterSeoFullDatas}