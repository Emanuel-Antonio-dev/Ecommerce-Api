import { nanoid } from "nanoid";
import { Prisma, PrismaClient } from "@prisma/client";
import { IProductsImages } from "../products-images-repositories";
import { productsImagesDatas } from "../../../../../interfaces/Products/Images/interface";

class PrismaProductsImages implements IProductsImages
{
    constructor(private readonly prisma: PrismaClient){}


    async registerImages(datas: productsImagesDatas, tx: Omit<Prisma.TransactionClient, "$transation">): Promise<any> {
        const client = tx ?? this.prisma
        const imagesCreated = []
        const urls = Array.isArray(datas.image_url) ? datas.image_url : [datas.image_url]
        for(const url of urls)
        {
            const image = await client.productsImages.create({
                data: {
                    id_image: nanoid(),
                    url: url,
                    id_product_fk: datas.id_product_fk
                }
            });
            imagesCreated.push(image);
        }
        return imagesCreated.map((img) => ({ id_image: img.id_image, url: img.url }));
    }

    async editImage(id_image: string, datas: Partial<productsImagesDatas>): Promise<any> {
        return await this.prisma.productsImages.update({
            where: { id_image: id_image },
            data: {...datas}
        });
    }
}

export{PrismaProductsImages}