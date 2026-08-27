import { JwtOperations } from "../../../../Common/Utils/AuthenticationsProcols/JwtOperations/operations";
import { HttpException } from "../../../../Common/Middlewares/Filters/HttpException";
import * as bcrypt from "bcrypt";
import { PrismaClient } from "../../../../../generated/prisma/client";
import { handleCart } from "../../../Products/Cart/handle-cart.service";

// Hash dummy usado para manter aproximadamente o mesmo custo de CPU
// quando a conta não existe ou não pode realizar login local.
const DUMMY_BCRYPT_HASH =
    "$2b$12$CwTycUXWue0thq9StjUM0uJ8i6c.NPWZ.ZFGqB2GdM1e6H1UYlJ1O";

class LocalStrategyAuthenticationService {
    constructor(
        private readonly prisma: PrismaClient
    ) {}

    async SignInWithLocalStrategy(
        email: string,
        password: string,
        id_guest_cart: string
    ) {
        try {
            /**
             * Validação básica
             */
            if (!email || !password) {
                throw new HttpException(
                    false,
                    400,
                    "Informe todos os campos."
                );
            }

            /**
             * Normaliza o email antes da consulta.
             */
            const normalizedEmail = email.trim();

            /**
             * Busca a conta.
             *
             * A conta inativa não será retornada devido ao is_active: true.
             */
            const user = await this.prisma.accounts.findUnique({
                where: {
                    email: normalizedEmail,
                    is_active: true
                },
                include: {
                    user_details: true
                }
            });

            /**
             * Credenciais inválidas:
             *
             * - conta inexistente
             * - user_details inexistente
             * - conta inativa
             * - provider diferente de Local
             * - senha inexistente
             *
             * Em todos esses casos executamos bcrypt.compare com um
             * hash dummy para reduzir diferenças observáveis de tempo.
             */
            if (
                !user ||
                !user.user_details ||
                user.is_active === false ||
                user.provider !== "Local" ||
                !user.password
            ) {
                await bcrypt.compare(
                    password,
                    DUMMY_BCRYPT_HASH
                );

                throw new HttpException(
                    false,
                    401,
                    "Credenciais inválidas."
                );
            }

            /**
             * Neste ponto o TypeScript sabe que:
             *
             * user existe
             * user.user_details existe
             * user.password existe
             */
            const isValidPassword = await bcrypt.compare(
                password,
                user.password
            );

            if (!isValidPassword) {
                throw new HttpException(
                    false,
                    401,
                    "Credenciais inválidas."
                );
            }

            /**
             * Claims que serão colocadas no JWT.
             */
            let userClaims: {
                sub?: number;
                user_type?: string;
                account_id?: string;
            } = {};

            /**
             * Carrinho do usuário.
             */
            let userCartItems: any[] = [];

            /**
             * ADMIN
             */
            if (user.user_details.user_type === "admin") {
                const adminDatas =
                    await this.prisma.users.findFirst({
                        where: {
                            id_user: user.user_details.id_user,
                            user_type: "admin"
                        }
                    });

                /**
                 * Se existe user_details, mas não existe o usuário
                 * correspondente na tabela users, tratamos como erro
                 * interno/inconsistência de dados.
                 */
                if (!adminDatas) {
                    throw new HttpException(
                        false,
                        500,
                        "Ocorreu um erro interno, tente novamente!"
                    );
                }

                userClaims = {
                    sub: adminDatas.id_user,
                    user_type: adminDatas.user_type,
                    account_id: user.id_account!
                };
            }

            /**
             * CLIENT
             */
            if (user.user_details.user_type === "client") {
                const clientDatas =
                    await this.prisma.users.findFirst({
                        where: {
                            id_user: user.user_details.id_user,
                            user_type: "client"
                        }
                    });

                /**
                 * Garante consistência entre accounts,
                 * user_details e users.
                 */
                if (!clientDatas) {
                    throw new HttpException(
                        false,
                        500,
                        "Ocorreu um erro interno, tente novamente!"
                    );
                }

                userClaims = {
                    sub: clientDatas.id_user,
                    user_type: clientDatas.user_type,
                    account_id: user.id_account
                };

                /**
                 * Transfere/associa o carrinho de convidado
                 * ao usuário autenticado.
                 */
                userCartItems = await handleCart(
                    id_guest_cart,
                    clientDatas.id_user
                );
            }

            /**
             * Gera os tokens.
             *
             * É importante que GenerateAccessToken e
             * GenerateRefreshToken sejam implementados com
             * tipos/segredos/claims distintos.
             */
            const accessToken = JwtOperations.GenerateAccessToken({sub: userClaims.sub!, user_type: userClaims.user_type!, account_id: userClaims.account_id!});
            const refreshToken = JwtOperations.GenerateRefreshToken({sub: userClaims.sub!, user_type: userClaims.user_type!, account_id: userClaims.account_id!});

            /**
             * Resposta de sucesso.
             */
            return {
                success: true,
                statusCode: 200,
                accessToken,
                refreshToken,
                userCartItems,
                user_datas: user.user_details,
                message: "Login realizado com sucesso!"
            };
        } catch (error: any) {
            /**
             * Erros controlados da aplicação.
             */
            if (error instanceof HttpException) {
                return {
                    success: false,
                    statusCode: error.statusCode,
                    message: error.message
                };
            }

            /**
             * Erros inesperados.
             */
            console.error(
                "LocalStrategyAuthenticationService.SignInWithLocalStrategy:",
                error
            );

            return {
                success: false,
                statusCode: 500,
                message: "Ocorreu um erro interno, tente novamente!"
            };
        }
    }
}

export {
    LocalStrategyAuthenticationService
};