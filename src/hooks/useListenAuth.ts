import {DASHBOARD_ROUTES, PUBLIC_ROUTES, Roles} from '@/configs'
import {supabase} from '@/libs'
import {setToken, setUserInfos, useUserStore} from '@/store'
import {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

export function useListenAuth() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatchSetToken = useUserStore(setToken)
  const dispatchSetUserInfos = useUserStore(setUserInfos)

  useEffect(() => {
    supabase.auth.getUser().then(({error, data}) => {
      if (!error && data) {
        const user = data.user
        const role_id = user.user_metadata.role_id
        dispatchSetUserInfos({
          uid: user.id,
          email: user.email,
          createdAt: user.created_at,
          username: user.user_metadata.username,
          role_id: user.user_metadata.role_id,
          lastSignInAt: user.last_sign_in_at,
          emailVerifiedAt: user.email_confirmed_at,
        })
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
        dispatchSetToken({
          accessToken: session.access_token,
          refreshToken: session.refresh_token,
        })
        supabase.auth.startAutoRefresh()
      }
      if (event === 'SIGNED_OUT') {
        supabase.auth.stopAutoRefresh()
      }
    })
    return () => {
      subscription.unsubscribe()
    }
  }, [location, navigate, dispatchSetUserInfos, dispatchSetToken])
}
