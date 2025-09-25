import { productsImagesDatas } from "../../../../interfaces/Products/Images/interface";
import { Prisma } from "../../../../../generated/prisma";

abstract class IProductsImages
{
    abstract registerImages(datas: productsImagesDatas, tx: Omit<Prisma.TransactionClient, "$transation">):Promise<any>
    abstract editImage(id_image: string, datas: Partial<productsImagesDatas>):Promise<any>
}
export{IProductsImages}