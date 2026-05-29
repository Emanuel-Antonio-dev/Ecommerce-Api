import { Prisma, PrismaClient } from "../../../../../../generated/prisma/client";
import { IProductsImages } from "../products-images-repositories";
import { productsImagesDatas } from "../../../../../interfaces/Products/Images/interface";
import crypto from "node:crypto"
class PrismaProductsImages implements IProductsImages
{
    constructor(private readonly prisma: PrismaClient){}


async registerImages(
  datas: productsImagesDatas,
  tx: Omit<Prisma.TransactionClient, "$transaction">
): Promise<any> {
  const client = tx ?? this.prisma;
  const imagesCreated = [];
 
  for (const item of datas.images) {
    const image = await client.productsImages.create({
      data: {
        id_image: crypto.randomUUID(),
        url: item.url,
        id_product_fk: datas.id_product_fk,
        is_main: item.is_main ?? false,
        display_order: item.display_order ?? 0,
      },
    });
    imagesCreated.push(image);
  }
 
  return imagesCreated.map((img) => ({
    id_image: img.id_image,
    url: img.url,
    is_main: img.is_main,
    display_order: img.display_order,
  }));
}

    async editImage(id_image: string, datas: Partial<productsImagesDatas>): Promise<any> {
        return await this.prisma.productsImages.update({
            where: { id_image: id_image },
            data: {...datas}
        });
    }
}

export{PrismaProductsImages}