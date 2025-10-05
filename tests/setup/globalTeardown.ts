import { PrismaClient } from "@prisma/client";

export default async function globalTeardown(): Promise<void> {
  const prisma = new PrismaClient();
    await prisma.$disconnect();
    console.log("🧹 Prisma connection closed successfully after tests.");

}
