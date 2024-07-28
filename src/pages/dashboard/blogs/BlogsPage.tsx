import {Box, Flex} from '@mantine/core'
import {NewBlogModal} from './components/NewBlogModal'

export function BlogsPage() {
  return (
    <Box component="div" p="sm">
      <Flex justify="flex-end">
        <NewBlogModal />
      </Flex>
    </Box>
  )
}
