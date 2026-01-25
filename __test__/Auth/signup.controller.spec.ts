import { app } from "../../src/app";
import req from "supertest";

describe("Local Signup test", () => {
  it("Should return 201", async () => {
    const datas = {
      first_name: "Emanuel",
      last_name: "Rui",
      user_type: "tourist",
      gender: "male",
      phone_number: "944395940",
      nationality: "Angolana",
      email: "test@gmail.com",
      password: "Emaricar16@",
    };
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(datas);

    expect(request.status).toBe(201);
    expect(request.statusCode).toBe(201)

  });
  it("Should return 409 if account already exists", async () => {
    const datas = {
      first_name: "Emanuel",
      last_name: "Rui",
      user_type: "tourist",
      gender: "male",
      phone_number: "944395940",
      nationality: "Angolana",
      email: "test@gmail.com",
      password: "Emaricar16@",
    };
    await req(app).post("/api.ecommerce/v1/auth/signup").send(datas);
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(datas);

    expect(request.status).toBe(409);
    expect(request.statusCode).toBe(409)

  });
}); 
