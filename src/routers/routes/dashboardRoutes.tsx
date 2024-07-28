import {DashboardLayout} from '@/components/layouts'
import {DASHBOARD_ROUTES} from '@/configs'
import {
  BlogsPage,
  DashboardPage,
  TrashPage,
  UsersPage,
  WriteBlogPage,
} from '@/pages'
import {RouteObject} from 'react-router-dom'

export const dashboardRoutes: RouteObject[] = [
  {
    path: DASHBOARD_ROUTES.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: DASHBOARD_ROUTES.BLOGS,
        element: <BlogsPage />,
      },
      {
        path: DASHBOARD_ROUTES.USERS,
        element: <UsersPage />,
      },
      {
        path: DASHBOARD_ROUTES.TRASH,
        element: <TrashPage />,
      },
      {
        path: DASHBOARD_ROUTES.WRITE_BLOG,
        element: <WriteBlogPage />,
      },
    ],
  },
]
