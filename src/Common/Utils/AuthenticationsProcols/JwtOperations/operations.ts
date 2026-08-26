import * as jwt from "jsonwebtoken";
import "dotenv/config";

interface AccessTokenPayload {
    sub: number;
    user_type: string;
    type: "access";
    iat?: number;
    exp?: number;
}

interface RefreshTokenPayload {
    sub: number;
    user_type: string;
    type: "refresh";
    iat?: number;
    exp?: number;
}

interface TempTokenPayload {
    type: "temp";
    data: Record<string, any>;
    iat?: number;
    exp?: number;
}

class JwtOperations {

    private static readonly ACCESS_SECRET =
        process.env.JWT_ACCESS_SECRET;

    private static readonly REFRESH_SECRET =
        process.env.JWT_REFRESH_SECRET;

    private static readonly TEMP_SECRET =
        process.env.JWT_TEMP_SECRET;


    private static validateConfiguration(): void {

        if (!this.ACCESS_SECRET) {
            throw new Error(
                "JWT_ACCESS_SECRET não definido."
            );
        }

        if (!this.REFRESH_SECRET) {
            throw new Error(
                "JWT_REFRESH_SECRET não definido."
            );
        }

        if (!this.TEMP_SECRET) {
            throw new Error(
                "JWT_TEMP_SECRET não definido."
            );
        }
    }


    // =========================================================
    // ACCESS TOKEN
    // =========================================================

    static GenerateAccessToken(
        payload: {
            sub: number;
            user_type: string;
        }
    ): string {

        this.validateConfiguration();

        return jwt.sign(
            {
                ...payload,
                type: "access",
            },
            this.ACCESS_SECRET!,
            {
                expiresIn: "15m",
            }
        );
    }


    static VerifyAccessToken(
        token: string
    ): AccessTokenPayload {

        this.validateConfiguration();

        const decoded = jwt.verify(
            token,
            this.ACCESS_SECRET!
        );


        if (
            typeof decoded !== "object" ||
            decoded === null
        ) {
            throw new jwt.JsonWebTokenError(
                "Payload do access token inválido."
            );
        }


        if (decoded.type !== "access") {
            throw new jwt.JsonWebTokenError(
                "Tipo de access token inválido."
            );
        }


        if (typeof decoded.sub !== "number") {
            throw new jwt.JsonWebTokenError(
                "Subject do access token inválido."
            );
        }


        if (typeof decoded.user_type !== "string") {
            throw new jwt.JsonWebTokenError(
                "Tipo de usuário inválido."
            );
        }


        return {
            sub: decoded.sub,
            user_type: decoded.user_type,
            type: "access",
            iat: decoded.iat,
            exp: decoded.exp,
        };
    }


    // =========================================================
    // REFRESH TOKEN
    // =========================================================

    static GenerateRefreshToken(
        payload: {
            sub: number;
            user_type: string;
        }
    ): string {

        this.validateConfiguration();

        return jwt.sign(
            {
                ...payload,
                type: "refresh",
            },
            this.REFRESH_SECRET!,
            {
                expiresIn: "7d",
            }
        );
    }


    static VerifyRefreshToken(
        token: string
    ): RefreshTokenPayload {

        this.validateConfiguration();

        const decoded = jwt.verify(
            token,
            this.REFRESH_SECRET!
        );


        if (
            typeof decoded !== "object" ||
            decoded === null
        ) {
            throw new jwt.JsonWebTokenError(
                "Payload do refresh token inválido."
            );
        }


        if (decoded.type !== "refresh") {
            throw new jwt.JsonWebTokenError(
                "Tipo de refresh token inválido."
            );
        }


        if (typeof decoded.sub !== "number") {
            throw new jwt.JsonWebTokenError(
                "Subject do refresh token inválido."
            );
        }


        if (typeof decoded.user_type !== "string") {
            throw new jwt.JsonWebTokenError(
                "Tipo de usuário inválido."
            );
        }


        return {
            sub: decoded.sub,
            user_type: decoded.user_type,
            type: "refresh",
            iat: decoded.iat,
            exp: decoded.exp,
        };
    }


    // =========================================================
    // TEMP TOKEN
    // =========================================================

    static GenerateTempToken(
        data: Record<string, any>
    ): string {

        this.validateConfiguration();

        return jwt.sign(
            {
                type: "temp",
                data,
            },
            this.TEMP_SECRET!,
            {
                expiresIn: "10m",
            }
        );
    }


    static VerifyTempToken(
        token: string
    ): TempTokenPayload {

        this.validateConfiguration();

        const decoded = jwt.verify(
            token,
            this.TEMP_SECRET!
        );


        if (
            typeof decoded !== "object" ||
            decoded === null
        ) {
            throw new jwt.JsonWebTokenError(
                "Payload do temporary token inválido."
            );
        }


        if (decoded.type !== "temp") {
            throw new jwt.JsonWebTokenError(
                "Tipo de temporary token inválido."
            );
        }


        if (
            typeof decoded.data !== "object" ||
            decoded.data === null ||
            Array.isArray(decoded.data)
        ) {
            throw new jwt.JsonWebTokenError(
                "Dados do temporary token inválidos."
            );
        }


        return {
            type: "temp",
            data: decoded.data,
            iat: decoded.iat,
            exp: decoded.exp,
        };
    }
}


export {
    JwtOperations,
};

export type {
    AccessTokenPayload,
    RefreshTokenPayload,
    TempTokenPayload,
};