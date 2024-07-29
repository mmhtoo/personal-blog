import {getAllBlogs} from '@/apis/blog'
import {QUERY_KEYS} from '@/configs'
import {useInfiniteQuery} from '@tanstack/react-query'

type Param = {
  page?: number
  size?: number
}

export function useGetAllBlogs(param: Param) {
  return useInfiniteQuery({
    queryKey: [QUERY_KEYS.ALL_BLOGS, param],
    queryFn: ({pageParam}) => getAllBlogs({page: pageParam, size: param.size}),
    initialPageParam: param.page || 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (!lastPage || !lastPage.data || lastPage.data?.length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  })
}
