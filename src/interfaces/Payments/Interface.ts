interface StripeIntentDatas
{
    id_order: number,
    amount?: number,
    currency?: string,
    metadata?: Record<string, string>
}
export{StripeIntentDatas}