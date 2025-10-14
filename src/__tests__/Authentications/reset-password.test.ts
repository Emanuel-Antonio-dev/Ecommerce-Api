import request from "supertest";
import { app } from "../../app";
import { resetDatabase } from "../../../tests/setup/prismaInstace";

const userCredentials = {
  first_name: "Emanuel",
  last_name: "Paulo",
  email: "reset@gmail.com",
  password: "Emaricar16@",
  contacts: [{ phone_number: "911129019" }],
  addresses: [{ city: "Luanda", street: "rua da china" }],
};

describe("Request new Pasword", ()=>{
    beforeEach(async()=>{
        await resetDatabase()
        await request(app).post("/api.ecommerce/v1/auth/signup").send(userCredentials);
    })
    it("Request new password, should return 200", async()=>{
        const response = await request(app)
            .post("/api.ecommerce/v1/auth/request-new-password")
            .send({
                email: userCredentials.email
            });
            expect(response.status).toBe(200);
            expect(response.body.success).toBeTruthy();
            expect(response.body.message).toBeDefined()
    }, 60000)

        it("It should return 404, if not exists this email", async()=>{
        const response = await request(app)
            .post("/api.ecommerce/v1/auth/request-new-password")
            .send({
                email: "emaneri@gmail.com"
            });
            expect(response.status).toBe(404);
            expect(response.body.success).toBeFalsy();
            expect(response.body.message).toBeDefined()
    })

})

describe("Reset passowrd", ()=>{
    beforeEach(async()=>{
        await resetDatabase()
    })

    it("It should return 200, for successful reseted passowrd", async()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        const response = await request(app).put(`/api.ecommerce/v1/auth/reset-password?authorization=${token}`)
        .send({newPassword: "Newpassword12@"})
        expect(response.status).toBe(200)
        expect(response.body.success).toBeTruthy()
    })
    it("It should return 401, for unsuccessful reseted passowrd", async()=>{
        const token = ""
        const response = await request(app).put(`/api.ecommerce/v1/auth/reset-password?authorization=${token}`)
    
        .send({newPassword: "Newpassword12@"})
        expect(response.status).toBe(401)
        expect(response.body.success).toBeFalsy()
    })

})