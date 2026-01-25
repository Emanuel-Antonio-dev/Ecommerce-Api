import { Decimal } from "../../../../generated/prisma/internal/prismaNamespace"
interface productsOrdersDatas
{
    id_order?: string
    total_amount: number
    id_user_fk: string 
    status: "pending" | "completed" | "cancelled" |"failed"
    payment_method: "cash"
    created_at?: Date | string
    updated_at?: Date | string
}
interface productsOrderItemsDatas
{
    id_order_item?: string
    id_order_fk: string
    id_product_fk: number
    quantity: number
    price: number | Decimal
    created_at?: Date | string
    updated_at?: Date | string
}
export{productsOrdersDatas, productsOrderItemsDatas}