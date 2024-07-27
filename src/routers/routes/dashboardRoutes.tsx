import {DashboardPage} from '@/pages'
import {RouteObject} from 'react-router-dom'

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/d',
    element: <DashboardPage />,
  },
]
