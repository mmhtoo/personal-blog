import {MantineProvider} from '@mantine/core'
import {theme} from './configs'
import {RouterProvider} from 'react-router-dom'
import router from './routers'

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
