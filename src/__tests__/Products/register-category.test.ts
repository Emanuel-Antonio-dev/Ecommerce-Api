import req from "supertest";
import { app } from "../../app";
import { resetDatabase } from "../../../tests/setup/prismaInstace";
import { registerAdmin } from "../../Common/Seeds/register-admin.seed";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

describe("/products/categories/register-category", () => {
  let validToken: string;

  beforeEach(async () => {
    await resetDatabase();
    await registerAdmin();
    const response = await req(app)
      .post("/api.ecommerce/v1/auth/local-signin")
      .send({
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
      });

    if (!response.body.accessToken)
    {
      throw new Error("❌ Falha ao autenticar admin: token ausente.");
    }

    validToken = response.body.accessToken;
  });

  afterEach(async () => {
    await resetDatabase();
  });

  it("Should return 201", async () => {
    const response = await req(app)
      .post("/api.ecommerce/v1/products/categories")
      .send({
        name: "Anabolizantes",
        description: "Esta categoria está presente em todos os dias das nossas vidas",
      })
      .set("Authorization", `Bearer ${validToken}`);

    expect(response.status).toBe(201);
    expect(response.body.success).toBeTruthy();
    expect(response.body.message).toBeDefined();
  });
});
