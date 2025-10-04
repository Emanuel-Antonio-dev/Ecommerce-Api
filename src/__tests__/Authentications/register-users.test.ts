import request from "supertest"
import {app} from "../../app"
import {PrismaClient} from "@prisma/client"

const prisma: PrismaClient = new PrismaClient()
const urlBase = "/api.ecommerce/v1"
const mockUserDatas = {
    first_name: "Jonas",
    last_name:"Santos",
    email:"jonas@gmail.com",
    contacts:[{
        phone_number:"9412340945"
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
    beforeEach(async()=>{
          await prisma.users.deleteMany(); 
        jest.clearAllMocks()

    })
    describe("Register client", () =>{
        it("should return user datas", async () =>{
            prisma.users.findUnique.mockResolvedValue(null); // email não existe
            prisma.users.create.mockResolvedValue(mockUserDatas)
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
                prisma.users.findUnique.mockResolvedValue(mockUserDatas)
                const respone = await request(app).post(`${urlBase}/auth/signup`).send(mockUserDatas)
            expect(respone.status).toBe(409)
            })
        })
    })