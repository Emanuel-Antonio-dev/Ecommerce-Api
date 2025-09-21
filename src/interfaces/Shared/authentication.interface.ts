interface AuthenticationDatas
{
    type: "by_token"|"by_otp"
    used: boolean
    expireIn: Date | string | number
    id_account_fk: string

}
interface TokenDatas
{
    token: string
    token_type: "refreshToken" | "resetPassword"
    id_authentication: string
}
export{AuthenticationDatas, TokenDatas}