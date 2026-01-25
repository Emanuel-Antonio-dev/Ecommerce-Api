import * as bcrypt from 'bcrypt';
import { PrismaClient } from '../../../../../generated/prisma/client';
import { PrismaAuthenticationsRepositories } from "../../../../Repositories/Autentications/Prisma/PrismaAuthenticationsRepositories";

class ValidateOtpCodeService {
    constructor(
        private readonly repository: PrismaAuthenticationsRepositories,
        private readonly prisma: PrismaClient
    ) {}

    async validateOtpCode(otp_code: string, email?: string, phone_number?: string) {
        try {
            if (!otp_code) {
                return {success: false, statusCode: 400, message: "Informe o seu código de verificação."}
            }
            if(!email && !phone_number)
            {
                return {success: false, statusCode: 400, message: "Informe o seu email ou número de telefone."}
            }
            
            const otpRecord = await this.repository.findValidOtp({email,phone_number});
            if (!otpRecord)
            {
                return { success: false, statusCode: 401, message: "Código inválido ou expirado." };
            }

            if (otpRecord.locked)
            {
                await this.repository.lockOtpCode(otpRecord.id_two_factor_auth);
                return { success: false, statusCode: 401, message: "Código bloqueado por excesso de tentativas." };
            }

            if (otpRecord.authentication_details.used) {
                return { success: false, statusCode: 401, message: "Este código já foi usado." };
            }

            if (otpRecord.authentication_details.expireIn < new Date()) {
                return { success: false, statusCode: 401, message: "Código expirado." };
            }

            const isValidOtp = await bcrypt.compare(otp_code, otpRecord.otp_code_hash);
            if (!isValidOtp) {
                const transaction = await  this.prisma.$transaction(async (tx) => {
                    const icrementOtpAttemps = await this.repository.incrementOtpAttempts(otpRecord.id_two_factor_auth, tx);
                    if (icrementOtpAttemps.attempts >= otpRecord.max_attempts)
                    {
                        await this.repository.lockOtpCode(otpRecord.id_two_factor_auth, tx);
                    }
                    return icrementOtpAttemps
                });
                if (transaction.attempts >= transaction.max_attempts)
                {
                    return {success: false,statusCode: 401,message: "Você excedeu o número de tentativas. Peça um novo código."};
                }
                return { success: false, statusCode: 401, message: "Código de verificação inválido." };
            }
            await this.prisma.$transaction(async (tx) => {
                await this.repository.editAuthenticationDatas(otpRecord.authentication_details.id_authentication, true, tx);
                await this.repository.invalidateActiveAuthentications({email, phone_number}, tx)
                await this.repository.deleteOtpCodeDatas(otpRecord.id_two_factor_auth, tx);
            }, {maxWait: 30000, timeout: 45000});

            return { success: true, statusCode: 200, message: "Código validado com sucesso." };

        } catch (error: any) {
            console.log(error);
            return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente." };
        }
    }
}

export { ValidateOtpCodeService };
