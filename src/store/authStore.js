import { create } from 'zustand'

const savedUser = localStorage.getItem('examforge_user')

let initialUser = null
try {
  initialUser = savedUser ? JSON.parse(savedUser) : null
} catch {
  localStorage.removeItem('examforge_user')
}

export const useAuthStore = create((set) => ({
  user: initialUser,
  isAuthenticated: Boolean(localStorage.getItem('examforge_access_token')),
  isLoading: false,

  setAuth: ({ user, accessToken, refreshToken }) => {
    localStorage.setItem('examforge_access_token', accessToken)
    if (refreshToken) localStorage.setItem('examforge_refresh_token', refreshToken)
    localStorage.setItem('examforge_user', JSON.stringify(user))
    set({ user, isAuthenticated: true, isLoading: false })
  },

  setUser: (user) => {
    localStorage.setItem('examforge_user', JSON.stringify(user))
    set({ user })
  },

  setLoading: (isLoading) => set({ isLoading }),

  logout: () => {
    localStorage.removeItem('examforge_access_token')
    localStorage.removeItem('examforge_refresh_token')
    localStorage.removeItem('examforge_user')
    set({ user: null, isAuthenticated: false, isLoading: false })
  },
}))
