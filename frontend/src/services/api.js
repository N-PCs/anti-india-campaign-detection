import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API service functions
export const apiService = {
  // Get statistics
  getStats: () => api.get('/api/stats'),
  
  // Get detections
  getDetections: (limit = 50) => api.get(`/api/detections?limit=${limit}`),
  
  // Get detections by platform
  getDetectionsByPlatform: (platform, limit = 50) => 
    api.get(`/api/detections/${platform}?limit=${limit}`),
  
  // Get detection by ID
  getDetection: (id) => api.get(`/api/detection/${id}`),
  
  // Export data
  exportData: (format = 'json') => api.get(`/api/export?format=${format}`),
};

// Add request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;