import {PUBLIC_ROUTES} from '@/configs'
import {RouteObject} from 'react-router-dom'
import {HomePage} from '@/pages'

export const publicRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: <HomePage />,
  },
]
