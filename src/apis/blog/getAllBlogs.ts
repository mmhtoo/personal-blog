import {TABLES} from '@/configs'
import {supabase} from '@/libs'

type GetAllBlogsParamType = {
  page?: number
  size?: number
}

export const getAllBlogs = async (param: GetAllBlogsParamType) => {
  const {page = 1, size = 1} = param
  const startPoint = (page - 1) * size
  return supabase
    .from(TABLES.BLOGS)
    .select('*')
    .range(startPoint, startPoint + size - 1)
    .order('created_at', {
      ascending: false,
    })
    .returns<Blog[]>()
}
