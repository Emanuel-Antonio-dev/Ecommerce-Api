import { app } from "../../src/app";
import req from "supertest"
import { generateFakePhoneNumber } from "../../tests-setup/utils/fake-datas";

    const datas = {
      first_name:"Emanuel",
      last_name:"Da Wizard",
      email: "emaricaroffice@gmail.com",
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

describe("Request new password test", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/password/request")
      .send({
        email: datas.email,
      });
    
      expect(request.statusCode).toBe(200)
      expect(request.status).toBe(200);
  });
});
