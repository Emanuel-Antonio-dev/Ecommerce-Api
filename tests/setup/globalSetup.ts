import path from "path";
import { execSync } from "child_process";

export default async function globalTeardown(): Promise<void> {
  try {
    // 🛠️ Garante que o Prisma Client existe
    const clientPath = path.resolve(__dirname, "../../node_modules/.prisma/client");
    try {
      require.resolve("@prisma/client");
    } catch {
      console.log("⚙️ Prisma Client não encontrado. Gerando novamente...");
      execSync("npx prisma generate", { stdio: "inherit" });
    }

    // 🔁 Importa dinamicamente o PrismaClient
    const { PrismaClient } = await import("@prisma/client");
    const prisma = new PrismaClient();

    await prisma.$disconnect();
    console.log("🧹 Prisma connection closed successfully after tests.");
  } catch (err: any) {
    console.warn("⚠️ Prisma teardown skipped:", err.message);
  }
}
