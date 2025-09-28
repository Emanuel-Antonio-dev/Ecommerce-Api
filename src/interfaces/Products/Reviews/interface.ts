interface reviewsDatas
{
    id_review?: string
    rating: number
    comment: string
    id_product_fk: number
    id_user_fk: string
    created_at?: Date | string
    updated_at?: Date | string
}
export {reviewsDatas}