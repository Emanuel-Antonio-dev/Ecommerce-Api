import { Request } from "express"
interface AuthenticationDatas
{
    type: "by_token"|"by_otp"
    used: boolean
    expireIn: Date | string | number
    id_account_fk?: string
    temp_email?: string,
    temp_phone_number?: string
    created_at?: Date | string
    updated_at?: Date | string
}
interface TokenDatas
{
    token: string
    token_type: "refreshToken" | "resetPassword"
    id_authentication: string
    created_at?: Date | string
    updated_at?: Date | string
}
interface OtpDatas
{
    id_two_factor_auth?: string
    otp_code: string,
    id_authentication_fk: string
    created_at?: Date | string
    updated_at?: Date | string
}
interface RequestWithCredentials extends Request {
  credentials?: {
    sub: number;
    user_type: "admin" | "client";
  };
}

export{AuthenticationDatas, TokenDatas, OtpDatas}