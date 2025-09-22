import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import { SearchDatasOptions } from "../../../interfaces/Shared/search-datas-options.interface";

abstract class IProductsCategories
{
    abstract register(datas: productsCategoriesDatas): Promise<any>
    abstract getCategoryData(mode: SearchDatasOptions, id_category?: number, category_name?: string):Promise<any>
    abstract updateCategoryDatas(id_category: number, datas: Partial<productsCategoriesDatas>):Promise<any>
    abstract deleteCategoryDatas(id_category: number):Promise<any>
    abstract getAllCategoriesDatas():Promise<any[]>
    abstract deleteAllCategories():Promise<any>
}
export{IProductsCategories}