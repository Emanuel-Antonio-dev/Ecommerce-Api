interface AuthenticationDatas
{
    type: "by_token"|"by_otp"
    used: boolean
    expireIn: Date | string | number
    id_account_fk: string
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
export{AuthenticationDatas, TokenDatas}