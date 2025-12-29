import req from "supertest";
import { app } from "../../app";
import { resetDatabase } from "../../../tests/setup/prismaInstace";
import { registerAdmin } from "../../Common/Seeds/register-admin.seed";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

describe("Category datas", () => {
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
    it("Should return 200 if exists category", async () => {
        const request = await req(app)
        .post("/api.ecommerce/v1/products/categories")
        .send({
            name: "Anabolizantes",
            description: "Esta categoria está presente em todos os dias das nossas vidas"
        })
        .set("Authorization", `Bearer ${validToken}`);

        const categoryId = request.body.datas.id_category
        const response = await req(app).get(`/api.ecommerce/v1/products/categories/${categoryId}`)
        
        expect(response.status).toBe(200);
        expect(response.body.success).toBeTruthy();
  });
    it("Should return 404 if not exists category", async () => {
        const categoryId: number = 1000
        const response = await req(app).get(`/api.ecommerce/v1/products/categories/${categoryId}`)
        
        expect(response.status).toBe(404);
        expect(response.body.success).toBeFalsy();
        expect(response.body.message).toBeDefined();
  });
});
