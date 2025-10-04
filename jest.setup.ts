import { Request, Response, NextFunction } from "express";
import { AuthorizationService } from "./src/Services/Auth/Authorization/authorization.service";
import { JwtOperations } from "./src/Common/Utils/JwtOperations/operations";


jest.mock("@prisma/client", ()=>{
    const mockPrisma = {
        users: {
            findUnique: jest.fn(),
            findFirst: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            findMany: jest.fn(),
            delete: jest.fn(),
            deleteMany: jest.fn()
        }
    }
  return { PrismaClient: jest.fn(() => mockPrisma) };
})

jest.mock("./src/Common/Middlewares/Authorization/authorization.ts", ()=>{
    return
    {
        authorize: jest.fn((roles: string[]) =>{
            return async (req: Request, res: Response, next: NextFunction)=>{
                try
                {
                    const tokenExtracted = req.headers.authorization
                    if (!tokenExtracted)
                    {
                        return res.status(401).json({ success: false, statusCode:401, message: "Ocorreu um erro ao verificar este recurso" }) 
                    }
                    const token = tokenExtracted.split(' ')[1]
                    if (!token)
                    {
                        return res.status(401).json({ success: false, statusCode:401 ,message: "Verificação de autorização inválida, tente novamente." }) 
                    }
                    const verifiedToken = AuthorizationService.ValidateToken(token)
                    if (!verifiedToken.success)
                    {
                        return res.status(verifiedToken.statusCode).json(verifiedToken)
                    }
                    req.body.credentials = verifiedToken.info
                    next()
                } catch (error: any)
                {
                    console.log(error)
                    return res.status(500).json({ success: false, message: "Ocorreu um erro, por favor tente novamente." }) 
                }
            }
        })
    }
})
jest.mock("bcrypt", () => ({
  hash: jest.fn().mockResolvedValue("hashedpassword"),
  compare: jest
    .fn()
    .mockImplementation((password1, password2) => password1 === password2),
}));
supaFiles:[
    "dotenv/confiig"
]