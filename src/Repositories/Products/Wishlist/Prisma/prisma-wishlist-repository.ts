import { PrismaClient } from "../../../../../generated/prisma/client";
import { IWishlistRepositories } from "../I-wishlist-repository";
import { WishlistItemDatas } from "../../../../interfaces/Products/Wishlist/interface";

class PrismaWishlistRepository implements IWishlistRepositories {
  constructor(private readonly prisma: PrismaClient) {}

  async add(datas: WishlistItemDatas): Promise<any> {
    return await this.prisma.wishlistItems.create({
      data: {
        id_user_fk: datas.id_user_fk,
        id_product_fk: datas.id_product_fk,
      },
      include: {
        product: {
          select: {
            id_product: true,
            name: true,
            slug: true,
            price: true,
            available: true,
            images: { select: { url: true }, where: { is_main: true }, take: 1 },
          },
        },
      },
    });
  }

  async remove(id_user_fk: number, id_product_fk: number): Promise<any> {
    return await this.prisma.wishlistItems.deleteMany({
      where: { id_user_fk, id_product_fk },
    });
  }

  async findByUser(id_user_fk: number, take?: number, skip?: number): Promise<any[]> {
    return await this.prisma.wishlistItems.findMany({
      where: { id_user_fk },
      include: {
        product: {
          select: {
            id_product: true,
            name: true,
            slug: true,
            price: true,
            available: true,
            images: { select: { url: true }, where: { is_main: true }, take: 1 },
            brand: { select: { name: true } },
            variants: {
              select: { id_variant: true, sku: true, color: true, size: true, stock: true, price: true },
            },
          },
        },
      },
      orderBy: { created_at: "desc" },
      take,
      skip,
    });
  }

  async findItem(id_user_fk: number, id_product_fk: number): Promise<any> {
    return await this.prisma.wishlistItems.findFirst({
      where: { id_user_fk, id_product_fk },
    });
  }

  async countByUser(id_user_fk: number): Promise<number> {
    return await this.prisma.wishlistItems.count({ where: { id_user_fk } });
  }

  async clearByUser(id_user_fk: number): Promise<any> {
    return await this.prisma.wishlistItems.deleteMany({ where: { id_user_fk } });
  }
}

export { PrismaWishlistRepository };
