import {TABLES} from '@/configs'
import {supabase} from '@/libs'
import {PostgrestSingleResponse} from '@supabase/supabase-js'

export type CreateNewBlogParamType = {
  title: string
  tag: string
  slug: string
}

export const createNewBlog = async (
  param: CreateNewBlogParamType,
): Promise<
  PostgrestSingleResponse<
    {
      id: string
    }[]
  >
> => {
  return supabase
    .from(TABLES.BLOGS)
    .insert({...param, is_draft: true, content: ''}, {})
    .select('id')
}
