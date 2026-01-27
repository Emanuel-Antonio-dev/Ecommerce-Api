import { Decimal } from "../../../../generated/prisma/internal/prismaNamespace"
interface productsOrdersDatas
{
    id_order?: number
    total_amount: number
    id_user_fk: number 
    status: "pending" | "completed" | "cancelled" |"failed"
    payment_method: "cash"
    created_at?: Date | string
    updated_at?: Date | string
}
interface productsOrderItemsDatas
{
    id_order_item?: number
    id_order_fk: number
    id_product_fk: number
    quantity: number
    price: number | Decimal
    created_at?: Date | string
    updated_at?: Date | string
}
export{productsOrdersDatas, productsOrderItemsDatas}