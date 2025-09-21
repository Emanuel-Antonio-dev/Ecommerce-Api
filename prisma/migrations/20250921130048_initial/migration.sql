-- CreateEnum
CREATE TYPE "public"."UsersTypes" AS ENUM ('admin', 'client');

-- CreateEnum
CREATE TYPE "public"."OrderStatus" AS ENUM ('pending', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "public"."CartStatus" AS ENUM ('waiting', 'active', 'ordered', 'cancelled');

-- CreateEnum
CREATE TYPE "public"."AuthenticationsTypes" AS ENUM ('by_token', 'by_2fa');

-- CreateEnum
CREATE TYPE "public"."TokenTypes" AS ENUM ('refreshToken', 'resetPassword');

-- CreateTable
CREATE TABLE "public"."tbl_accounts" (
    "id_account" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "providerId" TEXT,
    "provider" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_accounts_pkey" PRIMARY KEY ("id_account")
);

-- CreateTable
CREATE TABLE "public"."tbl_authentications" (
    "id_authentication" TEXT NOT NULL,
    "type" "public"."AuthenticationsTypes" NOT NULL DEFAULT 'by_token',
    "expireIn" TIMESTAMP(3) NOT NULL,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "id_account_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_authentications_pkey" PRIMARY KEY ("id_authentication")
);

-- CreateTable
CREATE TABLE "public"."tbl_tokens" (
    "id_token" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "token_type" "public"."TokenTypes" NOT NULL,
    "id_authentication" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_tokens_pkey" PRIMARY KEY ("id_token")
);

-- CreateTable
CREATE TABLE "public"."tbl_two_factor_auth" (
    "id_two_factor_auth" TEXT NOT NULL,
    "otp_code" INTEGER NOT NULL,
    "id_authentication_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_two_factor_auth_pkey" PRIMARY KEY ("id_two_factor_auth")
);

-- CreateTable
CREATE TABLE "public"."tbl_contacts" (
    "id_contact" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "id_user_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_contacts_pkey" PRIMARY KEY ("id_contact")
);

-- CreateTable
CREATE TABLE "public"."tbl_users" (
    "id_user" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "user_type" "public"."UsersTypes" NOT NULL DEFAULT 'client',
    "id_account_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_users_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "public"."tbl_addresses" (
    "id_address" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'Angola',
    "id_user_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_addresses_pkey" PRIMARY KEY ("id_address")
);

-- CreateTable
CREATE TABLE "public"."tbl_products_categories" (
    "id_category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_products_categories_pkey" PRIMARY KEY ("id_category")
);

-- CreateTable
CREATE TABLE "public"."tbl_products" (
    "id_product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "aditional_info" TEXT NOT NULL,
    "id_category_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_products_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "public"."tbl_products_images" (
    "id_image" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "id_product_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_products_images_pkey" PRIMARY KEY ("id_image")
);

-- CreateTable
CREATE TABLE "public"."tbl_products_reviews" (
    "id_review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "id_product_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_products_reviews_pkey" PRIMARY KEY ("id_review")
);

-- CreateTable
CREATE TABLE "public"."tbl_orders" (
    "id_order" TEXT NOT NULL,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "id_user_fk" TEXT NOT NULL,
    "status" "public"."OrderStatus" NOT NULL DEFAULT 'pending',
    "payment_method" TEXT NOT NULL DEFAULT 'cash',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "delivered_at" TIMESTAMP(3),

    CONSTRAINT "tbl_orders_pkey" PRIMARY KEY ("id_order")
);

-- CreateTable
CREATE TABLE "public"."tbl_orders_items" (
    "id_order_item" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(10,2),
    "id_order_fk" TEXT NOT NULL,
    "id_product_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_orders_items_pkey" PRIMARY KEY ("id_order_item")
);

-- CreateTable
CREATE TABLE "public"."tbl_carts" (
    "id_cart" TEXT NOT NULL,
    "id_user_fk" TEXT NOT NULL,
    "status" "public"."CartStatus" NOT NULL DEFAULT 'waiting',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_carts_pkey" PRIMARY KEY ("id_cart")
);

-- CreateTable
CREATE TABLE "public"."tbl_carts_items" (
    "id_cart_item" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "id_cart_fk" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "id_product_fk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_carts_items_pkey" PRIMARY KEY ("id_cart_item")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_accounts_email_key" ON "public"."tbl_accounts"("email");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_tokens_token_key" ON "public"."tbl_tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_tokens_id_authentication_key" ON "public"."tbl_tokens"("id_authentication");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_two_factor_auth_otp_code_key" ON "public"."tbl_two_factor_auth"("otp_code");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_two_factor_auth_id_authentication_fk_key" ON "public"."tbl_two_factor_auth"("id_authentication_fk");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_contacts_phone_number_key" ON "public"."tbl_contacts"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_contacts_id_user_fk_key" ON "public"."tbl_contacts"("id_user_fk");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_users_id_account_fk_key" ON "public"."tbl_users"("id_account_fk");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_addresses_id_user_fk_key" ON "public"."tbl_addresses"("id_user_fk");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_products_categories_name_key" ON "public"."tbl_products_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_orders_id_user_fk_key" ON "public"."tbl_orders"("id_user_fk");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_carts_id_user_fk_key" ON "public"."tbl_carts"("id_user_fk");

-- AddForeignKey
ALTER TABLE "public"."tbl_authentications" ADD CONSTRAINT "tbl_authentications_id_account_fk_fkey" FOREIGN KEY ("id_account_fk") REFERENCES "public"."tbl_accounts"("id_account") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_tokens" ADD CONSTRAINT "tbl_tokens_id_authentication_fkey" FOREIGN KEY ("id_authentication") REFERENCES "public"."tbl_authentications"("id_authentication") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_two_factor_auth" ADD CONSTRAINT "tbl_two_factor_auth_id_authentication_fk_fkey" FOREIGN KEY ("id_authentication_fk") REFERENCES "public"."tbl_authentications"("id_authentication") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_contacts" ADD CONSTRAINT "tbl_contacts_id_user_fk_fkey" FOREIGN KEY ("id_user_fk") REFERENCES "public"."tbl_users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_users" ADD CONSTRAINT "tbl_users_id_account_fk_fkey" FOREIGN KEY ("id_account_fk") REFERENCES "public"."tbl_accounts"("id_account") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_addresses" ADD CONSTRAINT "tbl_addresses_id_user_fk_fkey" FOREIGN KEY ("id_user_fk") REFERENCES "public"."tbl_users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_products" ADD CONSTRAINT "tbl_products_id_category_fk_fkey" FOREIGN KEY ("id_category_fk") REFERENCES "public"."tbl_products_categories"("id_category") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_products_images" ADD CONSTRAINT "tbl_products_images_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "public"."tbl_products"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_products_reviews" ADD CONSTRAINT "tbl_products_reviews_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "public"."tbl_products"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_orders" ADD CONSTRAINT "tbl_orders_id_user_fk_fkey" FOREIGN KEY ("id_user_fk") REFERENCES "public"."tbl_users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_orders_items" ADD CONSTRAINT "tbl_orders_items_id_order_fk_fkey" FOREIGN KEY ("id_order_fk") REFERENCES "public"."tbl_orders"("id_order") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_orders_items" ADD CONSTRAINT "tbl_orders_items_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "public"."tbl_products"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_carts" ADD CONSTRAINT "tbl_carts_id_user_fk_fkey" FOREIGN KEY ("id_user_fk") REFERENCES "public"."tbl_users"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_carts_items" ADD CONSTRAINT "tbl_carts_items_id_cart_fk_fkey" FOREIGN KEY ("id_cart_fk") REFERENCES "public"."tbl_carts"("id_cart") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tbl_carts_items" ADD CONSTRAINT "tbl_carts_items_id_product_fk_fkey" FOREIGN KEY ("id_product_fk") REFERENCES "public"."tbl_products"("id_product") ON DELETE CASCADE ON UPDATE CASCADE;
