import { User } from '@/src/types'

// User roles
export const USER_ROLES = {
  ADMIN: 'Admin',
  DOCTOR: 'Doctor',
  USER: 'User'
} as const

// Gender options
export const GENDERS = ['Male', 'Female', 'Other'] as const

// Initial users data
export const initialUsers: User[] = [
  {
    id: '1',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234-567-8900',
    gender: 'Male',
    role: 'User',
    address: '123 Main Street, New York, NY 10001',
    appointmentTime: '2024-03-15T10:00:00',
    assignedDoctor: 'Dr. Sarah Johnson'
  },
  {
    id: '2',
    fullName: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 234-567-8901',
    gender: 'Female',
    role: 'User',
    address: '456 Oak Avenue, Los Angeles, CA 90001',
    appointmentTime: '2024-03-16T14:30:00',
    assignedDoctor: 'Dr. Michael Chen'
  },
  {
    id: '3',
    fullName: 'Robert Williams',
    email: 'robert.williams@example.com',
    phone: '+1 234-567-8902',
    gender: 'Male',
    role: 'User',
    address: '789 Pine Road, Chicago, IL 60601',
    appointmentTime: '2024-03-17T09:15:00',
    assignedDoctor: 'Dr. Emily Davis'
  },
  {
    id: '4',
    fullName: 'Emily Brown',
    email: 'emily.brown@example.com',
    phone: '+1 234-567-8903',
    gender: 'Female',
    role: 'Doctor',
    address: '321 Elm Street, Houston, TX 77001',
    appointmentTime: '2024-03-18T11:00:00',
    assignedDoctor: 'Dr. Sarah Johnson'
  },
  {
    id: '5',
    fullName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    phone: '+1 234-567-8904',
    gender: 'Male',
    role: 'User',
    address: '654 Maple Drive, Phoenix, AZ 85001',
    appointmentTime: '2024-03-19T13:45:00',
    assignedDoctor: 'Dr. Michael Chen'
  },
  {
    id: '6',
    fullName: 'Sarah Davis',
    email: 'sarah.davis@example.com',
    phone: '+1 234-567-8905',
    gender: 'Female',
    role: 'Doctor',
    address: '987 Cedar Lane, Philadelphia, PA 19101',
    appointmentTime: '2024-03-20T15:30:00',
    assignedDoctor: 'Dr. Emily Davis'
  },
  {
    id: '7',
    fullName: 'David Miller',
    email: 'david.miller@example.com',
    phone: '+1 234-567-8906',
    gender: 'Male',
    role: 'User',
    address: '147 Birch Court, San Antonio, TX 78201',
    appointmentTime: '2024-03-21T10:30:00',
    assignedDoctor: 'Dr. Sarah Johnson'
  },
  {
    id: '8',
    fullName: 'Lisa Wilson',
    email: 'lisa.wilson@example.com',
    phone: '+1 234-567-8907',
    gender: 'Female',
    role: 'User',
    address: '258 Spruce Avenue, San Diego, CA 92101',
    appointmentTime: '2024-03-22T08:00:00',
    assignedDoctor: 'Dr. Michael Chen'
  }
]

