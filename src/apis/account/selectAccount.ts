import {TABLES} from '@/configs'
import {supabase} from '@/libs'
import {PostgrestSingleResponse} from '@supabase/supabase-js'

export const selectAccount = async (
  email: string,
): Promise<PostgrestSingleResponse<Array<Account>>> => {
  return supabase.from(TABLES.ACCOUNTS).select('*').eq('email', email)
}
