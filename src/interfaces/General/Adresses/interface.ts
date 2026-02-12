interface addressesDatas
{
  id_address?: string;
  id_user_fk: number;
  street: string
  city: string
  province: string
  country?: string
  reference: string
  is_default?: boolean
  created_at?: Date;
  updated_at?: Date;
}
export { addressesDatas };