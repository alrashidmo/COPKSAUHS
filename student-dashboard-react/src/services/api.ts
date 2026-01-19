import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth endpoints
export const auth = {
  register: (data: any) => api.post('/auth/register', data),
  login: (email: string, password: string) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout')
}

// User endpoints
export const users = {
  getProfile: () => api.get('/users/me'),
  updateProfile: (data: any) => api.patch('/users/me', data),
  changePassword: (data: any) => api.post('/users/change-password', data),
  getAllUsers: (page: number = 1, limit: number = 10) => api.get('/users', { params: { page, limit } })
}

// Clinical endpoints
export const clinical = {
  getData: () => api.get('/clinical'),
  addHours: (hours: number) => api.post('/clinical/hours', { hours }),
  addActivity: (title: string, detail: string) => api.post('/clinical/activities', { title, detail }),
  toggleActivity: (id: string) => api.patch(`/clinical/activities/${id}/toggle`),
  addAttendance: (date: string, note: string, status: string) => api.post('/clinical/attendance', { date, note, status })
}

export default api
