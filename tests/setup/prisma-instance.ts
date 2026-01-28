import { prismaService } from "../../src/lib/prisma.service";
import "dotenv/config";
export async function resetDatabase()
{
  if (process.env.NODE_ENV !== 'test')
  {
    throw new Error('resetDatabase só pode rodar em ambiente de teste');
  }
  await prismaService.$executeRawUnsafe(`
    TRUNCATE TABLE
      "tbl_products_reviews",
      "tbl_products_images",
      "tbl_orders_items",
      "tbl_carts_items",

      "tbl_orders",
      "tbl_carts",

      "tbl_products",
      "tbl_product_brands",
      "tbl_products_categories",

      "tbl_contacts",
      "tbl_addresses",
      "tbl_users",

      "tbl_two_factor_auth",
      "tbl_tokens",
      "tbl_authentications",
      "tbl_accounts"
    RESTART IDENTITY CASCADE;
  `);
}
