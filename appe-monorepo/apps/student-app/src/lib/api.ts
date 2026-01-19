import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    apiClient.post('/auth/login', { email, password }),
  getProfile: () => apiClient.get('/auth/me'),
};

// Student API
export const studentApi = {
  getDashboard: () => apiClient.get('/students/dashboard'),
  getTrainingOverview: () => apiClient.get('/students/training/overview'),
};

// Survey API
export const surveyApi = {
  getAssigned: () => apiClient.get('/surveys/assigned'),
  getDetail: (id: string) => apiClient.get(`/surveys/${id}`),
  submit: (data: any) => apiClient.post('/surveys/submit', data),
};

// Participation API
export const participationApi = {
  getAll: () => apiClient.get('/participation'),
  create: (data: any) => apiClient.post('/participation', data),
  submit: (id: string) => apiClient.patch(`/participation/${id}/submit`),
  delete: (id: string) => apiClient.delete(`/participation/${id}`),
};

// Awards API
export const awardsApi = {
  getAll: () => apiClient.get('/awards'),
  create: (data: any) => apiClient.post('/awards', data),
  submit: (id: string) => apiClient.patch(`/awards/${id}/submit`),
  delete: (id: string) => apiClient.delete(`/awards/${id}`),
};

// Clearance API
export const clearanceApi = {
  getAll: () => apiClient.get('/clearance'),
  submit: (data: any) => apiClient.post('/clearance/submit', data),
};
