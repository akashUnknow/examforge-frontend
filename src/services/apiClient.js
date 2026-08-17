import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('examforge_access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

let isRefreshing = false
let pendingRequests = []

function resolvePendingRequests(error, token = null) {
  pendingRequests.forEach(({ resolve, reject }) => {
    if (error) reject(error)
    else resolve(token)
  })
  pendingRequests = []
}

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config
    const refreshToken = localStorage.getItem('examforge_refresh_token')

    if (error.response?.status !== 401 || originalRequest?._retry || !refreshToken) {
      return Promise.reject(error)
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        pendingRequests.push({ resolve, reject })
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`
        return apiClient(originalRequest)
      })
    }

    originalRequest._retry = true
    isRefreshing = true

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/refresh`, { refreshToken })
      const data = response.data?.data || response.data
      const newAccessToken = data.accessToken

      if (!newAccessToken) throw new Error('Refresh response did not contain an access token')

      localStorage.setItem('examforge_access_token', newAccessToken)
      if (data.refreshToken) localStorage.setItem('examforge_refresh_token', data.refreshToken)

      resolvePendingRequests(null, newAccessToken)
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
      return apiClient(originalRequest)
    } catch (refreshError) {
      resolvePendingRequests(refreshError)
      localStorage.removeItem('examforge_access_token')
      localStorage.removeItem('examforge_refresh_token')
      localStorage.removeItem('examforge_user')
      window.location.href = '/login'
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  },
)

export default apiClient
