import req from "supertest"
import { app } from "../../app"

describe("Registrar usuarios", ()=>{
    it("Deve retornar 201, caso esteja tudo bem", async()=>{
        const res = await req(app).post("/api.ecommerce/v1/auth/signup")
        .send({
            first_name:"Emanuel",
            last_name:"Paulo",
            email:"emaricaroffice@gmail.com",
            password:"Emaricar16@",
            contacts:[{phone_number:944395932}],
            addresses:[{city:"Luanda", street:"rua da china"}]
        })
        expect(res.status).toBe(201)
        expect(res.body.success).toBeTruthy()
        expect(res.body.statusCode).toBe(201)
        expect(res.body.message).toBeDefined()
        expect(res.body).toHaveProperty("accessToken")
    })
    it("should return 400 for missing any filed", async ()=>{
        const response = await req(app)
        .post("/api.ecommerce/v1/auth/signup")
        .send({first_name: "Jonas"})
        })
        it("should return 409 if already exists email or contact", async()=>{
            const res = await req(app).post("/api.ecommerce/v1/auth/signup")
        .send({
            first_name:"Emanuel",
            last_name:"Paulo",
            email:"emaricaroffice@gmail.com",
            password:"Emaricar16@",
            contacts:[{phone_number:944395932}],
            addresses:[{city:"Luanda", street:"rua da china"}]
        })
        expect(res.status).toBe(409)
        })
        it("should return 404 for not found route", async()=>{
            const res = await req(app).post("/api.ecommerce/v1/auth/signups").send([])
            expect(res.status).toBe(404)
        })
})