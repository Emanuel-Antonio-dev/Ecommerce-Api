interface ProductsOrders
{
    id_order: string
    total_amount: number
    id_user_fk: string 
    status: "pending" | "completed" | "cancelled"
    payment_method: "cash"
}
export{ProductsOrders}