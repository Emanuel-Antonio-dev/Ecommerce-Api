import request from "supertest";
import { app } from "../../app";
import { resetDatabase } from "../../../tests/setup/prismaInstace";

const userPayload = {
  first_name: "Emanuel",
  last_name: "Paulo",
  email: "register@gmail.com",
  password: "Emaricar16@",
  contacts: [{ phone_number: "900112321" }],
  addresses: [{ city: "Luanda", street: "rua da china" }],
};

describe("Auth /signup", () => {
  beforeEach(async () => {
    await resetDatabase();
  });

  it("Deve retornar 201 se o usuário for criado com sucesso", async () => {
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(userPayload);

    expect(response.status).toBe(201);
    expect(response.body.success).toBeTruthy();
    expect(response.body.message).toBe("Conta criada com sucesso!");
  });

  it("Deve retornar 409 se o e-mail já existir", async () => {
    await request(app).post("/api.ecommerce/v1/auth/signup").send(userPayload);
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(userPayload);

    expect(response.status).toBe(409);
  });
});

