import req from "supertest"
import { app } from "../../../src/app"

let code: string
beforeEach(async() =>{
    const request = await req(app)
    .post("/api.ecommerce/v1/auth/otp/send")
    .send({
        email: "emaricaroffice@gmil.com",
    });
    code = request.body.otp_code
    console.clear()
})

describe("Send otp code", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/otp/verify-code")
      .send({
        email: "emaricaroffice@gmil.com",
        otp_code: code
      });
    
      expect(request.statusCode).toBe(200)
      expect(request.status).toBe(200);
  });
});
