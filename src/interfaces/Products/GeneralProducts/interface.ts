interface generalProductsDatas
{
    id_product?: number
    reference_code: string
    name: string
    description: string
    price: number
    stock: number
    available: boolean
    aditional_info: string
    id_category_fk: number
    created_at?: Date
    updated_at?: Date
}
export {generalProductsDatas}