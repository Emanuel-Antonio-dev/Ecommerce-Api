import { JwtOperations } from "../../../../Common/Utils/AuthenticationsProcols/JwtOperations/operations"
import { HttpException } from "../../../../Common/Middlewares/Filters/HttpException";
import * as bcrypt from 'bcrypt';
import { PrismaClient } from "../../../../../generated/prisma/client";
import { handleCart } from "../../../Products/Cart/handle-cart.service";


// ✅ FIX (enumeração de conta): hash "dummy" usado só para gastar o mesmo tempo
// de CPU do bcrypt.compare real quando a conta não existe, evitando que a
// diferença de tempo de resposta revele quais e-mails estão cadastrados.
const DUMMY_BCRYPT_HASH = "$2b$12$CwTycUXWue0Thq9StjUM0uJ8i6c.NPWZ.ZFGqB2GdM1e6H1UYlJ1O";

class LocalStrategyAuthenticationService
{
    constructor(private readonly prisma: PrismaClient){}

    async SignInWithLocalStrategy(email: string, password: string, id_guest_cart: string)
    {
        try
        {
            if (!email || !password)
            {
                throw new HttpException(false, 400, "Informe as suas credenciais.")
            }
            const user = await this.prisma.accounts.findUnique({where:{email: email.trim(), is_active: true}, include:{user_details:true}})

            // ✅ FIX: mensagem única e genérica para "não existe" / "conta bloqueada" /
            // "senha errada" / "conta é de login social" — antes, cada caso tinha um
            // status/mensagem diferente (401/403/409), o que permitia descobrir quais
            // e-mails estão cadastrados e até por qual provedor. Detalhes como "sua
            // conta está bloqueada" ou "entre com Google" devem ser comunicados por um
            // canal já autenticado (ex.: after 2FA/e-mail confirmado), não no login.
            const invalidCredentials = (): never => { throw new HttpException(false, 401, "Credenciais inválidas.") }

            if(!user || !user.user_details || user.provider !== "Local" || !user.password)
            {
                // roda um bcrypt.compare "de mentira" para igualar o tempo de resposta
                // ao caminho onde o usuário existe e a senha é comparada de verdade.
                await bcrypt.compare(password, DUMMY_BCRYPT_HASH)
                invalidCredentials()
            }
            const isValidPassword = await bcrypt.compare(password, user!.password!)
            if (!isValidPassword)
            {
                invalidCredentials()
            }
            // ✅ neste ponto o guard acima já garante que a conta é válida, local,
            // ativa e com senha correta — usamos uma referência não-nula explícita
            // porque o TypeScript não propaga esse narrowing através da função
            // auxiliar `invalidCredentials()`.
            const validUser = user!
            let userClaims: any = {}
            let userCartItems: any[] = []
            if(validUser.user_details?.user_type == "admin")
            {
                const adminDatas: any = await this.prisma.users.findFirst({where:{id_user: validUser.user_details.id_user, user_type:"admin"}})
                userClaims = {sub: adminDatas?.id_user, user_type: adminDatas?.user_type, admin_role: adminDatas?.admin_role, account_id: validUser.id_account}
            }
            
            if(validUser.user_details?.user_type == "client")
            {
                const clientDatas = await this.prisma.users.findFirst({where:{id_user: validUser.user_details.id_user, user_type:"client"}})
                userClaims = {sub: clientDatas?.id_user, user_type: clientDatas?.user_type, account_id: validUser.id_account}
                userCartItems = await handleCart(id_guest_cart, validUser.user_details.id_user)
            }
            const accessToken = JwtOperations.GenerateAccessToken(userClaims)
            const refreshToken = JwtOperations.GenerateRefreshToken(userClaims)
            
            return {
                success: true,
                statusCode: 200,
                accessToken,
                refreshToken,
                userCartItems,
                user_datas: validUser.user_details,
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