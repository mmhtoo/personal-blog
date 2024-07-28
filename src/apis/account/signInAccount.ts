import {supabase} from '@/libs'

type SignInAccountParamType = {
  email: string
  password: string
}

export const signInAccount = async (param: SignInAccountParamType) => {
  return supabase.auth.signInWithPassword({
    email: param.email,
    password: param.password,
  })
}
