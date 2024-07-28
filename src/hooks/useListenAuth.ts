import {DASHBOARD_ROUTES, PUBLIC_ROUTES, Roles} from '@/configs'
import {supabase} from '@/libs'
import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export function useListenAuth() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    supabase.auth.getUser().then(({error, data}) => {
      if (!error && data) {
        const role_id = data.user.user_metadata.role_id
        if (location.pathname.includes('/auth')) {
          navigate(
            role_id === Roles.ADMIN
              ? DASHBOARD_ROUTES.ROOT
              : PUBLIC_ROUTES.HOME,
            {
              replace: true,
            },
          )
        }
      }
    })
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        supabase.auth.startAutoRefresh()
      }
      if (event === 'SIGNED_OUT') {
        supabase.auth.stopAutoRefresh()
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [location, navigate])
}
