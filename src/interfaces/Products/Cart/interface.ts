import { Decimal } from "../../../../generated/prisma/internal/prismaNamespace"
interface cartDatas
{
    id_cart?: number
    id_user_fk: number
    id_guest_cart?: string
    status: "waiting" | "active" | "ordered" | "cancelled"
    created_at?: Date | string
    updated_at?: Date | string
}
interface cartItemsDatas
{
    id_cart_item?: number
    quantity: number
    id_cart_fk: number
    price: number | Decimal
    id_product_fk: number
    created_at?: Date | string
    updated_at?: Date | string
}
export{cartDatas, cartItemsDatas}