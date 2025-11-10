/**
 * Application constants
 */

// User Roles
export const USER_ROLES = {
  ADMIN: 'Admin',
  DOCTOR: 'Doctor',
  USER: 'User'
} as const

// Route paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  ADMIN: '/admin',
  DOCTOR: '/doctor',
  USER: '/user'
} as const

// LocalStorage keys
export const STORAGE_KEYS = {
  IS_AUTHENTICATED: 'isAuthenticated',
  USER_ROLE: 'userRole',
  USER_EMAIL: 'userEmail'
} as const

// Gender options
export const GENDERS = ['Male', 'Female', 'Other'] as const

// Validation rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 6,
  PASSWORD_MAX_LENGTH: 128,
  EMAIL_MAX_LENGTH: 255,
  NAME_MAX_LENGTH: 100,
  PHONE_MIN_LENGTH: 10,
  PHONE_MAX_LENGTH: 15
} as const

// API endpoints (for future use)
export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  USERS: '/api/users',
  DOCTORS: '/api/doctors',
  APPOINTMENTS: '/api/appointments'
} as const

// Date formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM dd, yyyy hh:mm a',
  DATE_ONLY: 'MMM dd, yyyy',
  TIME_ONLY: 'hh:mm a',
  DATETIME_LOCAL: "yyyy-MM-dd'T'HH:mm"
} as const

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100]
} as const

// Table columns configuration
export const TABLE_COLUMNS = {
  USERS: [
    { key: 'fullName', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'gender', label: 'Gender' },
    { key: 'role', label: 'Role' },
    { key: 'appointmentTime', label: 'Appointment' },
    { key: 'assignedDoctor', label: 'Assigned Doctor' }
  ]
} as const

