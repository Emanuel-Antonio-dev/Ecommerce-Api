interface contactsDatas
{
    id_contact?: string
    phone_number: string | string[] | any
    id_user_fk: string
    created_at?: Date
    updated_at?: Date
}
export { contactsDatas }