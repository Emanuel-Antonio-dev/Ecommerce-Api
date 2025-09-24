import { SearchDatasOptions } from "../../../interfaces/Shared/search-datas-options.interface"
import { generalProductsDatas } from "../../../interfaces/Products/GeneralProducts/interface"

abstract class IGeneralProductsRepositories
{
    abstract register(datas: generalProductsDatas): Promise<any>
    abstract getProductDatas(mode: SearchDatasOptions, id_product?: number, product_name?: string): Promise<any>
    abstract editProduct(id_product: number, datas: Partial<generalProductsDatas>):Promise<any>
    abstract deleteProductDatas(id_product: number):Promise<any>
    abstract deleteAllProductsDatas():Promise<any>
    abstract getAllProductsDatas():Promise<any[]>
}

export {IGeneralProductsRepositories}