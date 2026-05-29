// src/Repositories/Products/Variants/IProductVariantsRepository.ts

import { Prisma, ProductVariants } from "../../../../generated/prisma/client";

export interface IProductVariantsRepository {
  findById(id_variant: number): Promise<ProductVariants | null>;

  findByProductId(id_product: number): Promise<ProductVariants[]>;

  register(data: {
    id_product_fk: number;
    sku: string;
    color?: string;
    size?: string;
    stock: number;
    price: number;
  }, tx?:Omit<Prisma.TransactionClient, "$transaction">): Promise<ProductVariants>;

  updateStock(id_variant: number, stock: number): Promise<ProductVariants>;

  incrementStock(id_variant: number, quantity: number): Promise<void>;

  decrementStock(id_variant: number, quantity: number): Promise<void>;

  delete(id_variant: number): Promise<void>;
}