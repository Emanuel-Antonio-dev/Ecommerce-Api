import { resetDatabase } from "./prisma-instance";
import { prismaService } from "../../src/lib/prisma.service";

// Jest executa este arquivo antes de todos os testes
beforeEach(async () => {
  await resetDatabase();
  console.clear()
});

