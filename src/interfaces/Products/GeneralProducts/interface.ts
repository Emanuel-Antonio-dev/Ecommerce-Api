interface generalProductsDatas
{
    id_product?: number
    reference_code?: string
    name: string
    description: string
    price: number
    stock?: number
    available?: boolean
    additional_info: string
    id_category_fk: number
    id_brand_fk: number
    id_tags: number | number[] | any
    image_url?:string | string[] | any
    created_at?: Date
    updated_at?: Date
}
export {generalProductsDatas}