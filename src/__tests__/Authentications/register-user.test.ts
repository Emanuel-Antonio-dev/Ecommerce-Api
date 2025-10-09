import request from "supertest";
import { app } from "../../app";
import { resetDatabase, prismaInstace } from "../../../tests/setup/prismaInstace";

describe("Auth /signup", () => {
  beforeAll(async () => {
    await resetDatabase();
  });

  it("Deve retornar 201 se o usuário for criado com sucesso", async () => {
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send({
        first_name: "Emanuel",
        last_name: "Paulo",
        email: "emaricaroffice@gmail.com",
        password: "Emaricar16@",
        contacts: [{ phone_number: "944395932" }],
        addresses: [{ city: "Luanda", street: "rua da china" }],
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBeTruthy();
    expect(response.body.message).toBe("Conta criada com sucesso!");

  });

  it("Deve retornar 409 se o e-mail já existir", async () => {
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send({
        first_name: "Emanuel",
        last_name: "Paulo",
        email: "emaricaroffice@gmail.com",
        password: "Emaricar16@",
        contacts: [{ phone_number: "944395932" }],
        addresses: [{ city: "Luanda", street: "rua da china" }],
      });

    expect(response.status).toBe(409);
  });
});
