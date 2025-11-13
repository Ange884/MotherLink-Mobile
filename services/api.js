import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed
api.interceptors.request.use(
  (config) => {
    // Add auth token if available (you can get it from AsyncStorage or context)
    // const token = await AsyncStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      console.error('API Error:', error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error('Network Error:', error.request);
    } else {
      // Something else happened
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// ==================== AUTHENTICATION ====================
export const authAPI = {
  // Login
  login: (credentials) => api.post('/api/auth/login', credentials),
  
  // Register/Signup
  signup: (userData) => api.post('/api/auth/signup', userData),
  
  // Forgot Password
  forgotPassword: (phoneNumber) => api.post('/api/auth/forgot-password', { phoneNumber }),
  
  // Verify OTP/Code
  verifyOTP: (data) => api.post('/api/auth/verify', data),
  
  // Reset Password
  resetPassword: (data) => api.post('/api/auth/reset-password', data),
  
  // Logout
  logout: () => api.post('/api/auth/logout'),
};

// ==================== HOME ====================
export const homeAPI = {
  // Get overview statistics
  getOverview: () => api.get('/api/home/overview'),
  
  // Get today's appointments
  getTodayAppointments: () => api.get('/api/home/appointments/today'),
  
  // Get calendar data
  getCalendarData: (month, year) => api.get(`/api/home/calendar?month=${month}&year=${year}`),
};

// ==================== MOTHER MANAGEMENT ====================
export const motherAPI = {
  // Get all mothers
  getAllMothers: (params) => api.get('/api/mothers', { params }),
  
  // Get mother by ID
  getMotherById: (id) => api.get(`/api/mothers/${id}`),
  
  // Register new mother
  registerMother: (motherData) => api.post('/api/mothers', motherData),
  
  // Update mother
  updateMother: (id, motherData) => api.put(`/api/mothers/${id}`, motherData),
  
  // Delete mother
  deleteMother: (id) => api.delete(`/api/mothers/${id}`),
  
  // Get mother statistics
  getMotherStats: () => api.get('/api/mothers/stats'),
  
  // Search mothers
  searchMothers: (query) => api.get(`/api/mothers/search?q=${query}`),
};

// ==================== CHILD MANAGEMENT ====================
export const childAPI = {
  // Get all children
  getAllChildren: (params) => api.get('/api/children', { params }),
  
  // Get child by ID
  getChildById: (id) => api.get(`/api/children/${id}`),
  
  // Register new child
  registerChild: (childData) => api.post('/api/children', childData),
  
  // Update child
  updateChild: (id, childData) => api.put(`/api/children/${id}`, childData),
  
  // Delete child
  deleteChild: (id) => api.delete(`/api/children/${id}`),
  
  // Get child statistics
  getChildStats: () => api.get('/api/children/stats'),
  
  // Search children
  searchChildren: (query) => api.get(`/api/children/search?q=${query}`),
};

// ==================== APPOINTMENTS ====================
export const appointmentAPI = {
  // Get all appointments
  getAllAppointments: (params) => api.get('/api/appointments', { params }),
  
  // Get appointment by ID
  getAppointmentById: (id) => api.get(`/api/appointments/${id}`),
  
  // Create appointment
  createAppointment: (appointmentData) => api.post('/api/appointments', appointmentData),
  
  // Update appointment
  updateAppointment: (id, appointmentData) => api.put(`/api/appointments/${id}`, appointmentData),
  
  // Delete appointment
  deleteAppointment: (id) => api.delete(`/api/appointments/${id}`),
  
  // Get appointment statistics
  getAppointmentStats: () => api.get('/api/appointments/stats'),
  
  // Get appointments by status (upcoming, missed, completed)
  getAppointmentsByStatus: (status) => api.get(`/api/appointments/status/${status}`),
  
  // Mark appointment as completed
  completeAppointment: (id) => api.post(`/api/appointments/${id}/complete`),
};

// ==================== NOTIFICATIONS ====================
export const notificationAPI = {
  // Get all notifications
  getAllNotifications: (params) => api.get('/api/notifications', { params }),
  
  // Get notification by ID
  getNotificationById: (id) => api.get(`/api/notifications/${id}`),
  
  // Mark notification as read
  markAsRead: (id) => api.put(`/api/notifications/${id}/read`),
  
  // Mark all as read
  markAllAsRead: () => api.put('/api/notifications/read-all'),
  
  // Delete notification
  deleteNotification: (id) => api.delete(`/api/notifications/${id}`),
  
  // Get notifications by type
  getNotificationsByType: (type) => api.get(`/api/notifications/type/${type}`),
};

// ==================== ANALYTICS ====================
export const analyticsAPI = {
  // Get analytics data
  getAnalytics: (period) => api.get(`/api/analytics?period=${period}`),
  
  // Get antenatal appointments chart data
  getAntenatalChartData: (period) => api.get(`/api/analytics/antenatal-chart?period=${period}`),
  
  // Get attendance overview
  getAttendanceOverview: () => api.get('/api/analytics/attendance'),
  
  // Get emergency overview
  getEmergencyOverview: () => api.get('/api/analytics/emergency'),
};

// ==================== HOME VISITS ====================
export const homeVisitAPI = {
  // Get all home visits
  getAllHomeVisits: (params) => api.get('/api/home-visits', { params }),
  
  // Get home visit by ID
  getHomeVisitById: (id) => api.get(`/api/home-visits/${id}`),
  
  // Create home visit
  createHomeVisit: (visitData) => api.post('/api/home-visits', visitData),
  
  // Update home visit
  updateHomeVisit: (id, visitData) => api.put(`/api/home-visits/${id}`, visitData),
  
  // Delete home visit
  deleteHomeVisit: (id) => api.delete(`/api/home-visits/${id}`),
};

// ==================== HOUSE DETAILS ====================
export const houseAPI = {
  // Get all houses
  getAllHouses: (params) => api.get('/api/houses', { params }),
  
  // Get house by ID
  getHouseById: (id) => api.get(`/api/houses/${id}`),
  
  // Create house
  createHouse: (houseData) => api.post('/api/houses', houseData),
  
  // Update house
  updateHouse: (id, houseData) => api.put(`/api/houses/${id}`, houseData),
  
  // Delete house
  deleteHouse: (id) => api.delete(`/api/houses/${id}`),
  
  // Search houses
  searchHouses: (query) => api.get(`/api/houses/search?q=${query}`),
};

// ==================== EMERGENCIES ====================
export const emergencyAPI = {
  // Get all emergencies
  getAllEmergencies: (params) => api.get('/api/emergencies', { params }),
  
  // Get emergency by ID
  getEmergencyById: (id) => api.get(`/api/emergencies/${id}`),
  
  // Create emergency record
  createEmergency: (emergencyData) => api.post('/api/emergencies', emergencyData),
  
  // Update emergency
  updateEmergency: (id, emergencyData) => api.put(`/api/emergencies/${id}`, emergencyData),
  
  // Delete emergency
  deleteEmergency: (id) => api.delete(`/api/emergencies/${id}`),
  
  // Get emergency statistics
  getEmergencyStats: () => api.get('/api/emergencies/stats'),
};

// ==================== PROFILE ====================
export const profileAPI = {
  // Get user profile
  getProfile: () => api.get('/api/profile'),
  
  // Update user profile
  updateProfile: (profileData) => api.put('/api/profile', profileData),
  
  // Change password
  changePassword: (passwordData) => api.put('/api/profile/password', passwordData),
};

export default api;

