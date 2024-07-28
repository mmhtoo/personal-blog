import {useListenAuth} from '@/hooks'
import {Outlet} from 'react-router-dom'

export function RootLayout() {
  useListenAuth()
  return <Outlet />
}
