import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { LocalStrategyAuthenticationService } from "../../Services/Auth/Authentication/local-authentication.service";
import { PrismaAuthenticationsRepositories } from "../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";
import dotenv from "dotenv"
import { RegisterCartsService } from "../../Services/Products/Cart/register-carts.service";
import { PrismaCartRepositories } from "../../Repositories/Products/Cart/Prisma/PrismaCartRepositories";
import { PrismaUsersRepositories } from "../../Repositories/Users/Prisma/PrismaUsersRepositories";
dotenv.config()

const prisma: PrismaClient = new PrismaClient()
const authenticationsRepositories: PrismaAuthenticationsRepositories = new PrismaAuthenticationsRepositories(prisma)
const authenticationService: LocalStrategyAuthenticationService = new LocalStrategyAuthenticationService(prisma)
const cartRepository: PrismaCartRepositories = new PrismaCartRepositories(prisma)
const userRepository: PrismaUsersRepositories = new PrismaUsersRepositories(prisma)
const cartService: RegisterCartsService = new RegisterCartsService(prisma,cartRepository, userRepository)

class SignInController
{
    private static RefreshTokenDate: number = 7*24*60*60*1000
    private static AccessTokenDate: number = 15 * 60 * 1000
    static async signIn(req: Request, res: Response):Promise<Response | any>
    {
        try
        {
            const {email, password, id_guest_cart} = req.body
            if (!email || !password)
            {
                return res.status(400).json({success: false, statusCode: 400, message:"Informe todos os campos."})
            }
            const authenticationResult = await authenticationService.SignInWithLocalStrategy(email, password, id_guest_cart)
            if(!authenticationResult.success || !authenticationResult.refreshToken)
            {
                return res.status(authenticationResult.statusCode).json(authenticationResult)
            }
            const refreshToken = authenticationResult.refreshToken
            res.cookie("refreshToken",refreshToken,{
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                maxAge:this.RefreshTokenDate,
                sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax"
            })
            await prisma.$transaction(async(tx)=>{
                const id_account = await tx.accounts.findUnique({where:{email: email}})
                if(!id_account)
                {
                    throw new Error()
                }
                const authentication = await authenticationsRepositories.register({
                    type: "by_token",
                    used:false,
                    expireIn: new Date(Date.now() + this.RefreshTokenDate),
                    id_account_fk: id_account.id_account
                }, tx)
                const alreadyExistsRefreshToken = await authenticationsRepositories.findToken(authenticationResult.refreshToken, "refreshToken")
                if(alreadyExistsRefreshToken)
                {
                    await tx.tokens.delete({where:{id_token: alreadyExistsRefreshToken.id_token}})
                }
                if(!refreshToken)
                {
                    throw new Error()
                }
                await authenticationsRepositories.registerToken({
                    token: refreshToken,
                    token_type: "refreshToken",
                    id_authentication: authentication.id_authentication,
                }, tx)
                
            })
            return res.status(authenticationResult.statusCode).json({
                success: authenticationResult.success, 
                statusCode: authenticationResult.statusCode, 
                accessToken: authenticationResult.accessToken, 
                message: authenticationResult.message,
                ...(authenticationResult.user_datas.user_type === "client" && {cart_items: authenticationResult.userCartItems}),
            })
        } catch (error: any)
        {
            console.log(error)
            return res.status(500).json({success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente"})   
        }
    }
}
export{SignInController}