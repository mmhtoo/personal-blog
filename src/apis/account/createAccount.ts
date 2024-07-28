import {Roles} from '@/configs'
import {supabase} from '@/libs'

export type CreateAccountParamType = {
  username: string
  email: string
  password: string
  role_id?: number
}

export const createAccount = async (param: CreateAccountParamType) => {
  const {email, password, username, role_id} = param
  return supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username,
        role_id: role_id || Roles.USER,
        has_email_verified: false,
      },
    },
  })
}
