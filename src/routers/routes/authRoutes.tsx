import {AUTH_ROUTES} from '@/configs'
import {SignInPage, SignUpPage} from '@/pages'
import {RouteObject} from 'react-router-dom'

export const authRoutes: RouteObject[] = [
  {
    path: AUTH_ROUTES.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: AUTH_ROUTES.SIGN_IN,
    element: <SignInPage />,
  },
]
