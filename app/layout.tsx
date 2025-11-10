import './globals.css'
import Header from '../src/components/layout/Header'
import Footer from '../src/components/layout/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'HMS UI',
  description: 'Hospital Management System',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-gray-50">
        <Header />
        <main className="pt-16 lg:pt-20 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

