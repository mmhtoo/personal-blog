import {Roles, TABLES} from '@/configs'
import {supabase} from '@/libs'

export type CreateAccountParamType = {
  username: string
  email: string
  password: string
}

export const createAccount = async (param: CreateAccountParamType) => {
  return supabase
    .from(TABLES.ACCOUNTS)
    .insert({...param, role_id: Roles.USER, has_email_verified: false})
}
