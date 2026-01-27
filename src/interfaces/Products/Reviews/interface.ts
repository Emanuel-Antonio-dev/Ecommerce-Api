interface reviewsDatas
{
    id_review?: number
    rating: number
    comment: string
    id_product_fk: number
    id_user_fk: number
    created_at?: Date | string
    updated_at?: Date | string
}
export {reviewsDatas}