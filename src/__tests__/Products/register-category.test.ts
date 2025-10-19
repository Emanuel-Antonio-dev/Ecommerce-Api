import req from "supertest";
import { app } from "../../app";
import { resetDatabase } from "../../../tests/setup/prismaInstace";
import { registerAdmin } from "../../Common/Seeds/register-admin.seed";
import dotenv from "dotenv"
dotenv.config({quiet: true})

describe("/products/categories/register-category", () =>{
    let validToken: string

    beforeEach(async()=>{
        await registerAdmin()
        const request = await req(app).post("/api.ecommerce/v1/auth/local-signin")
        .send({
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        })
        console.log(request.body)
        validToken = request.body.accessToken
        console.log("Token: ", validToken)
})

    afterEach(async()=>{
        await resetDatabase()
    })
        it("Should return 201", async()=>{
        const request = await req(app).post("/api.ecommerce/v1/products/categories/register-category")
        .send({name:"Anabolizantes", description:"Esta categoria esta presente em todos os dias das nossas vidas"})
        .set("Authorization", `Bearer ${validToken}`)

        expect(request.status).toBe(201);
        expect(request.body.success).toBeTruthy();
        expect(request.body.message).toBeDefined()
    })
/*
    it("Should return 403", async()=>{
        const request = await req(app).post("/api.ecommerce/v1/products/categories/register-category")
        .send({name:"Anabolizantes", description:"Esta categoria esta presente em todos os dias das nossas vidas"})
        .set("Authorization", `Bearer ${validToken}`)

        expect(request.status).toBe(403);
        expect(request.body.success).toBeFalsy();
        expect(request.body.message).toBeDefined()
    })
    it("Should return 401", async()=>{
        const request = await req(app).post("/api.ecommerce/v1/products/categories/register-category")
        .send({name:"Anabolizantes", description:"Esta categoria esta presente em todos os dias das nossas vidas"})
        .set("Authorization", `Bearer ${validToken}`)

        expect(request.status).toBe(401);
        expect(request.body.success).toBeFalsy();
        expect(request.body.message).toBeDefined()
    })
    it("Should return 400", async()=>{
        const request = await req(app).post("/api.ecommerce/v1/products/categories/register-category")
        .send({name:"Anabolizantes"})
        .set("Authorization", `Bearer ${validToken}`)
        expect(request.status).toBe(400);
        expect(request.body.success).toBeFalsy();
        expect(request.body.message).toBeDefined()
    })
    it("Should return 409", async()=>{
        const request = await req(app).post("/api.ecommerce/v1/products/categories/register-category")
        .send({name:"Anabolizantes", description:"Esta categoria esta presente em todos os dias das nossas vidas"})
        .set("Authorization", `Bearer ${validToken}`)

        expect(request.status).toBe(409);
        expect(request.body.success).toBeFalsy();
        expect(request.body.message).toBeDefined()
    })
*/
})