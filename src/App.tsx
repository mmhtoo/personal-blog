import {MantineProvider} from '@mantine/core'
import {theme} from './configs'
import {RouterProvider} from 'react-router-dom'
import router from './routers'
import {QueryClientProvider} from '@tanstack/react-query'
import {queryClient} from './libs'
import {Notifications} from '@mantine/notifications'

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}
