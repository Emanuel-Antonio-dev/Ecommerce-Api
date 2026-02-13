import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import { SearchDatasOptions } from "../../../interfaces/Shared/search-datas-options.interface";

abstract class IProductsCategories
{
    abstract register(datas: productsCategoriesDatas): Promise<any>
    abstract getCategoryData(mode: SearchDatasOptions, id_category?: number, name?: string, slug?: string):Promise<any>
    abstract updateCategoryDatas(id_category: number, datas: Partial<productsCategoriesDatas>):Promise<any>
    abstract deleteCategoryDatas(id_category: number):Promise<any>
    abstract getAllCategoriesDatas(take?: number, skip?: number):Promise<any[]>
    abstract deleteAllCategories():Promise<any>
    abstract countCategories():Promise<number>
}
export{IProductsCategories}