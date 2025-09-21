/*
  Warnings:

  - The values [by_2fa] on the enum `AuthenticationsTypes` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "public"."AuthenticationsTypes_new" AS ENUM ('by_token', 'by_otp');
ALTER TABLE "public"."tbl_authentications" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "public"."tbl_authentications" ALTER COLUMN "type" TYPE "public"."AuthenticationsTypes_new" USING ("type"::text::"public"."AuthenticationsTypes_new");
ALTER TYPE "public"."AuthenticationsTypes" RENAME TO "AuthenticationsTypes_old";
ALTER TYPE "public"."AuthenticationsTypes_new" RENAME TO "AuthenticationsTypes";
DROP TYPE "public"."AuthenticationsTypes_old";
ALTER TABLE "public"."tbl_authentications" ALTER COLUMN "type" SET DEFAULT 'by_token';
COMMIT;
