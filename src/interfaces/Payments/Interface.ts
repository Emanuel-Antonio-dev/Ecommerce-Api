interface StripeIntentDatas
{
    order_id?: number,
    amount?: number,
    currency?: string,
    metadata?: Record<string, string>
}
export{StripeIntentDatas}