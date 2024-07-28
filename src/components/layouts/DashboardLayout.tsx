import {Box, Flex} from '@mantine/core'
import {useViewportSize} from '@mantine/hooks'
import {Outlet} from 'react-router-dom'
import {DashboardSidebar} from '../menus'

export function DashboardLayout() {
  const {width, height} = useViewportSize()
  return (
    <Box w={width} h={height} mah={height} maw={width} component="div">
      <Flex columnGap="md" h="100%" bg="#f3f3f3">
        <Box component="div" w="18%" h="100%">
          <DashboardSidebar />
        </Box>
        <Box component="div" w="82%" p="md">
          <Outlet />
        </Box>
      </Flex>
    </Box>
  )
}
