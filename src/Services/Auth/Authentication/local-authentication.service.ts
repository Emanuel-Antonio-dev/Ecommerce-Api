import { JwtOperations } from "../../../Common/Utils/JwtOperations/operations"
import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import * as bcrypt from 'bcrypt';
import { PrismaClient } from "../../../../generated/prisma";
import { handleCart } from "../../Products/Cart/handle-cart.service";


class LocalStrategyAuthenticationService
{
    constructor(private readonly prisma: PrismaClient){}

    async SignInWithLocalStrategy(email: string, password: string, id_guest_cart: string)
    {
        try
        {
            if (!email || !password)
            {
                throw new HttpException(false, 400, "Informe todos os campos.")
            }
            const user = await this.prisma.accounts.findUnique({where:{email: email.trim()}, include:{user_details:true}})
            if(!user || !user.user_details)
            {
                throw new HttpException(false, 401, "Credencias inválidas.")
            }
            const isValidPassword = await bcrypt.compare(password, user.password)
            if (!isValidPassword)
            {
                throw new HttpException(false, 401, "Credencias inválidas.")
            }
            let userClaims: any = {}
            let userCartItems: any[] = []
            if(user.user_details?.user_type == "admin")
            {
                const adminDatas = await this.prisma.users.findFirst({where:{id_user: user.user_details.id_user, user_type:"admin"}})
                userClaims = {id_admin: adminDatas?.id_user, user_type: adminDatas?.user_type}
            }
            
            if(user.user_details?.user_type == "client")
            {
                const clientDatas = await this.prisma.users.findFirst({where:{id_user: user.user_details.id_user, user_type:"client"}})
                userClaims = {id_client: clientDatas?.id_user, user_type: clientDatas?.user_type}
                userCartItems = await handleCart(id_guest_cart, user.user_details.id_user)
            }
            const accessToken = JwtOperations.GenerateToken(userClaims, "access")
            const refreshToken = JwtOperations.GenerateToken(userClaims, "refreshToken")
            
            return {
                success: true,
                statusCode: 200,
                accessToken,
                refreshToken,
                userCartItems,
                user_datas: user.user_details,
                message: "Login realizado com sucesso!"}
        } catch (error: any)
        {
            if (error instanceof HttpException)
            {
                return {success: false, statusCode: error.statusCode, message: error.message}
            }
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!"}
        }
    }
}
export{LocalStrategyAuthenticationService}