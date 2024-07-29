import {Box, Flex, Grid} from '@mantine/core'
import {NewBlogModal} from './components/NewBlogModal'
import {useGetAllBlogs} from './hooks/useGetAllBlogs'
import {useMemo} from 'react'
import {PreviewBlog} from './components/PreviewBlog'

export function BlogsPage() {
  const {data} = useGetAllBlogs({
    page: 1,
    size: 3,
  })
  const blogs = useMemo(() => {
    return data ? data.pages.flatMap((page) => page.data!) : []
  }, [data])
  return (
    <Box component="div" p="sm">
      <Flex justify="flex-end">
        <NewBlogModal />
      </Flex>
      <Box component="div" mt="md" p="md">
        <Grid>
          {blogs.map((blog) => (
            <Grid.Col
              key={blog.id}
              span={{
                xs: 12,
                md: 6,
                lg: 4,
              }}>
              <PreviewBlog {...blog} />
            </Grid.Col>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
