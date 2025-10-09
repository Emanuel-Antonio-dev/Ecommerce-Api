import request from "supertest";
import { app } from "../../app";
import { resetDatabase, prismaInstace } from "../../../tests/setup/prismaInstace";

describe("Auth › /local-signin", () => {
  const user = {
    first_name: "Emanuel",
    last_name: "Paulo",
    email: "emaricaroffice@gmail.com",
    password: "Emaricar16@",
    contacts: [{ phone_number: "944395932" }],
    addresses: [{ city: "Luanda", street: "rua da china" }],
  };

  beforeAll(async () => {
    await resetDatabase();
    await request(app).post("/api.ecommerce/v1/auth/signup").send(user);
  });

  it("Deve retornar 200 e o token se o login for válido", async () => {
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/local-signin")
      .send({
        email: user.email,
        password: user.password,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("accessToken");
  });

  it("Deve retornar 401 se o e-mail ou senha estiverem incorretos", async () => {
    const response = await request(app)
      .post("/api.ecommerce/v1/auth/local-signin")
      .send({
        email: "teste@invalido.com",
        password: "senhaErrada",
      });

    expect(response.status).toBe(401);
  });
});
