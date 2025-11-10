// User Types
export interface User {
  id: string
  fullName: string
  email: string
  phone: string
  gender: 'Male' | 'Female' | 'Other'
  role: 'Admin' | 'Doctor' | 'User'
  address: string
  appointmentTime: string
  assignedDoctor: string
}

// Doctor Types
export interface Doctor {
  id: string
  name: string
  department: string
  specialization: string
}

// Department Types
export interface Department {
  id: string
  name: string
  description: string
  headDoctor: string
  totalDoctors: number
  totalPatients: number
}

// Appointment Types
export interface Appointment {
  id: string
  userId: string
  doctorId: string
  doctorName: string
  department: string
  appointmentDate: string
  appointmentTime: string
  status: 'Scheduled' | 'Completed' | 'Cancelled' | 'Rescheduled' | 'In Progress'
  reason: string
  notes: string
}

// Auth Types
export interface AuthUser {
  role: string
  email: string
}

export interface AuthContextType {
  user: AuthUser | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (userData: AuthUser) => void
  logout: () => void
}

// Form Types
export interface UserFormData {
  fullName: string
  email: string
  phone: string
  gender: 'Male' | 'Female' | 'Other'
  role: 'User' | 'Doctor'
  address: string
  appointmentTime: string
  assignedDoctor: string
}

export interface LoginFormData {
  email: string
  password: string
  role: 'Admin' | 'Doctor' | 'User'
}

// Component Props Types
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
  className?: string
}

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string
  name?: string
  error?: string
  className?: string
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
  label?: string
  name?: string
  options?: Array<{ value: string; label: string }> | string[]
  placeholder?: string
  error?: string
  className?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  showCloseButton?: boolean
  className?: string
}

export interface TableColumn {
  key?: string
  label?: string
  header?: string
  accessor?: string | ((row: any) => any)
  align?: 'left' | 'right' | 'center'
  render?: (value: any, row: any, index: number) => React.ReactNode
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  emptyMessage?: string
  className?: string
  onRowClick?: (row: any, index: number) => void
  renderCell?: (column: TableColumn, value: any, row: any, index: number) => React.ReactNode
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: string
}

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'purple'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'teal' | 'blue' | 'gray' | 'white'
  className?: string
}

export interface EmptyStateProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export interface AvatarProps {
  name?: string
  image?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  className?: string
}

