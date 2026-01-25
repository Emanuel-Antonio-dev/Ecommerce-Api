interface usersDatas
{
    id_user?: string
    first_name: string
    last_name: string
    username: string
    user_type: "admin" | "client"
    id_account_fk: string
    created_at?: Date
    updated_at?: Date
}
export { usersDatas }