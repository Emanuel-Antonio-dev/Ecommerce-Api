import { app } from "../../../src/app";
import req from "supertest";
import { generateFakeEmail, generateFakePhoneNumber } from "../../setup/utils/fake-datas";

    const datas = {
      first_name:"Emanuel",
      last_name:"Da Wizard",
      email:generateFakeEmail(),
      contacts:[{
        phone_number: generateFakePhoneNumber()
      }],
      addresses:[{
        city: "Luanda",
        street: "Luanda"
      }],
      provider:"Local",
      password:"Emaricar16@",
      username:"xeeee"
  };

beforeEach(async () => {
  await req(app).post("/api.ecommerce/v1/auth/signup").send(datas);
});

describe("Local Signin test", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signin")
      .send({
        email: datas.email,
        password: datas.password,
      });
    
      expect(request.statusCode).toBe(200)
    expect(request.status).toBe(200);
  });
    it("Should return 401 for wrong password", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/signin")
      .send({
        email: datas.email,
        password: "wrongpassword",
      });
      expect(request.statusCode).toBe(401)
    expect(request.status).toBe(401);
  });
});
