import { PaymentProviders, PaymentStatus, Providers } from "../../../generated/prisma/enums"

interface StripeIntentDatas
{
    id_order: number,
    amount?: number,
    currency?: string,
    metadata?: Record<string, string>
}
interface PaymentsDatas{
    id_payment?:string
    amount: number
    currency: string
    payment_status:PaymentStatus
    provider: PaymentProviders
    provider_reference?: string
    paid_at?: Date | string
    metadata?: {} | string
    id_order_fk: number
    created_at?: Date | string
    updated_at?: Date | string
}
export{StripeIntentDatas, PaymentsDatas}