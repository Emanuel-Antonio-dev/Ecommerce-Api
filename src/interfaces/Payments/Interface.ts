interface StripeIntentDatas
{
    order_id?: string,
    amount?: number,
    currency?: string,
    metadata?: Record<string, string>
}
export{StripeIntentDatas}