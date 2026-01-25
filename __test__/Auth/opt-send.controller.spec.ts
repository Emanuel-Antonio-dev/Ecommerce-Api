import req from "supertest"
import { app } from "../../src/app"

describe("Send otp code", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/otp/send")
      .send({
        email: "emaricaroffice@gmil.com",
      });
    
      expect(request.statusCode).toBe(200)
      expect(request.status).toBe(200);
  });
});
