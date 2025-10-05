import request from "supertest"
import {app} from "../../app"
import {PrismaClient} from "../../../generated/prisma"

const prisma: PrismaClient = new PrismaClient()

const urlBase = "/api.ecommerce/v1"
const mockUserDatas = {
    first_name: "Jonas",
    last_name:"Santos",
    email:"user1@gmail.com",
    contacts:[{
        phone_number:`9002301241`
    }],
    addresses:[
        {
            city:"Luanda",
            street:"35, 234 alala"
        }
    ],
    password:"Rui4244@"
}
describe('Autentications Endpoints', () =>{
    beforeEach(()=>{
        prisma.users.deleteMany()
    })
    describe("/auth/signup", () =>{
        it("should return 201 ", async () =>{
            const response = await request(app).post(`${urlBase}/auth/signup`)
            .send(mockUserDatas)
            expect(response.status).toBe(201)
            expect(response.body.datas).toBeDefined()
            })
            it("should return 400 for missing any filed", async ()=>{
            const response = await request(app).post(`${urlBase}/auth/signup`)
            .send({
                    first_name: "Jonas"
                })
            })
            it("should return 409 if already exists email or contact", async()=>{
                const respone = await request(app).post(`${urlBase}/auth/signup`).send(mockUserDatas)
            expect(respone.status).toBe(409)
            })
            it("should return 404 for not found route", async()=>{
                const response = await request(app).post(`${urlBase}/auth/signups`).send([])
                expect(response.status).toBe(404)
            })
        })
    })