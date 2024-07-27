import {createBrowserRouter} from 'react-router-dom'
import {authRoutes} from './routes/authRoutes'
import {publicRoutes} from './routes/publicRoutes'
import {dashboardRoutes} from './routes/dashboardRoutes'

export default createBrowserRouter([
  ...authRoutes,
  ...publicRoutes,
  ...dashboardRoutes,
])
