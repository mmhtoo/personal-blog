import {Roles} from '@/configs'
import {create} from 'zustand'
import {createJSONStorage} from 'zustand/middleware'
import {persist} from 'zustand/middleware'

type UserStoreType = {
  accessToken?: string
  refreshToken?: string
  uid?: string
  username?: string
  email?: string
  role_id?: Roles
  createdAt?: Date | string
  lastSignInAt?: Date | string
  emailVerifiedAt?: Date | string
}

type UserStoreActionType = {
  setToken: (
    payload: Required<Pick<UserStoreType, 'accessToken' | 'refreshToken'>>,
  ) => void
  setUserInfo: (
    payload: Pick<
      UserStoreType,
      | 'uid'
      | 'username'
      | 'email'
      | 'role_id'
      | 'createdAt'
      | 'lastSignInAt'
      | 'emailVerifiedAt'
    >,
  ) => void
}

export const useUserStore = create<UserStoreType & UserStoreActionType>()(
  persist(
    (set) => ({
      setToken: (payload) => {
        set((state) => ({
          ...state,
          accessToken: payload.accessToken,
          refreshToken: payload.refreshToken,
        }))
      },
      setUserInfo: (payload) => {
        set((state) => ({
          ...state,
          ...payload,
        }))
      },
    }),
    {
      name: 'user-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
export const setToken = (state: UserStoreActionType) => state.setToken
export const setUserInfos = (state: UserStoreActionType) => state.setUserInfo
export const selectTokens = (state: UserStoreType) => ({
  accessToken: state.accessToken,
  refreshToken: state.refreshToken,
})

export const selectUserInfos = (state: UserStoreType) => ({
  uid: state.uid,
  username: state.username,
  email: state.email,
  role_id: state.role_id,
  createdAt: state.createdAt,
  lastSignInAt: state.lastSignInAt,
  emailVerifiedAt: state.emailVerifiedAt,
})
