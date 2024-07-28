import {PUBLIC_ROUTES} from '@/configs'
import {RouteObject} from 'react-router-dom'
import {HomePage} from '@/pages'
import {RootLayout} from '@/components/layouts'
import {authRoutes} from './authRoutes'
import {dashboardRoutes} from './dashboardRoutes'

export const rootRoutes: RouteObject[] = [
  {
    path: PUBLIC_ROUTES.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...authRoutes,
      ...dashboardRoutes,
    ],
  },
]
