import { app } from "../../src/app";
import req from "supertest"
import { generateFakeEmail, generateFakePhoneNumber } from "../setup/utils/fake-datas";

let datas: any
let refreshToken: string;
beforeEach(async () => {
    datas = {
        first_name: "Emanuel",
        last_name: "Rui",
        user_type: "tourist",
        gender: "male",
        phone_number: generateFakePhoneNumber(),
        nationality: "Angolana",
        email: generateFakeEmail(),
        password: "Emaricar16@",
    };
    
    await req(app).post("/api.ecommerce/v1/auth/signup").send(datas);
    const loginResponse = await req(app).post("/api.ecommerce/v1/auth/signin").send({
        email: datas.email,
        password: datas.password
    })
    
    const cookies = loginResponse.headers["set-cookie"]
    if (!cookies) throw new Error("Cookie de refreshToken não encontrado.");
        
    const cookieAsArray = Array.isArray(cookies) ? cookies : [cookies]
        
    const refreshCookie = cookieAsArray.find((c: string) => c.startsWith("refreshToken="));
    if (!refreshCookie) throw new Error("refreshToken não presente no cookie.");
    refreshToken = refreshCookie.split(";")[0].split("=")[1];
});

describe("Logout server test", () => {
  it("Should return 200", async () => {
    const request = await req(app)
      .post("/api.ecommerce/v1/auth/logout")
      .set("Cookie", [`refreshToken=${refreshToken}; HttpOnly`]);
    
      expect(request.statusCode).toBe(200)
      expect(request.status).toBe(200);
  });
    it("Should return 401 if no refreshToken cookie", async () => {
    const response = await req(app)
      .post("/api.ecommerce/v1/auth/logout");

    expect(response.status).toBe(401);
    expect(response.body.success).toBeFalsy();
  });
});
