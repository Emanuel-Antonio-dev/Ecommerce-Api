import { app } from "../../app";
import req from "supertest";

const datas = {
    email: "emaricaroffice@gmail.com",
    password: "Emaricar16@"
}
describe("/auth/local-signin", ()=>{
        it("Deve retornar um token caso o status for 200.", async ()=>{
            const response = await req(app)
            .post("/api.ecommerce/v1/auth/local-signin")
            .send(datas)
            expect(response.status).toBe(200)
            expect(response.body.success).toBeTruthy()
            expect(response.body.statusCode).toBe(200)
            expect(response.body.message).toBeDefined()
            expect(response.body).toHaveProperty("accessToken")
        })
            it("Deve retornar um status 400, se caso faltar algum campo.", async ()=>{
            const response = await req(app).post("/api.ecommerce/v1/auth/local-signin")
            .send({
                    email: ""
                })
                expect(response.status).toBe(400)
                expect(response.body.success).toBeFalsy()
                expect(response.body.statusCode).toBe(400)
                expect(response.body.message).toBeDefined()
            })
           
            it("Deve retornar um status 401, se caso as credencias forem inválidas.", async ()=>{
            const response = await req(app).post("/api.ecommerce/v1/auth/local-signin")
            .send({
                    email: "emaricar12@gmail.com",
                    password:"12345m"
                })
                expect(response.status).toBe(401)
                expect(response.body.success).toBeFalsy()
                expect(response.body.statusCode).toBe(401)
                expect(response.body.message).toBeDefined()
            })
    })
