import { ProductsTagsDatas } from "../../../interfaces/Products/Tags/interface";
import { SearchDatasOptions } from "../../../interfaces/Shared/search-datas-options.interface";

abstract class IProductsTagsRepositories {
  abstract register(datas: ProductsTagsDatas): Promise<any>;
  abstract getTagDatas(mode: SearchDatasOptions,tag?: string | string[], id_tag?: number | number[]): Promise<any>;
  abstract deleteTag(tag: string): Promise<any>;
  abstract editTagDatas(id_tag: number, datas: Partial<ProductsTagsDatas>): Promise<any>;
  abstract getAllTagsPerProduct(id_product: number):Promise<any[]>
  abstract getAllTags():Promise<any[]>
  
}

export { IProductsTagsRepositories };
