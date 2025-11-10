'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function UserPage() {
  const router = useRouter()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')
    const userRole = localStorage.getItem('userRole')
    
    if (!isAuthenticated || userRole !== 'User') {
      router.push('/login')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            User Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to the User Dashboard. This page is under construction.
          </p>
        </div>
      </div>
    </div>
  )
}

