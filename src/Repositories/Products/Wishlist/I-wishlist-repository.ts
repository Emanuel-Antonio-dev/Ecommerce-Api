import { WishlistItemDatas } from "../../../interfaces/Products/Wishlist/interface";

abstract class IWishlistRepositories {
  abstract add(datas: WishlistItemDatas): Promise<any>;
  abstract remove(id_user_fk: number, id_product_fk: number): Promise<any>;
  abstract findByUser(id_user_fk: number, take?: number, skip?: number): Promise<any[]>;
  abstract findItem(id_user_fk: number, id_product_fk: number): Promise<any>;
  abstract countByUser(id_user_fk: number): Promise<number>;
  abstract clearByUser(id_user_fk: number): Promise<any>;
}

export { IWishlistRepositories };
