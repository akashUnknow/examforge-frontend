import { create } from 'zustand'

const savedUser = localStorage.getItem('examforge_user')

export const useAuthStore = create((set) => ({
  user: savedUser ? JSON.parse(savedUser) : null,
  isAuthenticated: Boolean(localStorage.getItem('examforge_access_token')),
  setAuth: ({ user, accessToken }) => {
    localStorage.setItem('examforge_access_token', accessToken)
    localStorage.setItem('examforge_user', JSON.stringify(user))
    set({ user, isAuthenticated: true })
  },
  logout: () => {
    localStorage.removeItem('examforge_access_token')
    localStorage.removeItem('examforge_user')
    set({ user: null, isAuthenticated: false })
  },
}))
