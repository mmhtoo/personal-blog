import {createBrowserRouter} from 'react-router-dom'
import {authRoutes} from './routes/authRoutes'
import {publicRoutes} from './routes/publicRoutes'

export default createBrowserRouter([...authRoutes, ...publicRoutes])
