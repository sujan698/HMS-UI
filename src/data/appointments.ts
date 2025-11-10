import { Appointment } from '@/src/types'

export const appointments: Appointment[] = [
  {
    id: '1',
    userId: '1',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    appointmentDate: '2024-03-15T10:00:00',
    appointmentTime: '10:00 AM',
    status: 'Scheduled',
    reason: 'Regular checkup',
    notes: 'Patient requested routine cardiac examination'
  },
  {
    id: '2',
    userId: '2',
    doctorId: '2',
    doctorName: 'Dr. Michael Chen',
    department: 'Pediatrics',
    appointmentDate: '2024-03-16T14:30:00',
    appointmentTime: '2:30 PM',
    status: 'Scheduled',
    reason: 'Child vaccination',
    notes: 'Annual vaccination schedule'
  },
  {
    id: '3',
    userId: '3',
    doctorId: '3',
    doctorName: 'Dr. Emily Davis',
    department: 'Internal Medicine',
    appointmentDate: '2024-03-17T09:15:00',
    appointmentTime: '9:15 AM',
    status: 'Completed',
    reason: 'General consultation',
    notes: 'Follow-up appointment completed successfully'
  },
  {
    id: '4',
    userId: '5',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    appointmentDate: '2024-03-19T13:45:00',
    appointmentTime: '1:45 PM',
    status: 'Scheduled',
    reason: 'Cardiac evaluation',
    notes: 'Patient experiencing chest discomfort'
  },
  {
    id: '5',
    userId: '7',
    doctorId: '1',
    doctorName: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    appointmentDate: '2024-03-21T10:30:00',
    appointmentTime: '10:30 AM',
    status: 'Scheduled',
    reason: 'Post-surgery follow-up',
    notes: 'Routine post-operative check'
  },
  {
    id: '6',
    userId: '8',
    doctorId: '2',
    doctorName: 'Dr. Michael Chen',
    department: 'Pediatrics',
    appointmentDate: '2024-03-22T08:00:00',
    appointmentTime: '8:00 AM',
    status: 'Cancelled',
    reason: 'Child wellness exam',
    notes: 'Patient cancelled due to illness'
  },
  {
    id: '7',
    userId: '1',
    doctorId: '4',
    doctorName: 'Dr. James Wilson',
    department: 'Orthopedics',
    appointmentDate: '2024-03-25T11:00:00',
    appointmentTime: '11:00 AM',
    status: 'Scheduled',
    reason: 'Knee pain consultation',
    notes: 'Patient complaining of persistent knee pain'
  },
  {
    id: '8',
    userId: '2',
    doctorId: '5',
    doctorName: 'Dr. Lisa Anderson',
    department: 'Neurology',
    appointmentDate: '2024-03-26T15:00:00',
    appointmentTime: '3:00 PM',
    status: 'Scheduled',
    reason: 'Headache evaluation',
    notes: 'Chronic headaches - need specialist consultation'
  }
]

// Appointment statuses
export const appointmentStatuses = [
  'Scheduled',
  'Completed',
  'Cancelled',
  'Rescheduled',
  'In Progress'
] as const

// Appointment reasons/common issues
export const appointmentReasons = [
  'Regular checkup',
  'General consultation',
  'Follow-up appointment',
  'Emergency consultation',
  'Vaccination',
  'Diagnostic test',
  'Post-surgery follow-up',
  'Prescription refill',
  'Specialist referral',
  'Routine screening'
] as const

