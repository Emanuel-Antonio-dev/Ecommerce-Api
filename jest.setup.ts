import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
dotenv.config({ path: ".env.test", quiet: true})

const prisma = new PrismaClient()
beforeAll(async () => {
  await prisma.$connect()
  console.log("🧪 Conectado ao banco de teste.")
})

afterAll(async () => {
  await prisma.$disconnect()
  console.log("🧹 Prisma connection closed successfully after tests.")
})
