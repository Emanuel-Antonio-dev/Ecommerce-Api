import { app } from "../../src/app";
import req from "supertest"
import { generateFakePhoneNumber } from "../setup/utils/fake-datas";

const datas = {
  first_name: "Emanuel",
  last_name: "Rui",
  user_type: "tourist",
  gender: "male",
  phone_number: generateFakePhoneNumber(),
  nationality: "Angolana",
  email: "emaricaroffice@gmail.com",
  password: "Emaricar16@",
};
let getToken: string;
beforeEach(async () => {
  await req(app).post("/api.ecommerce/v1/auth/signup").send(datas);
  const requestToken = await req(app).post("/api.ecommerce/v1/auth/password/request").send({email:"emaricaroffice@gmail.com"})
  getToken = requestToken.body.token
});

describe("Reset password test", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .put(`/api.ecommerce/v1/auth/password/reset?authorization=${getToken}`)
      .send({
        newPassword:"Emaricar17@"
      });
    
      expect(request.statusCode).toBe(200)
      expect(request.status).toBe(200);
  });
});
