import { productsCategoriesDatas } from "../../../interfaces/Products/Categories/interface";
import { SearchDatasOptions } from "../../../interfaces/Shared/search-datas-options.interface";
import { productBrandsDatas } from "../../../interfaces/Products/Brands/interface";

abstract class IProductsBrandsRepositories
{
    abstract register(datas: productBrandsDatas): Promise<any>
    abstract getProductBrandData(mode: SearchDatasOptions, id_brand?: number, name?: string):Promise<any>
    abstract updateProductBrandDatas(id_brand: number, datas: Partial<productBrandsDatas>):Promise<any>
    abstract deleteProductBrandDatas(id_brand: number):Promise<any>
    abstract getAllProductBrandsDatas(take?: number, skip?: number):Promise<any[]>
    abstract deleteAllProductBrands():Promise<any>
    abstract countBrands():Promise<number>
}
export{IProductsBrandsRepositories}