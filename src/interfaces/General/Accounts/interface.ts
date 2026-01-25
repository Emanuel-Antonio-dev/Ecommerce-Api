interface accountDatas
{
    id_account?: string
    email: string
    password?: string // Opcional quando provider (OAuth) está presente
    newPassword?: string
    verified?: boolean
    is_active?: boolean
    provider?: "Local" | "Google" | "Facebook"
    providerId?: string
    created_at?: Date | string
    updated_at?: Date | string
}
export { accountDatas } 