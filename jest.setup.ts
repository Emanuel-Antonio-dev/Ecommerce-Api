import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client"
import {resetDatabase} from "../E-commerce/tests/setup/prismaInstace"
dotenv.config({ path: ".env.test", quiet: true})

const prisma = new PrismaClient()

beforeEach(async()=>{
  await resetDatabase()
})
beforeAll(async () => {
  await prisma.$connect()
  console.log("🧪 Conectado ao banco de teste.")
})

afterAll(async () => {
  await prisma.$disconnect()
  console.log("🧹 Prisma connection closed successfully after tests.")
})
