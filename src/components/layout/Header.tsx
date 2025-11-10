'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const role = localStorage.getItem('userRole')
    const auth = localStorage.getItem('isAuthenticated') === 'true'
    setUserRole(role)
    setIsAuthenticated(auth)
  }, [])

  const isPublicPage = pathname === '/' || pathname === '/login'

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')
    window.location.href = '/login'
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}
      `}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">H</span>
              </div>
              <span className="ml-2 text-xl lg:text-2xl font-bold text-gray-900">
                HMS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isPublicPage && (
              <>
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${
                    pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/login"
                  className={`text-sm font-medium transition-colors ${
                    pathname === '/login' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  Login
                </Link>
              </>
            )}
            
            {isAuthenticated && !isPublicPage && (
              <>
                <span className="text-sm text-gray-600">
                  Logged in as: <span className="font-semibold text-teal-600">{userRole}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-teal-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <div className="flex flex-col space-y-4 pt-4">
              {isPublicPage && (
                <>
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      pathname === '/' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${
                      pathname === '/login' ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
                    }`}
                  >
                    Login
                  </Link>
                </>
              )}
              
              {isAuthenticated && !isPublicPage && (
                <>
                  <span className="text-base text-gray-600">
                    Logged in as: <span className="font-semibold text-teal-600">{userRole}</span>
                  </span>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMobileMenuOpen(false)
                    }}
                    className="text-left text-base font-medium text-gray-700 hover:text-teal-600 transition-colors"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

