import {app} from "../../src/app"
import req from "supertest";

describe("Health api check", ()=>{
    it("Should return 200", async()=>{
        const request = await req(app).get("/api.ecommerce/v1/health")
        expect(request.statusCode).toBe(200)
    })
})