import { app } from "../../../src/app";
import req from "supertest";

describe("Local Signup test", () => {
  it("Should return 201", async () => {
    const datas = {
      first_name:"Emanuel",
      last_name:"Da Wizard",
      email: "test@gmail.com",
      contacts:[{
        phone_number: "944394949"
      }],
      addresses:[{
        city: "Luanda",
        street: "Luanda"
      }],
      provider:"Local",
      password:"Emaricar16@",
      username:"xeeee"
  };
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(datas);

    expect(request.status).toBe(201);
    expect(request.statusCode).toBe(201)

  });
  it("Should return 409 if account already exists", async () => {
    const datas = {
      first_name:"Emanuel",
      last_name:"Da Wizard",
      email: "test@gmail.com",
      contacts:[{
        phone_number: "944394949"
      }],
      addresses:[{
        city: "Luanda",
        street: "Luanda"
      }],
      provider:"Local",
      password:"Emaricar16@",
      username:"xeeee"
  };
    await req(app).post("/api.ecommerce/v1/auth/signup").send(datas);
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signup")
      .send(datas);

    expect(request.status).toBe(409);
    expect(request.statusCode).toBe(409)

  });
}); 
