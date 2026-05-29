// src/Repositories/Products/Variants/Prisma/PrismaProductVariantsRepository.ts

import { Prisma, PrismaClient } from "../../../../../generated/prisma/client";
import { ProductVariantDatas } from "../../../../interfaces/Products/Variants/interface";
import { IProductVariantsRepository } from "../IProduct-variants-repositories";

export class PrismaProductVariantsRepository implements IProductVariantsRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async findById(id_variant: number) {
    return await this.prisma.productVariants.findUnique({
      where: { id_variant },
    });
  }

  async findByProductId(id_product: number) {
    return await this.prisma.productVariants.findMany({
      where: { id_product_fk: id_product },
    });
  }

  async register(datas: ProductVariantDatas, tx?:Omit<Prisma.TransactionClient, "$transaction">) {
    const client = tx || this.prisma;
    return await client.productVariants.create({
        data:{
            ...datas
        }
    });
  }

  async updateStock(id_variant: number, stock: number) {
    return await this.prisma.productVariants.update({
      where: { id_variant },
      data: { stock },
    });
  }

  async incrementStock(id_variant: number, quantity: number) {
    await this.prisma.productVariants.update({
      where: { id_variant },
      data: {
        stock: {
          increment: quantity,
        },
      },
    });
  }

  async decrementStock(id_variant: number, quantity: number) {
    await this.prisma.productVariants.update({
      where: { id_variant },
      data: {
        stock: {
          decrement: quantity,
        },
      },
    });
  }

  async delete(id_variant: number) {
    await this.prisma.productVariants.delete({
      where: { id_variant },
    });
  }
}